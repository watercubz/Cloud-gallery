import { useNavigate } from "react-router-dom";

export default function PricingButton() {
  const navigate = useNavigate();

  const handlePricing = () => {
    navigate("/Pricing");
  };

  return (
    <button onClick={handlePricing} className="hover:text-blue-500">
      Pricings
    </button>
  );
}
