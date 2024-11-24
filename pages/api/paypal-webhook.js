import axios from 'axios';

const supa_url = import.meta.env.VITE_SUPABASE_URL;
const supa_api_key = import.meta.env.VITE_SUPABASE_ANON_KEY;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const body = req.body;

  const { user_id, status, expiration_date } = body;

  try {
    const response = await axios({
      method: 'patch',
      url: `${supa_url}/rest/v1/user_subscriptions`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${supa_api_key}`,
      },
      data: {
        user_id: user_id,
        subscription_status: status,
        expiration_date: expiration_date,
      },
    });

    if (response.status === 200) {
      return res
        .status(200)
        .json({ message: 'Suscripción actualizada correctamente' });
    } else {
      return res
        .status(500)
        .json({ message: 'Error al actualizar la suscripción' });
    }
  } catch (error) {
    console.error('Error al procesar el webhook de PayPal:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
