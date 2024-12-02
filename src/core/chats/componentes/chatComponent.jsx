import supabase from '../../../utils/supabase/supabase';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChatComponent() {
  const channel = useRef(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [image, setImage] = useState('');
  const [name, setNickname] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('id', { ascending: true });

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

  useEffect(() => {
    const loadUserProfile = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log('Error fetching user session:', error);
      } else if (data.session) {
        const userMetadata = data.session.user.user_metadata;
        setUser(data.session.user.id);
        setImage(userMetadata.avatar_url);
        setNickname(userMetadata.user_name || userMetadata.full_name);
      }
    };
    loadUserProfile();
  }, []);

  const onSend = async () => {
    if (message.trim() === '') return;

    // Guarda el mensaje en la base de datos con los datos de usuario
    const { error } = await supabase
      .from('messages')
      .insert([{ user, name, image, message }]);

    if (error) {
      console.error('Error sending message:', error);
    } else {
      channel.current.send({
        type: 'broadcast',
        event: 'message',
        payload: { user, name, image, message },
      });
      setMessage(''); // Reinicia el campo de mensaje
    }
  };

  const handleUserMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleHome = () => {
    navigate('/app');
  };

  const specialUsers = ['5535a6bd-87a1-4875-b6b2-5a4554a9c983'];

  return (
    <>
      <div className="h-screen flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col bg-white dark:bg-gray-900">
          <div className="p-4 bg-white dark:bg-gray-900 text-black dark:text-white flex items-center gap-3 border-b border-gray-300">
            <h2 className="text-lg font-bold">help chat</h2>
            <button
              className="py-2 px-4 text-red-700 transition-colors duration-150 border-zinc-500 rounded-lg"
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

          <div className="flex-1 overflow-y-auto p-4 bg-white dark:bg-gray-900">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end ${user === msg.user ? 'justify-end' : 'justify-start'} mb-2`}
              >
                {user !== msg.user && (
                  <img
                    src={msg.image}
                    alt={`${msg.name} profile`}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
                <div
                  className={`p-3 rounded-lg max-w-xs text-lg ${
                    user === msg.user
                      ? 'bg-green-200 text-white'
                      : 'bg-gray-300 text-gray-900'
                  }`}
                >
                  <strong className="text-gray-700 flex items-center gap-1">
                    <img
                      src={msg.image}
                      alt={msg.name}
                      className="w-6 h-6 rounded-full"
                    />{' '}
                    @{msg.name}:{' '}
                    {specialUsers.includes(msg.user) && (
                      <span className="inline-flex items-center justify-center w-6 h-6 me-2 text-sm font-semibold text-blue-800 rounded-full dark:bg-gray-700 dark:text-blue-400">
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="currentColor"
                            d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                          />
                          <path
                            fill="#fff"
                            d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                          />
                        </svg>
                      </span>
                    )}
                  </strong>
                  <span className="text-gray-950 font-medium">
                    {msg.message}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t bg-white dark:bg-gray-900 flex gap-2 items-center">
            <input
              className="w-1/4 p-2 rounded-lg border bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none"
              value={name}
              disabled={true}
            />
            <input
              type="text"
              placeholder="Typing...."
              value={message}
              onChange={handleUserMessage}
              className="flex-1 p-2 rounded-lg border bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none"
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  onSend();
                }
              }}
            />
            <button
              onClick={onSend}
              className="py-2 px-4 text-blue-700 transition-colors duration-150 border-zinc-900 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
