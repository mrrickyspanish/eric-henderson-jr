'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if splash has been shown in this session
    const splashShown = sessionStorage.getItem('splashShown');
    
    if (splashShown) {
      setIsVisible(false);
      return;
    }

    // Hide splash after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('splashShown', 'true');
    }, 2500); // 2.5 seconds total

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: [0.8, 1.05, 1],
              opacity: 1
            }}
            transition={{ 
              duration: 1,
              ease: [0.34, 1.56, 0.64, 1],
              times: [0, 0.6, 1]
            }}
            className="relative"
          >
            {/* Glow effect */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 0px 0px rgba(251, 191, 36, 0)',
                  '0 0 60px 20px rgba(251, 191, 36, 0.3)',
                  '0 0 0px 0px rgba(34, 211, 238, 0.3)',
                  '0 0 60px 20px rgba(34, 211, 238, 0.3)',
                  '0 0 0px 0px rgba(251, 191, 36, 0)',
                ],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.25, 0.5, 0.75, 1]
              }}
              className="absolute inset-0 rounded-full blur-xl"
            />

            {/* Logo */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="/lamarin_powell_logo_main_transparent.png"
                alt="LaMarin Powell"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Loading text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -10] }}
            transition={{
              duration: 2,
              times: [0, 0.2, 0.8, 1],
              delay: 0.3
            }}
            className="absolute bottom-20 md:bottom-24"
          >
            <p className="text-white/60 text-xs md:text-sm font-semibold tracking-[0.3em] uppercase">
              Loading
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
