import { useEffect, useState } from 'react';
import supabase from '../../utils/supabase/supabase';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();

  const handleSingOut = () => {
    setIsLoggingOut(true);
  };

  useEffect(() => {
    const handleLogout = async () => {
      try {
        if (isLoggingOut) {
          const { error } = await supabase.auth.signOut();
          if (!error) {
            navigate('/');
          } else {
            console.error('error singout session', error.message);
          }
          setIsLoggingOut(false);
        }
      } catch (error) {
        console.log('error', error);
      }
    };
    handleLogout();
  }, [isLoggingOut, navigate]);

  return {
    handleSingOut,
  };
}
