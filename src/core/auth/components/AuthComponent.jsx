import { useEffect } from 'react';
import supabase from '../../../utils/supabase/supabase';
import { useNavigate } from 'react-router-dom';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react';
export default function AuthComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        navigate('/app');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          {' '}
          Sign in{' '}
        </h2>

        <Auth
          supabaseClient={supabase}
          providers={['google', 'github']}
          redirectTo="http://localhost:5173/app"
          appearance={{
            theme: ThemeSupa,
          }}
          socialLayout="vertical" // Botones de proveedores sociales en columna
          className="auth-container"
        />
      </div>
    </div>
  );
}
