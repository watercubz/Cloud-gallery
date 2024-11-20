import TextGenerateAI from './TextGenerateAI';
import { useNavigate } from 'react-router-dom';

export default function PageAI() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/App');
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 relative">
        <button
          className="absolute top-4 left-4 py-2 px-4 text-white transition-colors duration-150 border border-zinc-500 rounded-lg bg-gray-900 z-20"
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
        <div className="w-full max-w-lg mt-10 px-4 mx-auto">
          <h1 className="text-center text-2xl font-medium mb-2 text-gray-300 sm:text-3xl">
            Improve your advertising text
          </h1>
          <TextGenerateAI />
        </div>
      </div>
    </>
  );
}
