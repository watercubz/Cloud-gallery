import TextGenerateIAI from "./TextGenerateIAI";
import { useNavigate } from "react-router-dom";

export default function PageAI() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/App");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center p-14">
        <button
          className="absolute top-4 left-4 py-2 px-4 text-black transition-colors duration-150 border border-zinc-500 rounded-lg bg-white hover:bg-gray-100 z-20"
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
        <h1 className="text-center text-2xl font-bold mb-4">
          BUSCA PELICULAS DE TERROR A TRAVÉS DE AI
        </h1>
        <TextGenerateIAI />
      </div>
    </>
  );
}
