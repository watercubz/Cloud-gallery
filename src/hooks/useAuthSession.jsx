import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../utils/supabase/supabase';
import Loading from '../features/ui/Loading';

export default function useAuthSession() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error fetching session:', error);
        setLoading(false);
        console.log(data);

        return; // No continúes si hay un error
      }

      if (data.session) {
        // Si hay una sesión activa, redirigir al usuario a la página /app
        navigate('/app');
      } else {
        setLoading(false); // Solo cambiar a false si no hay sesión
      }
    };

    checkSession();
  }, [navigate]);

  const handleLoginGithub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });
    if (error) {
      // Manejar el error
      console.error(error);
    }
  };

  const handleLoginGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      // Manejar el error
      console.error(error);
    }
  };

  if (loading) return <Loading />;

  const handleHome = () => {
    navigate('/');
  };

  return {
    handleLoginGithub,
    handleLoginGoogle,
    handleHome,
  };
}
