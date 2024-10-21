/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import supabase from '../../../utils/supabase';
import { Navigate } from 'react-router-dom';
import Loading from '../../ui/Loading';

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error checking session:', error);
      }
      setIsAuthenticated(!!data.session);
      setLoading(false);
    };

    checkSession();
  }, []);

  // Muestra "Cargando..." mientras se verifica la sesión
  if (loading) return <Loading />;

  // Si no hay sesión, redirige a la página de autenticación
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  // Si hay sesión, muestra el contenido protegido
  return children;
}
