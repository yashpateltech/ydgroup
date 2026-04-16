import { Phone, MessageSquare, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-50 flex flex-col gap-4"
        >
          <a 
            href="https://wa.me/919898989898" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
          >
            <MessageSquare className="h-6 w-6" />
            <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Chat on WhatsApp
            </span>
          </a>
          <a 
            href="mailto:yashpatelseo19@gmail.com" 
            className="w-14 h-14 bg-[#0047ff] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
          >
            <Mail className="h-6 w-6" />
            <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Email Us
            </span>
          </a>
          <a 
            href="tel:+919898989898" 
            className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative"
          >
            <Phone className="h-6 w-6" />
            <span className="absolute right-full mr-4 bg-white text-gray-900 px-3 py-1 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Call Now
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
