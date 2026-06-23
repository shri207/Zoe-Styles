import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

const faqs = [
  {
    question: "Do I need an appointment?",
    answer: "While we highly recommend booking an appointment to secure your preferred time and stylist, we do our best to accommodate walk-ins when availability allows.",
  },
  {
    question: "Are walk-ins accepted?",
    answer: "Yes, walk-ins are welcome, but wait times may vary. Booking ahead guarantees zero waiting time.",
  },
  {
    question: "Do you provide bridal makeup?",
    answer: "Absolutely. Our expert makeup artists specialize in bridal looks, offering full packages including trials, hair styling, and premium touch-ups for your special day.",
  },
  {
    question: "Do you offer hair treatments?",
    answer: "Yes, we offer a wide range of luxury hair treatments including Keratin, deep conditioning spa, scalp therapy, and color protection treatments.",
  },
  {
    question: "Which products are used?",
    answer: "We strictly use premium, professional-grade products from top luxury brands to ensure the health and beauty of your hair and skin.",
  },
  {
    question: "What are your business hours?",
    answer: "We are open daily from 10 AM to 8 PM to serve you.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-ivory">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-champagne font-medium uppercase tracking-[0.2em] mb-4"
          >
            Inquiries
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl text-luxury"
          >
            Frequent Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "border rounded-[24px] overflow-hidden transition-colors duration-300",
                openIndex === idx ? "bg-white border-champagne/30 shadow-md" : "bg-transparent border-mocha/20 hover:border-mocha/40"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <span className="font-serif text-xl text-luxury pr-8">{faq.question}</span>
                <ChevronDown 
                  className={cn("shrink-0 text-champagne transition-transform duration-300", openIndex === idx && "rotate-180")} 
                  size={24} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-muted leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
