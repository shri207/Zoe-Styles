import { motion } from "motion/react";
import { images } from "@/src/data/images";
import { Scissors, Sparkles, Crown } from "lucide-react";

const services = [
  {
    category: "Hair Services",
    icon: <Scissors size={24} />,
    image: images.serviceHair,
    items: [
      { name: "Haircut", price: "KD 5" },
      { name: "Hair Trim", price: "KD 5" },
      { name: "Hair Styling", price: "KD 10" },
      { name: "Layered Hair Styling", price: "KD 12" },
      { name: "Hair Treatment", price: "KD 15" },
      { name: "Hair Coloring", price: "KD 25" },
    ],
  },
  {
    category: "Beauty Services",
    icon: <Sparkles size={24} />,
    image: images.serviceBeauty,
    items: [
      { name: "Eyebrow Shaping", price: "From KD 5" },
      { name: "Cleanup", price: "From KD 10" },
      { name: "Facial", price: "From KD 15" },
      { name: "Skin Treatment", price: "From KD 20" },
      { name: "Makeup", price: "From KD 25" },
      { name: "Bridal Makeup", price: "On Request" },
    ],
  },
  {
    category: "Premium Services",
    icon: <Crown size={24} />,
    image: images.servicePremium,
    items: [
      { name: "Head Massage", price: "KD 10" },
      { name: "Scalp Therapy", price: "KD 15" },
      { name: "Hair Spa", price: "KD 20" },
      { name: "Keratin Treatment", price: "From KD 35" },
      { name: "Luxury Hair Care", price: "From KD 40" },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-champagne font-medium uppercase tracking-[0.2em] mb-4"
          >
            Our Offerings
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl text-luxury"
          >
            Curated Services
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-luxury/40 group-hover:bg-luxury/20 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-3xl text-white">{service.category}</h3>
                </div>
              </div>

              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center justify-between border-b border-mocha/10 pb-3 last:border-0 last:pb-0">
                      <span className="text-luxury font-medium">{item.name}</span>
                      <span className="text-champagne font-serif">{item.price}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#appointment"
                  className="w-full block text-center bg-ivory text-luxury border border-mocha/20 py-4 rounded-full font-medium hover:bg-champagne hover:text-white hover:border-champagne transition-colors"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
