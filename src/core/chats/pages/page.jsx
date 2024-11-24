import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function PageChat() {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const HandleChat = () => {
    navigate('/chat');
  };
  return <button onClick={HandleChat}>{t('chat')}</button>;
}
