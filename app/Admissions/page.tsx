export default function Admissions() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">Admissions</h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-4">Admission Process</h2>
        <ul className="space-y-4 text-gray-600 mb-8 list-disc pl-6 marker:text-accent">
          <li>Collect the Admission Form from the campus office.</li>
          <li>Submit the filled form along with required documents (Mark sheet, B-Form, Pictures).</li>
          <li>Appear for the Entrance Test / Interview as scheduled.</li>
          <li>Selected candidates will be notified for fee submission.</li>
        </ul>

        <div className="p-6 bg-accent/10 rounded-xl border border-accent/20">
          <h3 className="text-xl font-bold text-primary mb-2">Apply Online</h3>
          <p className="text-gray-700 mb-4">You can also start your application online.</p>
          <button className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-red-900 transition-colors">
            Start Application
          </button>
        </div>
      </div>
    </div>
  );
}