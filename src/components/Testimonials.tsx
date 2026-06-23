import { motion } from "motion/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from "lucide-react";
import { images } from "@/src/data/images";

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Danielle Dorsainvil",
    text: "The absolute best salon in town. Zoe and the team are sweet, fun and incredibly talented.",
    avatar: images.testimonialAvatar1,
  },
  {
    name: "Fajer Alhajji",
    text: "Got my hair trim and face layers done. Zoe considered my hair thickness and natural movement perfectly. Highly recommended.",
    avatar: images.testimonialAvatar2,
  },
  {
    name: "Lynn Pais",
    text: "Excellent service. Staff are super friendly and the salon has a beautiful sea view.",
    avatar: images.testimonialAvatar3,
  },
  {
    name: "Sarah M.",
    text: "My go-to place for pampering. The premium products and personalized care are unmatched in Kuwait.",
    avatar: images.testimonialAvatar4,
  },
  {
    name: "Aisha R.",
    text: "I booked the luxury package for my wedding prep. I felt like royalty. Absolutely flawless makeup and hair.",
    avatar: images.testimonialAvatar5,
  },
  {
    name: "Chloe D.",
    text: "The keratin treatment changed my life. The stylists really know what they are doing. Beautiful aesthetic too.",
    avatar: images.testimonialAvatar6,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-ivory overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose/30 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-champagne font-medium uppercase tracking-[0.2em] mb-4"
          >
            Words of Love
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl text-luxury"
          >
            Client Stories
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet !bg-champagne' }}
            className="pb-16"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="glass h-full p-10 rounded-[40px] flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 mx-2 my-4">
                  <div className="text-champagne mb-6 bg-white rounded-full p-4 shadow-sm">
                    <Quote size={24} fill="currentColor" />
                  </div>
                  <p className="text-muted text-lg leading-relaxed mb-8 grow italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex flex-col items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-champagne"
                    />
                    <span className="font-serif text-xl text-luxury">{testimonial.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
