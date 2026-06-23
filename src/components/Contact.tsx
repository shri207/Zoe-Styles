import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-champagne font-medium uppercase tracking-[0.2em] mb-4">Get In Touch</h4>
            <h2 className="font-serif text-5xl text-luxury mb-10">Visit Our Salon</h2>
            
            <div className="space-y-8">
              <div className="glass p-6 rounded-[24px] flex items-start gap-6 hover:bg-white transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-rose/30 flex items-center justify-center text-champagne shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-luxury mb-2">Address</h3>
                  <p className="text-muted leading-relaxed">Sanam Tower<br/>1 Fahad Al-Salem Street<br/>Kuwait City, Kuwait</p>
                </div>
              </div>

              <div className="glass p-6 rounded-[24px] flex items-start gap-6 hover:bg-white transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-rose/30 flex items-center justify-center text-champagne shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-luxury mb-2">Contact</h3>
                  <p className="text-muted mb-1">+965 6593 2111</p>
                  <a href="mailto:info@zoestyles.com" className="text-champagne hover:underline">info@zoestyles.com</a>
                </div>
              </div>

              <div className="glass p-6 rounded-[24px] flex items-start gap-6 hover:bg-white transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-rose/30 flex items-center justify-center text-champagne shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-luxury mb-2">Business Hours</h3>
                  <p className="text-muted">Open Daily<br/>10:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <a href="#" className="w-12 h-12 rounded-full border border-mocha/30 flex items-center justify-center text-luxury hover:bg-champagne hover:text-white hover:border-champagne transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-mocha/30 flex items-center justify-center text-luxury hover:bg-champagne hover:text-white hover:border-champagne transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/96565932111" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-mocha/30 flex items-center justify-center text-luxury hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300">
                <MessageCircle size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[40px] overflow-hidden shadow-2xl h-[400px] lg:h-auto"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.994519967265!2d47.969188!3d29.370503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c83ce455983%3A0x884c5011707ea991!2sSanam%20Tower!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
