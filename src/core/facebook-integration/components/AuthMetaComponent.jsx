import { useState, useEffect } from 'react';
import supabase from '../../../utils/supabase/supabase'; // Asegúrate de configurar tu cliente de Supabase
import axios from 'axios';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar los componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const FacebookAdsDashboard = () => {
  const [session, setSession] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Verificar si el usuario ya está autenticado
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    };

    fetchSession();
  }, []);

  // Función para obtener las métricas de Facebook Ads
  const fetchMetrics = async () => {
    if (!session) return;

    setLoading(true);
    setError(null);

    try {
      const { access_token } = session.provider_token; // Token de acceso de Facebook

      const adAccountId = '177297913870134'; // ID de tu cuenta publicitaria en Facebook
      const response = await axios.get(
        `https://graph.facebook.com/v17.0/act_${adAccountId}/insights?fields=impressions,clicks,spend,reach&access_token=${access_token}`,
      );

      setMetrics(response.data.data[0]);
      setLoading(false);
    } catch (err) {
      setError('Error al obtener métricas: ' + err.message);
      setLoading(false);
    }
  };

  const loginWithFacebook = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
      options: {
        scopes: 'ads_read,ads_management,business_management',
      },
    });

    if (error) {
      console.error('Error al iniciar sesión:', error);
    } else {
      console.log('Datos de autenticación:', data);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard de Facebook Ads</h1>

      {/* Si no hay sesión, mostrar botón de login */}
      {!session ? (
        <button
          onClick={loginWithFacebook}
          style={{ padding: '10px 20px', fontSize: '16px' }}
        >
          Inicia sesión con Facebook
        </button>
      ) : (
        <div>
          <h2>Conectado como {session.user.email}</h2>
          <button
            onClick={fetchMetrics}
            style={{ padding: '10px 20px', fontSize: '16px' }}
          >
            Obtener Métricas
          </button>
        </div>
      )}

      {/* Mostrar métricas si existen */}
      {metrics && (
        <div style={{ marginTop: '20px' }}>
          <h2>Métricas de tu Campaña</h2>
          <Bar
            data={{
              labels: ['Impressions', 'Clicks', 'Spend', 'Reach'],
              datasets: [
                {
                  label: 'Datos de la Campaña',
                  data: [
                    metrics.impressions,
                    metrics.clicks,
                    metrics.spend,
                    metrics.reach,
                  ],
                  backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#e91e63'],
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
              },
            }}
          />
        </div>
      )}

      {/* Mostrar loading o error si es necesario */}
      {loading && <p>Cargando métricas...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default FacebookAdsDashboard;
