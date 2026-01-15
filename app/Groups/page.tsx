export default function Groups() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">Student Groups</h1>
      <p className="text-gray-600 mb-12">
        At SAI, all students are divided into groups to foster teamwork, competition, and leadership.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Jinnah Group', 'Iqbal Group', 'Sir Syed Group', 'Liaquat Group'].map((group, idx) => (
          <div key={idx} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-accent hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-primary mb-2">{group}</h3>
            <p className="text-sm text-gray-500">Houses & Competitions</p>
          </div>
        ))}
      </div>
    </div>
  );
}