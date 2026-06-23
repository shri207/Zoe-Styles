import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/96565932111"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-10 right-10 z-50 w-16 h-16 gold-gradient text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 ring-4 ring-white transition-all group"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute inset-0 rounded-full border border-champagne opacity-50 group-hover:hidden"
      />
      <MessageCircle size={32} />
    </motion.a>
  );
}
