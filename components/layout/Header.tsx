'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSport } from '@/components/sport/SportContext';

type ShareState = 'closed' | 'open';

export default function Header() {
  const { currentSport, setSport } = useSport();
  const [shareState, setShareState] = useState<ShareState>('closed');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isFootball = currentSport === 'football';
  const accentColor = isFootball ? '#fbbf24' : '#22d3ee';

  const jerseyNumber = 'LP21';

  const measurables = isFootball
    ? ['4.42s 40-YD', '38" VERT', '3.2 GPA']
    : ['4.2 PPG', '1.8 APG', '3.2 GPA'];

  const copyLink = (sport: 'football' | 'basketball') => {
    const origin =
      typeof window !== 'undefined'
        ? window.location.origin
        : 'https://lamar-powell.vercel.app';
    const url = `${origin}/?sport=${sport}`;

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {});
    }

    setShareState('closed');
    setMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleSportChange = (sport: 'football' | 'basketball') => {
    setSport(sport);
    
    // On mobile, scroll to athlete content after changing sport
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setTimeout(() => {
        const athleteContent = document.getElementById('athlete-content');
        if (athleteContent) {
          athleteContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* Top strip – Desktop only */}
      <div className="hidden md:block bg-black text-[11px] uppercase tracking-[0.2em] text-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <span>Coach Tools</span>

          <nav className="flex items-center gap-6">
            <a href="#athlete-content" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded px-2 py-1">
              Stats
            </a>
            <a href="#schedule" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded px-2 py-1">
              Schedule
            </a>
            <a href="#contact" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded px-2 py-1">
              Contact
            </a>

            {/* Share dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setShareState((prev) => (prev === 'open' ? 'closed' : 'open'))
                }
                className="inline-flex items-center rounded-full border border-white/30 px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] hover:border-white hover:text-white"
              >
                SHARE ▾
              </button>

              {shareState === 'open' && (
                <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-white/10 bg-black/90 py-2 text-[12px] shadow-xl z-50">
                  <div className="px-4 pb-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Share {currentSport === 'football' ? 'Football' : 'Basketball'} Profile
                  </div>

                  <button
                    type="button"
                    onClick={() => copyLink(currentSport)}
                    className="flex w-full items-center justify-between px-4 py-2 text-left text-white/80 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                  >
                    <span>Copy {currentSport === 'football' ? 'Football' : 'Basketball'} Profile Link</span>
                    <span className="text-xs">↗</span>
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>

      {/* Main nav – logo / sport toggle / measurables */}
      <div className="border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-3">
          {/* LEFT – Jersey badge with shimmer */}
          <div className="flex items-center gap-2 md:gap-3">
            <motion.div
              key={currentSport}
              initial={{ boxShadow: `0 0 0 0 ${accentColor}00`, opacity: 0.9 }}
              animate={{
                boxShadow: [
                  `0 0 0 0 ${accentColor}00`,
                  `0 0 26px 4px ${accentColor}55`,
                  `0 0 0 0 ${accentColor}00`,
                ],
                opacity: 1,
              }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="relative flex h-9 w-10 md:h-10 md:w-12 items-center justify-center rounded-full border border-white/25 bg-zinc-900 text-white"
            >
              <span className="text-[9px] md:text-[10px] font-black italic tracking-tight">
                {jerseyNumber}
              </span>
            </motion.div>
            <span className="hidden sm:block text-xs text-white/70">
              Class of 2028
            </span>
          </div>

          {/* CENTER – sport toggle */}
          <div className="flex items-center justify-center gap-4 md:gap-8 text-xs md:text-sm font-medium">
            <button
              type="button"
              onClick={() => handleSportChange('football')}
              className={[
                'pb-1 transition-colors w-16 md:w-20 text-center',
                isFootball
                  ? 'border-b-2 border-amber-400 text-amber-300'
                  : 'border-b-2 border-transparent text-white/60 hover:text-white',
              ].join(' ')}
            >
              Football
            </button>

            <button
              type="button"
              onClick={() => handleSportChange('basketball')}
              className={[
                'pb-1 transition-colors w-16 md:w-20 text-center',
                !isFootball
                  ? 'border-b-2 border-cyan-300 text-cyan-200'
                  : 'border-b-2 border-transparent text-white/60 hover:text-white',
              ].join(' ')}
            >
              Basketball
            </button>
          </div>

          {/* RIGHT – Mobile menu button / Desktop measurables */}
          <div className="flex items-center">
            {/* Mobile hamburger menu */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span className={`block h-0.5 w-6 bg-white/80 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white/80 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 bg-white/80 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Desktop measurables */}
            <div className="hidden md:flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold text-white/80 shadow-sm">
              {measurables.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <nav className="px-6 py-4 space-y-4">
              {/* Measurables on mobile */}
              <div className="flex flex-wrap gap-2 pb-3 border-b border-white/10">
                {measurables.map((item) => (
                  <span key={item} className="bg-white/10 px-3 py-1.5 rounded-full text-[10px] font-semibold text-white/80">
                    {item}
                  </span>
                ))}
              </div>

              <a 
                href="#athlete-content" 
                onClick={handleNavClick}
                className="block text-sm text-white/70 hover:text-white py-2 uppercase tracking-wider"
              >
                Stats
              </a>
              <a 
                href="#schedule" 
                onClick={handleNavClick}
                className="block text-sm text-white/70 hover:text-white py-2 uppercase tracking-wider"
              >
                Schedule
              </a>
              <a 
                href="#contact" 
                onClick={handleNavClick}
                className="block text-sm text-white/70 hover:text-white py-2 uppercase tracking-wider"
              >
                Contact
              </a>
              
              {/* Mobile share buttons */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <button
                  type="button"
                  onClick={() => copyLink('football')}
                  className="w-full text-left text-sm text-white/70 hover:text-white py-2 uppercase tracking-wider"
                >
                  Share Football Profile
                </button>
                <button
                  type="button"
                  onClick={() => copyLink('basketball')}
                  className="w-full text-left text-sm text-white/70 hover:text-white py-2 uppercase tracking-wider"
                >
                  Share Basketball Profile
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
