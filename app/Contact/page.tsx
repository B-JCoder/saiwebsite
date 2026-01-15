import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12">Contact Us</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center text-2xl flex-shrink-0">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Our Campus</h3>
              <p className="text-gray-600">ST-2, Block 4, Gulshan-e-Iqbal, Karachi, Pakistan.</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center text-2xl flex-shrink-0">
              <FaPhone />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
              <p className="text-gray-600">+92 312 2642415</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center text-2xl flex-shrink-0">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
              <p className="text-gray-600">sai@siradamjee.edu.pk</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.143269476901!2d67.0858!3d24.9189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU1JzA4LjAiTiA2N8KwMDUnMDguOSJF!5e0!3m2!1sen!2s!4v1642152862800!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}