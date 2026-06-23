import { Navbar } from "@/src/components/Navbar";
import { Hero } from "@/src/components/Hero";
import { About } from "@/src/components/About";
import { Services } from "@/src/components/Services";
import { Gallery } from "@/src/components/Gallery";
import { Pricing } from "@/src/components/Pricing";
import { Testimonials } from "@/src/components/Testimonials";
import { WhyChooseUs } from "@/src/components/WhyChooseUs";
import { FAQ } from "@/src/components/FAQ";
import { Appointment } from "@/src/components/Appointment";
import { Contact } from "@/src/components/Contact";
import { Footer } from "@/src/components/Footer";
import { WhatsAppButton } from "@/src/components/WhatsAppButton";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative antialiased selection:bg-champagne selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-champagne origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Gallery />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Appointment />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
