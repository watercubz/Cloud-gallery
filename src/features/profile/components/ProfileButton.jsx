import { useNavigate } from 'react-router-dom';

export default function ProfileButton() {
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate('/Profile');
  };

  return (
    <>
      <button
        onClick={handleProfile}
        className="cursor-pointer text-white hover:text-green-600"
      >
        Profile
      </button>
    </>
  );
}
