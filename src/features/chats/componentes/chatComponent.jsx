import supabase from '../../../utils/supabase.js';
import { useRef, useEffect, useState } from 'react';

export default function ChatComponent() {
  const channel = useRef(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('id', { ascending: true }); // Asegúrate de tener un campo 'id' para ordenar los mensajes

      if (error) {
        console.error('Error fetching messages:', error);
      } else {
        setMessages(data);
      }
    };

    fetchMessages();

    if (!channel.current) {
      const client = supabase;

      channel.current = client.channel('chat-room', {
        config: {
          broadcast: {
            self: true,
          },
        },
      });

      channel.current
        .on('broadcast', { event: 'message' }, ({ payload }) => {
          setMessages((prev) => (prev ? [...prev, payload] : [payload]));
        })
        .subscribe();
    }

    return () => {
      channel.current?.unsubscribe();
      channel.current = null;
    };
  }, []);

  const onSend = async () => {
    if (!channel.current || message.trim().length === 0 || !user) return;

    // Guarda el mensaje en la base de datos
    const { error } = await supabase
      .from('messages')
      .insert([{ user, message }]); // Asegúrate de que las columnas coincidan

    if (error) {
      console.error('Error sending message:', error);
    } else {
      channel.current.send({
        type: 'broadcast',
        event: 'message',
        payload: { user, message },
      });
      setMessage(''); // Reinicia el campo de mensaje
    }
  };

  const handleUser = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="flex-[0.2] text-2xl"
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={handleUser}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              onSend();
            }
          }}
          className="flex-[0.7] text-2xl"
        />
        <button onClick={onSend} className="text-2xl">
          Send
        </button>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg w-2/3 text-2xl bg-${user === msg.user ? 'text-blue-500' : 'text-black'} ${user === msg.user ? 'self-end' : 'self-start'}`}
          >
            <strong>{msg.user}:</strong> {msg.message}
          </div>
        ))}
      </div>
    </div>
  );
}
