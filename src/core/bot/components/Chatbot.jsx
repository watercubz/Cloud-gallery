/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { generateResponseFromAI } from '../api/GoogleGeminiApi';

export default function ChatComponent() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [iaResponse, setIaResponse] = useState('');
  const [loading, setLoading] = useState(false);
  let links = 'https://github.com/htmlstreamofficial/preline';
  const [messages, setMessages] = useState([
    {
      sender: 'AI',
      text: `Hey there, thanks for checking out Preline UI!

If you would like to report a bug or are having a technical issue, please open an issue on GitHub here: ${links}

For any other inquiries, such as license, pricing, custom work, suggestions for future updates and others, please write them here and our team will get back to you as soon as possible.

For the latest product updates, stay tuned on X (Twitter) https://x.com/prelineUI

Thanks!`,
    },
  ]);

  async function handleSearchAndSendMessage() {
    if (search.trim() === '') {
      toast.error('Por favor, escribe una pregunta o solicitud.');
      return;
    }

    setLoading(true);

    try {
      const responseText = await generateResponseFromAI(search);

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: search },
        { sender: 'ai', text: responseText },
      ]);

      setSearch('');
    } catch (error) {
      toast.error('Hubo un error al generar la respuesta de la IA.', error);
    } finally {
      setLoading(false);
    }
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleSearchAndSendMessage();
  };

  useEffect(() => {
    setIaResponse('');
  }, []);

  return (
    <>
      <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900 dark:bg-white"
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="text-white dark:text-black block border-gray-200 align-middle"
        >
          <path
            d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
            className="border-gray-200"
          ></path>
        </svg>
      </button>

      {open && (
        <div className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]">
          <div className="flex flex-col space-y-1.5 pb-6">
            <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
            <p className="text-sm text-[#6b7280] leading-3">
              Powered by Google Gemini
            </p>
          </div>
          <div className="pr-4 h-[474px] overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 my-4 text-gray-600 text-sm flex-1 ${msg.sender === 'user' ? 'justify-end' : ''}`}
              >
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1">
                    <svg
                      stroke="none"
                      fill="black"
                      viewBox="0 0 16 16"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                    </svg>
                  </div>
                </span>
                <p className="leading-relaxed text-ellipsis">
                  <span className="block font-bold text-gray-700">
                    {msg.sender === 'user' ? 'You' : 'AI'}
                  </span>
                  {msg.text}
                </p>
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1">
                    <svg
                      stroke="none"
                      fill="black"
                      viewBox="0 0 16 16"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                    </svg>
                  </div>
                </span>
                <p className="leading-relaxed">AI is thinking...</p>
              </div>
            )}
          </div>

          <div className="mt-4 flex gap-3">
            <input
              type="text"
              className="w-full py-2 px-3 rounded-lg border border-gray-300 bg-[#f9fafb]"
              placeholder="Type your message..."
              value={search}
              onChange={handleSearch}
            />
            <button
              type="submit"
              className="text-white h-10 px-5 py-2.5 bg-[#4CAF50] rounded-lg"
              onClick={handleClick}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
