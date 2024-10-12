import { useNavigate } from "react-router-dom";

export default function AiText() {
  const navigate = useNavigate();

  const handleAI = () => {
    navigate("/AI");
  };

  return (
    <div
      role="button"
      className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
    >
      <div className="grid place-items-center mr-4">
        <svg
          viewBox="0 0 32 32"
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m18 10h2v2h-2z" />
          <path d="m12 10h2v2h-2z" />
          <path d="m26 20h-5v-2h1a2.0023 2.0023 0 0 0 2-2v-4h2v-2h-2v-2a2.0023 2.0023 0 0 0 -2-2h-2v-4h-2v4h-4v-4h-2v4h-2a2.0023 2.0023 0 0 0 -2 2v2h-2v2h2v4a2.0023 2.0023 0 0 0 2 2h1v2h-5a2.0023 2.0023 0 0 0 -2 2v8h2v-8h20v8h2v-8a2.0023 2.0023 0 0 0 -2-2zm-16-12h12v8h-12zm3 10h6v2h-6z" />
          <path d="m0 0h32v32h-32z" fill="none" />
        </svg>
      </div>
      <button onClick={handleAI} className="hover:text-blue-500">
        AI
      </button>
    </div>
  );
}
