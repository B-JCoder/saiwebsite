"use client";

export default function TestVideo() {
    return (
        <div className="w-full h-screen bg-black flex flex-col items-center justify-center text-white">
            <h1>Video Test Page</h1>
            <p>Trying to load: /video_sai.mp4</p>
            <video width="640" height="360" controls autoPlay muted playsInline className="border border-white mt-4">
                <source src="/video_sai.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}
