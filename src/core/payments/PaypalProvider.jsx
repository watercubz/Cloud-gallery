/* eslint-disable react/prop-types */
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const client_id = import.meta.env.VITE_PAYPAL_CLIENT_ID;

const PaypalProvider = ({ children }) => {
  const initialOptions = {
    'client-id': client_id,
    intent: 'subscription',
    vault: true,
    currency: 'USD',
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      {children}
    </PayPalScriptProvider>
  );
};

export default PaypalProvider;
