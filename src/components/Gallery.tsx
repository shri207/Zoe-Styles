import { motion } from "motion/react";
import { images } from "@/src/data/images";

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-luxury text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-champagne font-medium uppercase tracking-[0.2em] mb-4"
            >
              Portfolio
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-5xl"
            >
              Our Gallery
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-muted text-lg max-w-md"
          >
            A glimpse into our world of elegance, transformations, and the serene sea view atmosphere.
          </motion.p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.gallery.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="relative overflow-hidden rounded-[30px] group break-inside-avoid"
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-luxury/0 group-hover:bg-luxury/40 transition-colors duration-500 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-serif text-white text-xl translate-y-4 group-hover:translate-y-0">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
