import { useNavigate } from 'react-router-dom';
export default function AImage() {
  const navigate = useNavigate();

  const handleImage = () => {
    navigate('/Image');
  };

  return (
    <div
      role="button"
      className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all  text-white outline-none"
    >
      <button onClick={handleImage} className="hover:text-blue-500  text-white">
        AI Image
      </button>
    </div>
  );
}
