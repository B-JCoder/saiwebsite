"use client";

import React from "react";
import { usePathname } from "next/navigation";
import AdmissionForm from "@/components/AdmissionForm";

const FooterAdmission = () => {
    const pathname = usePathname();

    // Don't show on the actual Apply page to avoid duplication
    if (pathname === "/admissions/apply") {
        return null;
    }

    return (
        <div className="bg-gray-50 py-20 border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-[#800000] uppercase tracking-tighter mb-4">
                        Ready to Join Us?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Take the first step towards a bright future. Fill out the application
                        form below to start your admission process at Sir Adamjee Institute.
                    </p>
                </div>
                <AdmissionForm />
            </div>
        </div>
    );
};

export default FooterAdmission;
