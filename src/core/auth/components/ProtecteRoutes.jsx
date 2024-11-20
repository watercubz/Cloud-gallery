/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import supabase from '../../../utils/supabase/supabase';
import { Navigate } from 'react-router-dom';
import Loading from '../../../ui/Loading';

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

  if (loading) return <Loading />;

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}
