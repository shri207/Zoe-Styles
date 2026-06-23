import { Instagram, Facebook, MessageCircle, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="h-24 px-12 border-t border-rose flex flex-col md:flex-row items-center justify-between bg-ivory">
      <div className="flex gap-12 text-[10px] font-sans font-medium uppercase tracking-[0.15em] text-muted mb-4 md:mb-0">
        <span>T: +965 6593 2111</span>
        <span>Hours: 10 AM – 8 PM</span>
        <span>IG: @ZOESTYLESKW</span>
      </div>
      <div className="flex items-center gap-4">
         <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
         <span className="font-sans text-[10px] uppercase tracking-widest text-luxury font-bold">Booking Available Today</span>
      </div>
    </footer>
  );
}
