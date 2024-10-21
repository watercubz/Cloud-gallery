import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Github } from 'lucide-react';
import supabase from '../../../utils/supabase';
import CloudLogo from '../../../assets/img/Logo-cloudv2.png';
import Loading from '../../ui/Loading';

export default function AuthComponent() {
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

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
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

  return (
    <section className="bg-gray-900 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <button
        className="absolute top-4 left-4 py-2 px-4 text-white transition-colors duration-150 border border-zinc-500 rounded-lg bg-gray-900 hover:bg-gray-800 z-20"
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

      <div className="flex flex-col items-center justify-center w-full max-w-md px-6 py-8 mx-auto">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-medium text-amber-600"
        >
          <img className="w-20 h-20 mr-2" src={CloudLogo} alt="logo" />
          Cloud Gallery
        </a>
        <section className="w-full bg-gray-800 rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <article className="space-y-4 md:space-y-6">
              <div>
                <button
                  className="bg-gray-800 border border-gray-300 text-white rounded-lg w-full p-2.5 hover:text-gray-500 flex items-center justify-center space-x-2"
                  onClick={handleLogin}
                >
                  <Github
                    className="h-6 w-6 text-neutral-200 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                    strokeWidth={1.5}
                  />
                  <span>Github</span>
                </button>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}
