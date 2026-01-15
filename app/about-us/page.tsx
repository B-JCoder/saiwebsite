import PrincipalMessage from "@/components/PrincipalMessage";

export default function AboutUs() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-6 mb-12">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">About Us</h1>
                <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                    Sir Adamjee Institute (SAI) is a premier educational institution dedicated to fostering academic excellence and character building. Established with a vision to provide quality education, SAI has become a beacon of learning, producing leaders who excel in various fields.
                </p>
            </div>
            <PrincipalMessage />
        </div>
    );
}
