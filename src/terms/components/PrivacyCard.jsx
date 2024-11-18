/* eslint-disable react/prop-types */
export default function PrivacyCard({ title, content }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
}
