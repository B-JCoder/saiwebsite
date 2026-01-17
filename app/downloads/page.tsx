"use client";

import React from "react";
import { FaFilePdf, FaDownload } from "react-icons/fa";

export default function Downloads() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="uppercase text-sm font-bold text-[#DAA520] tracking-widest block mb-2">Resources</span>
                <h1 className="text-4xl md:text-6xl font-heading font-black text-[#800000] uppercase tracking-tighter mb-6">Downloads</h1>
                <div className="w-24 h-1 bg-[#800000] mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">

                {/* Download Item */}
                <div className="bg-white p-6 rounded-xl shadow border border-gray-100 flex items-center justify-between hover:border-[#800000] transition-colors group">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-50 text-[#800000] rounded-lg flex items-center justify-center text-2xl">
                            <FaFilePdf />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-black group-hover:text-[#800000] transition-colors">Admission Form 2024</h3>
                            <p className="text-sm text-gray-500">PDF Document • 1.2 MB</p>
                        </div>
                    </div>
                    <button className="px-6 py-2 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-[#800000] hover:text-white transition-colors flex items-center gap-2">
                        <FaDownload /> Download
                    </button>
                </div>

                {/* Download Item */}
                <div className="bg-white p-6 rounded-xl shadow border border-gray-100 flex items-center justify-between hover:border-[#800000] transition-colors group">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-red-50 text-[#800000] rounded-lg flex items-center justify-center text-2xl">
                            <FaFilePdf />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-black group-hover:text-[#800000] transition-colors">College Prospectus</h3>
                            <p className="text-sm text-gray-500">PDF Document • 5.5 MB</p>
                        </div>
                    </div>
                    <button className="px-6 py-2 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-[#800000] hover:text-white transition-colors flex items-center gap-2">
                        <FaDownload /> Download
                    </button>
                </div>

                <div className="h-8"></div>
                <h3 className="text-2xl font-bold text-[#800000] border-l-4 border-[#DAA520] pl-4 mb-4">Examinations</h3>

                {/* Exam Sheet Item */}
                <div className="bg-white p-6 rounded-xl shadow border border-gray-100 flex items-center justify-between hover:border-[#800000] transition-colors group">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-50 text-blue-800 rounded-lg flex items-center justify-center text-2xl">
                            <FaFilePdf />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-black group-hover:text-blue-800 transition-colors">Date Sheet - HSC Part I & II (Annual 2024)</h3>
                            <p className="text-sm text-gray-500">Official Board Schedule</p>
                        </div>
                    </div>
                    <button className="px-6 py-2 bg-gray-100 text-gray-700 font-bold rounded-lg hover:bg-blue-800 hover:text-white transition-colors flex items-center gap-2">
                        <FaDownload /> Download
                    </button>
                </div>

            </div>
        </div>
    );
}
