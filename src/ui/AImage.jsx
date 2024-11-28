import { useNavigate } from 'react-router-dom';
export default function AImage() {
  const navigate = useNavigate();

  const handleImage = () => {
    navigate('/Image');
  };

  return (
    <div
      role="button"
      className="flex items-center justify-between w-full p-3 rounded-lg text-start leading-tight transition-all text-black dark:text-white outline-none"
    >
      <button
        onClick={handleImage}
        className="flex items-center hover:text-blue-500 text-black dark:text-white whitespace-nowrap"
      >
        <span>Image Analyzer</span>
      </button>
      <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 whitespace-nowrap">
        BETA
      </span>
    </div>
  );
}
