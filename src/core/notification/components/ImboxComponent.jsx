import { useNavigate } from 'react-router-dom';

export default function ImboxComponent() {
  const navigate = useNavigate();

  const handleNotification = () => {
    navigate('/notification');
  };
  return <button onClick={handleNotification}>Notification</button>;
}
