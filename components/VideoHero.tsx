'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useSport } from '@/components/sport/SportContext';
import { useRef } from 'react';

export default function PhotoHero() {
  const { currentSport } = useSport();
  const ref = useRef(null);
  
  // Subtle parallax effect - 10% drift on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  
  const heroImage = currentSport === 'football' ? '/lp_hero_football.png' : '/LP_hoops_hero.png';
  const imageFilter = currentSport === 'basketball' 
    ? 'contrast(1.17) saturate(0.88) brightness(1.08) sepia(0.06) hue-rotate(-4deg) blur(0.3px)' 
    : 'none';

  return (
    <section ref={ref} className="relative h-[calc(100vh-4rem)] w-full overflow-hidden bg-black mt-16">
      <motion.div className="absolute inset-0 w-full h-full" style={{ y }}>
        <Image
          src={heroImage}
          alt={currentSport === 'football' ? 'Running back LaMarin Powell carrying the ball, night game' : 'Guard LaMarin Powell dribbling basketball in game action'}
          fill
          priority
          className="object-cover"
          quality={100}
          style={{ 
            filter: imageFilter,
            objectPosition: currentSport === 'basketball' ? 'center 15%' : 'center 15%'
          }}
        />
      </motion.div>

      {/* Background darkening + vignette */}
      <div className={`absolute inset-0 ${currentSport === 'basketball' ? 'bg-gradient-to-b from-black/60 via-black/40 to-black/75' : 'bg-gradient-to-b from-black/50 via-black/30 to-black/70'}`} />
      
      {/* Top vignette for basketball */}
      {currentSport === 'basketball' && (
        <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-black/35 to-transparent pointer-events-none" />
      )}
      
      {/* Subject separation radial for basketball */}
      {currentSport === 'basketball' && (
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_40%_at_50%_35%,rgba(255,255,255,0.10)_0%,transparent_65%)]" />
      )}
      
      {/* Fog / tunnel smoke – stronger but still premium */}
      {/* Bottom fog fade - enhanced for basketball */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-[-23%] h-[45%]"
        initial={{ opacity: 0.35, y: 0 }}
        animate={{ opacity: [0.35, 0.55, 0.40], y: [0, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 100%, rgba(255,255,255,${currentSport === 'basketball' ? '0.46' : '0.38'}) 0, transparent 58%),
            radial-gradient(circle at 50% 100%, rgba(255,255,255,${currentSport === 'basketball' ? '0.53' : '0.45'}) 0, transparent 65%),
            radial-gradient(circle at 90% 100%, rgba(255,255,255,${currentSport === 'basketball' ? '0.46' : '0.38'}) 0, transparent 58%)
          `,
          filter: `blur(${currentSport === 'basketball' ? '42px' : '32px'})`,
          mixBlendMode: 'screen',
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-x-[-10%] bottom-[-27%] h-[40%]"
        initial={{ opacity: 0.27, x: 0 }}
        animate={{ opacity: [0.27, 0.40, 0.27], x: [-20, 12, -20] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 100%, rgba(255,255,255,${currentSport === 'basketball' ? '0.40' : '0.32'}) 0, transparent 60%),
            radial-gradient(circle at 70% 100%, rgba(255,255,255,${currentSport === 'basketball' ? '0.44' : '0.36'}) 0, transparent 62%)
          `,
          filter: `blur(${currentSport === 'basketball' ? '48px' : '38px'})`,
          mixBlendMode: 'screen',
        }}
      />

      {/* HERO OVERLAY */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="relative flex flex-col items-center text-center gap-5 md:gap-6">
          {/* Light beam behind name */}
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2">
            <div className="mx-auto h-32 w-[80%] md:w-2/3 bg-gradient-to-b from-slate-100/18 via-slate-100/18 to-transparent blur-2xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10)_0%,transparent_60%)]" />
            {/* Soft radial spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_50%)] blur-3xl" />
          </div>

          {/* Top pill */}
          <motion.div
            key={currentSport}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-full bg-black/40 border border-white/20 px-5 py-2.5 text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white backdrop-blur-lg hover:border-white/35 hover:backdrop-blur-[14px] transition-all duration-300"
          >
            <span>{currentSport === 'football' ? 'RUNNING BACK • FOOTBALL' : 'GUARD • BASKETBALL'}</span>
            <span className="h-1 w-1 rounded-full bg-slate-100/60" />
            <span>CLASS OF 2028</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[0.18em] uppercase text-slate-50 drop-shadow-[0_18px_40px_rgba(0,0,0,0.85)] mt-2"
          >
            LAMARIN&nbsp;POWELL
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg font-medium text-slate-100/80"
          >
            Dual-Sport Athlete • Class of 2028
          </motion.p>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs sm:text-sm text-white/67"
        >
          <span className="tracking-wider">SCROLL TO EXPLORE</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
