import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/Profile");
  };

  return (
    <button
      onClick={handleProfile}
      className="cursor-pointer hover:text-green-600"
    >
      Profile
    </button>
  );
}
