export default function Mission() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12">Mission & Vision</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gray-50 p-10 rounded-2xl border-l-4 border-primary shadow-sm">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our mission is to provide students with the means to attain their maximum potential through the development of intellectual, social, and physical skills, aided by individualized attention. We strive to create a nurturing environment where discipline and academic rigor go hand in hand.
          </p>
        </div>

        <div className="bg-gray-50 p-10 rounded-2xl border-l-4 border-accent shadow-sm">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our vision is drawn from Quaid-e-Azam's statement, contrasting education for the sake of education against education for character building. We envision an institution that builds the leaders of tomorrow with strong moral values and modern skills.
          </p>
        </div>
      </div>
    </div>
  );
}