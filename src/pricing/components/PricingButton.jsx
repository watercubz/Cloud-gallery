import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function PricingButton() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handlePricing = () => {
    navigate('/pricing');
  };

  return <button onClick={handlePricing}>{t('plan')}</button>;
}
