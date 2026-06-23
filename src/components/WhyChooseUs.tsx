import { motion } from "motion/react";
import { Sparkles, Heart, Crown, Coffee, ShieldCheck, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: <Sparkles size={32} />, title: "Talented Stylists", desc: "Expert artists dedicated to your beauty." },
  { icon: <Heart size={32} />, title: "Personalized Care", desc: "Tailored treatments for your unique needs." },
  { icon: <Crown size={32} />, title: "Premium Products", desc: "We use only top-tier luxury brands." },
  { icon: <Coffee size={32} />, title: "Relaxing Atmosphere", desc: "Serene sea views and calming ambiance." },
  { icon: <ShieldCheck size={32} />, title: "Hygienic Environment", desc: "Strict standards for your safety." },
  { icon: <ThumbsUp size={32} />, title: "Customer Satisfaction", desc: "Our 4.9★ rating speaks for itself." },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-luxury text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-champagne font-medium uppercase tracking-[0.2em] mb-4"
          >
            The Difference
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl"
          >
            Why Choose Us
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-dark p-8 rounded-[30px] hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-champagne mb-6 group-hover:scale-110 group-hover:bg-champagne group-hover:text-white transition-all duration-300">
                {reason.icon}
              </div>
              <h3 className="font-serif text-2xl mb-3 text-white/90">{reason.title}</h3>
              <p className="text-muted">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
