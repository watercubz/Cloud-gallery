/* eslint-disable react/prop-types */
export default function TermsCard({ title, content, confirm }) {
  return (
    <>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <section className="text-wrap">{content}</section>
        <p>{confirm}</p>
      </div>
    </>
  );
}
