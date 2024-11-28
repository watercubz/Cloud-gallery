import { useNavigate } from 'react-router-dom';

export default function AiText() {
  const navigate = useNavigate();

  const handleAI = () => {
    navigate('/AI');
  };

  return (
    <div
      role="button"
      className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all text-black dark:text-white outline-none"
    >
      <button
        onClick={handleAI}
        className="flex items-center hover:text-blue-500 text-black dark:text-white"
      >
        <span className="mr-2">Text Analyzer</span>
        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          BETA
        </span>
      </button>
    </div>
  );
}
