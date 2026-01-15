export default function PageTemplate({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="pt-40 pb-24 min-h-screen bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 border-l-8 border-accent pl-8"
                >
                    <h1 className="text-4xl md:text-6xl font-heading font-black text-primary uppercase tracking-tighter mb-4">{title}</h1>
                    <div className="w-20 h-2 bg-accent"></div>
                </motion.div>
                {children}
            </div>
        </div>
    );
}
