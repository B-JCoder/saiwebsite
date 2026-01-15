export default function Documentary() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-8">SAI Documentary</h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                Watch our journey, achievements, and the life at Sir Adamjee Institute in this exclusive documentary.
            </p>

            <div className="max-w-4xl mx-auto aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-3xl pl-1 shadow-[0_0_30px_rgba(218,165,32,0.5)] group-hover:scale-110 transition-transform cursor-pointer">
                        ▶
                    </div>
                </div>
                <img src="/imgaes/imgi_2_Page1-scaled.jpg" alt="Documentary Cover" className="w-full h-full object-cover opacity-60" />
            </div>
        </div>
    );
}
