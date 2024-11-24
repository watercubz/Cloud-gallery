import axios from 'axios';

const META_ID = import.meta.env.VITE_META_APP_ID;
const META_SECRET = import.meta.env.VITE_META_APP_SECRET;
const REDIRECT_URI = 'http://localhost:5173/App';

/**
 * Obtiene el access token usando el código recibido.
 * @param {string} code
 * @returns {Promise<string>} Access token
 */
export async function getAccessToken(code) {
  const response = await axios.get(
    'https://graph.facebook.com/v17.0/oauth/access_token',
    {
      params: {
        client_id: META_ID,
        client_secret: META_SECRET,
        redirect_uri: REDIRECT_URI,
        code,
      },
    },
  );
  return response.data.access_token;
}

/**
 * Obtiene las cuentas publicitarias del usuario.
 * @param {string} accessToken
 * @returns {Promise<Array>} Lista de cuentas publicitarias
 */
export async function getAdAccounts(accessToken) {
  const response = await axios.get(
    'https://graph.facebook.com/v17.0/me/adaccounts',
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    },
  );
  return response.data.data;
}

/**
 * Obtiene métricas publicitarias de una cuenta.
 * @param {string} adAccountId
 * @param {string} accessToken
 * @returns {Promise<Array>} Métricas publicitarias
 */
export async function getAdMetrics(adAccountId, accessToken) {
  const response = await axios.get(
    `https://graph.facebook.com/v17.0/act_${adAccountId}/insights`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        fields: 'impressions,clicks,spend',
        date_preset: 'last_30_days',
      },
    },
  );
  return response.data.data;
}
