import { useState } from "react";
import { motion } from "motion/react";

export function Appointment() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      gender: formData.get("gender"),
      service: formData.get("service"),
      date: formData.get("date"),
      time: formData.get("time"),
      message: formData.get("message"),
    };

    const text = `*New Appointment Request*%0A%0A*Name:* ${data.name}%0A*Phone:* ${data.phone}%0A*Email:* ${data.email}%0A*Gender:* ${data.gender}%0A*Service:* ${data.service}%0A*Date:* ${data.date}%0A*Time:* ${data.time}%0A*Message:* ${data.message}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/96565932111?text=${text}`, "_blank");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="appointment" className="py-24 bg-rose/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-6xl md:text-7xl text-luxury leading-tight mb-6">
            BOOK<br />YOUR<br />EXPERIENCE
          </h2>
          <p className="text-xl text-muted max-w-md">
            Reserve your moment of luxury. Let us transform your vision into reality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-[40px] shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-luxury mb-2">Full Name *</label>
                <input required name="name" type="text" className="w-full bg-white/50 border border-mocha/30 rounded-2xl px-5 py-4 outline-none focus:border-champagne transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-luxury mb-2">Phone Number *</label>
                <input required name="phone" type="tel" className="w-full bg-white/50 border border-mocha/30 rounded-2xl px-5 py-4 outline-none focus:border-champagne transition-colors" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-luxury mb-2">Email</label>
                <input name="email" type="email" className="w-full bg-white/50 border border-mocha/30 rounded-2xl px-5 py-4 outline-none focus:border-champagne transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-luxury mb-2">Gender *</label>
                <select required name="gender" className="w-full bg-white/50 border border-mocha/30 rounded-2xl px-5 py-4 outline-none focus:border-champagne transition-colors appearance-none">
                  <option value="">Select Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-luxury mb-2">Service Required *</label>
              <select required name="service" className="w-full bg-white/50 border border-mocha/30 rounded-2xl px-5 py-4 outline-none focus:border-champagne transition-colors appearance-none">
                <option value="">Select Service</option>
                <option value="Haircut & Styling">Haircut & Styling</option>
                <option value="Hair Coloring">Hair Coloring</option>
                <option value="Hair Treatment">Hair Treatment</option>
                <option value="Facial & Skin">Facial & Skin</option>
                <option value="Makeup">Makeup</option>
                <option value="Premium Package">Premium Package</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-luxury mb-2">Preferred Date *</label>
                <input required name="date" type="date" className="w-full bg-white/50 border border-mocha/30 rounded-2xl px-5 py-4 outline-none focus:border-champagne transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-luxury mb-2">Preferred Time *</label>
                <input required name="time" type="time" className="w-full bg-white/50 border border-mocha/30 rounded-2xl px-5 py-4 outline-none focus:border-champagne transition-colors" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-luxury mb-2">Message</label>
              <textarea name="message" rows={3} className="w-full bg-white/50 border border-mocha/30 rounded-2xl px-5 py-4 outline-none focus:border-champagne transition-colors resize-none"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-champagne to-[#c09b4d] text-white py-5 rounded-full font-semibold text-lg shadow-xl shadow-champagne/20 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100 flex justify-center items-center gap-2"
            >
              {isSubmitting ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full" />
              ) : (
                "Request via WhatsApp"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
