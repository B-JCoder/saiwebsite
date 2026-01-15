"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StatsStrip = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const stats = [
        { label: "Years of Excellence", value: 21, suffix: "+" },
        { label: "Enrolled Students", value: 900, suffix: "+" },
        { label: "Passed Out Students", value: 9000, suffix: "+" },
        { label: "Result Record", value: 100, suffix: "%" },
    ];

    return (
        <div ref={ref} className="relative z-30 -mt-10 container mx-auto px-6">
            <div className="bg-primary shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded p-8 md:p-12 border-b-4 border-accent">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-5xl font-black text-accent mb-2 font-heading tracking-tighter">
                                {isInView ? (
                                    <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                                ) : (
                                    <span>0{stat.suffix}</span>
                                )}
                            </div>
                            <div className="text-white font-bold tracking-widest uppercase text-[10px] md:text-xs">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsStrip;
