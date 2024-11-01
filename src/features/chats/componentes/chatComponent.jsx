import toast from 'react-hot-toast';
import supabase from '../../../utils/supabase.js';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChatComponent() {
  const channel = useRef(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

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

    const userExists = messages.some((msg) => msg.user === user);

    if (userExists) {
      toast.error(
        'El nombre de usuario ya existe en el chat. Por favor, elige otro.',
      );
      return;
    }

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
  const handleHome = () => {
    navigate('/app');
  };
  return (
    <>
      <div className="h-screen flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="hidden lg:block w-1/3 bg-gray-200 p-4 border-r border-gray-300">
          <h2 className="text-xl font-semibold mb-4">Chats</h2>
          {/* Aquí podrías listar los contactos o chats disponibles */}
        </div>

        {/* Chat window */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="p-4 bg-blue-500 text-white flex items-center gap-3 border-b border-gray-300">
            <h2 className="text-lg font-semibold">Public chat</h2>
            <button
              className=" py-2 px-4 text-red-700 transition-colors duration-150  border-zinc-500 rounded-lg"
              onClick={handleHome}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end ${user === msg.user ? 'justify-end' : 'justify-start'} mb-2`}
              >
                {user !== msg.user && (
                  <img
                    src={`https://api.dicebear.com/5.x/personas/svg?seed=${msg.user}`}
                    alt={`${msg.user} profile`}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
                <div
                  className={`p-3 rounded-lg max-w-xs text-lg ${
                    user === msg.user
                      ? 'bg-green-400 text-white'
                      : 'bg-gray-300 text-gray-900'
                  }`}
                >
                  <strong className="text-emerald-800">@{msg.user}: </strong>
                  <span className="text-gray-950 font-medium">
                    {msg.message}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input section */}
          <div className="p-4 border-t border-gray-300 bg-white flex gap-2 items-center">
            <input
              type="text"
              placeholder="username..."
              value={user}
              onChange={(e) => setUser(e.target.value)}
              onFocus={true}
              className="w-1/4 p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400 hidden lg:block"
            />
            <input
              type="text"
              placeholder="typing...."
              value={message}
              onChange={handleUser}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  onSend();
                }
              }}
              className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-400"
            />
            <button
              onClick={onSend}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
