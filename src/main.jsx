import { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
import PaypalProvider from './core/payments/PaypalProvider.jsx';
import App from './App.jsx';
import './index.css';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <PaypalProvider>
      <App />
    </PaypalProvider>
  </StrictMode>,
);
