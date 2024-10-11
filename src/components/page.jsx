/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";
import ErrorPage from "./services/ui/ErrorPage";

export default function page() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/App");
  };
  return (
    <div className="items-center justify-center flex">
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
      <ErrorPage />
    </div>
  );
}
