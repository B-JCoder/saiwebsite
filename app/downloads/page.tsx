import { FaDownload, FaFilePdf } from "react-icons/fa";

export default function Downloads() {
    const documents = [
        "Admission Form 2026", "Prospectus", "Fee Structure", "Academic Calendar", "Code of Conduct"
    ];

    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">Downloads</h1>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
                {documents.map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-accent/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <FaFilePdf className="text-red-600 text-2xl" />
                            <span className="font-medium text-gray-700">{doc}.pdf</span>
                        </div>
                        <button className="text-primary hover:text-accent transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                            Download <FaDownload />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
