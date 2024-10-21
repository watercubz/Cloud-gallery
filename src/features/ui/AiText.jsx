import { useNavigate } from 'react-router-dom';

export default function AiText() {
  const navigate = useNavigate();

  const handleAI = () => {
    navigate('/AI');
  };

  return (
    <div
      role="button"
      className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all  text-white outline-none"
    >
      <button onClick={handleAI} className="hover:text-blue-500">
        AI
      </button>
    </div>
  );
}
