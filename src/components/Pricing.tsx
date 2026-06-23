import { motion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/src/lib/utils";

const packages = [
  {
    name: "Basic Package",
    price: "10",
    features: ["Haircut", "Hair Wash", "Styling"],
    highlight: false,
  },
  {
    name: "Premium Package",
    price: "20",
    features: ["Hair Styling", "Hair Treatment", "Facial", "Head Massage"],
    highlight: true,
  },
  {
    name: "Luxury Package",
    price: "40",
    features: ["Hair Coloring", "Keratin Treatment", "Facial", "Makeup", "Luxury Hair Spa"],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-rose/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-champagne font-medium uppercase tracking-[0.2em] mb-4"
          >
            Invest In Yourself
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl text-luxury"
          >
            Exclusive Packages
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={cn(
                "rounded-[50px] p-10 relative overflow-hidden transition-all duration-500",
                pkg.highlight 
                  ? "bg-luxury text-white shadow-2xl scale-105" 
                  : "bg-white text-luxury shadow-lg hover:shadow-xl hover:-translate-y-2"
              )}
            >
              {pkg.highlight && (
                <div className="absolute top-0 right-0 p-4">
                  <div className="bg-champagne text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Featured
                  </div>
                </div>
              )}

              <h3 className="font-serif text-2xl mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-2 mb-8 border-b border-mocha/20 pb-8">
                <span className="text-xl font-medium text-muted">KD</span>
                <span className={cn("text-6xl font-serif", pkg.highlight ? "text-white" : "text-luxury")}>
                  {pkg.price}
                </span>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center shrink-0",
                      pkg.highlight ? "bg-white/20 text-champagne" : "bg-rose/50 text-luxury"
                    )}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className={cn("font-medium", pkg.highlight ? "text-white/90" : "text-luxury/80")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a 
                href="#appointment"
                className={cn(
                  "w-full block text-center py-4 rounded-full font-medium transition-all shadow-md hover:shadow-lg",
                  pkg.highlight 
                    ? "bg-gradient-to-r from-champagne to-[#c09b4d] text-white hover:scale-105" 
                    : "bg-ivory border border-mocha/20 text-luxury hover:bg-luxury hover:text-white hover:border-luxury"
                )}
              >
                Book Appointment
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
