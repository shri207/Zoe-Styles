import { motion } from "motion/react";
import { images } from "@/src/data/images";
import { Check } from "lucide-react";

const features = [
  "Talented Stylists",
  "Premium Products",
  "Hygienic Environment",
  "Relaxing Atmosphere",
  "Personalized Care",
];

const stats = [
  { label: "Happy Clients", value: "5000+" },
  { label: "Professional Stylists", value: "10+" },
  { label: "Years Experience", value: "8+" },
  { label: "Customer Rating", value: "4.9★" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-rose/10 relative">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl relative">
            <img 
              src={images.about} 
              alt="About Zoe Styles" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-luxury/10" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-10 -right-10 lg:right-[-20%] glass p-8 rounded-[30px] max-w-xs shadow-2xl"
          >
            <p className="font-serif text-2xl text-luxury italic">
              "We believe every client deserves a masterpiece."
            </p>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-champagne font-medium uppercase tracking-[0.2em] mb-4">The Experience</h4>
            <h2 className="font-serif text-5xl text-luxury mb-6">About Us</h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Zoe Styles is a premium beauty destination located in Kuwait City, offering professional hair styling, beauty treatments and personalized experiences in a relaxing atmosphere with stunning sea views.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-luxury">
                  <div className="w-6 h-6 rounded-full bg-champagne/20 flex items-center justify-center text-champagne">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/50 p-6 rounded-[24px] border border-white shadow-sm">
                <div className="font-serif text-4xl text-luxury mb-2">{stat.value}</div>
                <div className="text-sm text-muted uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
