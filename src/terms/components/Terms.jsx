import TermsCard from './TermsCard';
import { Terms } from '../../constants/Testimonials';
const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
      <div className="bg-white max-w-3xl w-full rounded-lg shadow-md p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">
          Términos y Condiciones de MTAAI-core
        </h1>
        {Terms?.map((section, i) => (
          <div key={i}>
            <TermsCard
              title={section.title}
              content={section.content}
              confirm={section.confirm}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
