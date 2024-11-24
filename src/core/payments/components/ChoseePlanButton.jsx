/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { PayPalButtons } from '@paypal/react-paypal-js';
import toast from 'react-hot-toast';

const plan_id = import.meta.env.VITE_PAYPALPLAN_ID_DEV;

const ChoosePlanButton = ({ planName, price }) => {
  return (
    <div>
      {price === 0 ? (
        <button
          className="w-full py-2 px-4 mt-5 bg-blue-500 text-white rounded-md"
          disabled
        >
          Free Plan - No Payment Required
        </button>
      ) : (
        <PayPalButtons
          createSubscription={(data, actions) => {
            return actions.subscription.create({
              plan_id: plan_id,
              custom_id: `${planName} Plan - Payment for services.`,
            });
          }}
          onApprove={(data, actions) => {
            toast.success('¡Gracias por tu compra!', data.orderID);
          }}
          style={{
            shape: 'rect',
            color: 'gold',
            layout: 'horizontal',
            label: 'subscribe',
            tagline: false,
          }}
          onError={(err) => {
            console.error('Error de pago: ', err);
            toast.error('Hubo un problema con el pago, intenta nuevamente.');
          }}
        />
      )}
    </div>
  );
};

export default ChoosePlanButton;
