import { motion } from "motion/react";
import { images } from "@/src/data/images";
import { Star, Users, Award, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-ivory flex items-center">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-rose/20 rounded-bl-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-champagne/10 rounded-tr-full blur-3xl opacity-60" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center gap-8"
        >
          <div>
            <span className="font-sans text-[11px] font-semibold tracking-[0.3em] uppercase text-champagne mb-4 block">Kuwait City | Since 2018</span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-serif text-[60px] md:text-[92px] leading-[0.85] text-luxury mb-4"
            >
              Zoe<br/>
              <span className="italic font-normal">Styles</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl font-light text-muted"
            >
              Where Beauty Meets Elegance
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-muted font-light leading-relaxed max-w-sm"
          >
            Where beauty meets elegance. Experience curated styling and personalized care in our luxury sea-view sanctuary.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#appointment" className="bg-luxury text-white px-8 py-4 rounded-full text-xs font-bold tracking-[0.1em] uppercase hover:bg-black transition-colors">
              View Menu
            </a>
            <a href="#services" className="border border-luxury text-luxury px-8 py-4 rounded-full text-xs font-bold tracking-[0.1em] uppercase hover:bg-luxury hover:text-white transition-colors">
              Our Story
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="grid grid-cols-2 gap-8 pt-8 border-t border-rose mt-4"
          >
            <div className="flex flex-col">
              <div className="font-serif text-3xl text-luxury mb-1">
                4.9<span className="text-sm text-champagne ml-1">★</span>
              </div>
              <span className="font-sans text-[10px] text-muted uppercase tracking-widest">54 Google Reviews</span>
            </div>
            <div className="flex flex-col">
              <div className="font-serif text-3xl text-mocha mb-1">5k+</div>
              <span className="font-sans text-[10px] text-muted uppercase tracking-widest">Happy Clients</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[600px] lg:h-[700px] w-full flex items-center justify-center"
        >
          <div className="w-[80%] h-[90%] bg-rose floating-image relative overflow-hidden">
            <img 
              src={images.hero} 
              alt="Zoe Styles Salon" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mocha/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="font-serif italic text-3xl">Summer Edit '26</div>
              <div className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-80 mt-2">Exquisite Bridal Transformations</div>
            </div>
          </div>
          
          {/* Overlapping Floating Card 1: Experience */}
          <div className="absolute top-20 right-0 lg:-right-4 w-60 bg-white floating-image p-6 flex flex-col justify-end z-20">
            <div className="w-10 h-[1px] bg-champagne mb-4"></div>
            <div className="font-serif text-xl mb-2 text-luxury">Sea View Atmosphere</div>
            <p className="font-sans text-[11px] text-muted leading-relaxed">
              Located in Sanam Tower, Fahad Al-Salem Street. A serene escape in the heart of Kuwait City.
            </p>
          </div>

          {/* Overlapping Floating Card 2: Rating */}
          <div className="absolute bottom-16 left-0 lg:-left-4 glass rounded-[32px] p-6 shadow-xl w-52 z-20">
            <div className="flex gap-1 mb-2 text-champagne text-sm">
              ★★★★★
            </div>
            <p className="font-sans text-[12px] italic text-luxury leading-tight mb-3">
              "The absolute best salon in town. Incredibly talented team."
            </p>
            <span className="font-sans text-[9px] font-bold uppercase tracking-widest text-luxury">— Danielle Dorsainvil</span>
          </div>

          {/* Soft Gradient Accents */}
          <div className="absolute -z-10 w-[600px] h-[600px] bg-gradient-to-br from-rose to-ivory rounded-full blur-3xl opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
}
