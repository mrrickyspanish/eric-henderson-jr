'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSport } from '@/components/sport/SportContext';

type ShareState = 'closed' | 'open';
type StatsState = 'closed' | 'open';

export default function Header() {
  const { currentSport, setSport } = useSport();
  const [shareState, setShareState] = useState<ShareState>('closed');
  const [statsState, setStatsState] = useState<StatsState>('closed');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for navbar shrinking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isFootball = currentSport === 'football';
  const accentColor = isFootball ? '#fbbf24' : '#22d3ee';

  const jerseyNumber = 'LP21';

  const measurables = isFootball
    ? [
        { label: '40-Yard Dash', value: '4.42s' },
        { label: 'Vertical Jump', value: '38"' },
        { label: 'GPA', value: '3.2' }
      ]
    : [
        { label: 'Points Per Game', value: '4.2' },
        { label: 'Assists Per Game', value: '1.8' },
        { label: 'GPA', value: '3.2' }
      ];

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
    setStatsState('closed');
    setMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    setStatsState('closed');
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStatsState('closed');
    setShareState('closed');
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
    <header className="fixed inset-x-0 top-0 z-40 transition-all duration-300">
      {/* Top strip – Desktop only */}
      <div className={`hidden md:block bg-black text-[11px] uppercase tracking-[0.2em] text-white/60 transition-all duration-300 ${isScrolled ? 'py-1.5' : 'py-2.5'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* LEFT – Logo pill and class */}
          <div className="flex items-center gap-3 md:gap-4">
            <motion.button
              type="button"
              onClick={scrollToTop}
              initial={{ boxShadow: `0 0 0 0 ${accentColor}00`, opacity: 0.9 }}
              animate={{
                boxShadow: [
                  `0 0 0 0 ${accentColor}00`,
                  `0 0 26px 4px ${accentColor}55`,
                  `0 0 0 0 ${accentColor}00`,
                ],
                opacity: 1,
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="relative flex items-center gap-2 h-8 md:h-9 pl-1.5 pr-3 md:pr-4 rounded-full border border-white/25 bg-zinc-900 text-white overflow-hidden hover:border-white/40 transition-colors cursor-pointer z-10"
              aria-label="Scroll to top"
            >
              <div className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 p-0.5">
                <img 
                  src="/lamarin_powell_logo_main_transparent.png" 
                  alt="LP Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[8px] md:text-[9px] font-black tracking-tight whitespace-nowrap">
                LAMARIN POWELL
              </span>
            </motion.button>
            <span className="text-[10px] text-white/60">
              Class of 2028
            </span>
          </div>

          {/* RIGHT – Navigation */}
          <nav className="flex items-center gap-7">
            <span className="text-[11px] font-semibold text-white/50">Coach Tools</span>
            {/* Stats dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setStatsState((prev) => (prev === 'open' ? 'closed' : 'open'))
                }
                className="text-[11px] font-semibold hover:text-white hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded px-3 py-2 min-h-[44px] flex items-center gap-1"
              >
                Stats 
                <motion.span
                  animate={{ rotate: statsState === 'open' ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  ▾
                </motion.span>
              </button>

              {statsState === 'open' && (
                <div className="absolute left-0 mt-2 w-72 rounded-2xl border border-white/10 bg-black/90 py-2 text-[12px] shadow-xl z-50">
                  <div className="px-4 pb-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {currentSport === 'football' ? 'Football' : 'Basketball'} Measurables
                  </div>
                  <div className="px-4 py-3 space-y-2">
                    {measurables.map((stat) => (
                      <div key={stat.label} className="flex items-center justify-between py-1">
                        <span className="text-white/60 text-xs">{stat.label}</span>
                        <span className={`text-base font-bold ${isFootball ? 'text-amber-400' : 'text-cyan-400'}`}>
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a 
              href="#schedule" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[11px] font-semibold hover:text-white hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded px-3 py-2 min-h-[44px] flex items-center"
            >
              Schedule
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[11px] font-semibold hover:text-white hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded px-3 py-2 min-h-[44px] flex items-center"
            >
              Contact
            </a>

            {/* Share dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setShareState((prev) => (prev === 'open' ? 'closed' : 'open'))
                }
                className="inline-flex items-center rounded-full border border-white/30 px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] hover:border-white hover:text-white transition-all duration-200"
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

      {/* Main nav – sport toggle */}
      <div className="border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 py-3">
          {/* CENTER – sport toggle */}
          <div className="flex items-center justify-center gap-6 md:gap-10 text-xs md:text-sm font-semibold">
            <button
              type="button"
              onClick={() => handleSportChange('football')}
              className={[
                'pb-1.5 px-2 transition-all duration-200 w-20 md:w-24 text-center min-h-[44px] flex items-center justify-center',
                isFootball
                  ? 'border-b-2 border-amber-400 text-amber-300'
                  : 'border-b-2 border-transparent text-white/60 hover:text-white hover:scale-105',
              ].join(' ')}
            >
              Football
            </button>

            <button
              type="button"
              onClick={() => handleSportChange('basketball')}
              className={[
                'pb-1.5 px-2 transition-all duration-200 w-20 md:w-24 text-center min-h-[44px] flex items-center justify-center',
                !isFootball
                  ? 'border-b-2 border-cyan-300 text-cyan-200'
                  : 'border-b-2 border-transparent text-white/60 hover:text-white hover:scale-105',
              ].join(' ')}
            >
              Basketball
            </button>
          </div>

          {/* RIGHT – Mobile menu button */}
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
              {/* Stats section */}
              <div>
                <div className="text-sm font-semibold text-white/70 py-2 uppercase tracking-wider mb-2">
                  Stats
                </div>
                <div className="pl-4 space-y-2 pb-3 border-b border-white/10">
                  {measurables.map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between py-1">
                      <span className="text-xs text-white/60">{stat.label}</span>
                      <span className={`text-base font-bold ${isFootball ? 'text-amber-400' : 'text-cyan-400'}`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href="#schedule" 
                onClick={handleNavClick}
                className="block text-sm font-semibold text-white/70 hover:text-white py-2 uppercase tracking-wider transition-colors duration-200"
              >
                Schedule
              </a>
              <a 
                href="#contact" 
                onClick={handleNavClick}
                className="block text-sm font-semibold text-white/70 hover:text-white py-2 uppercase tracking-wider transition-colors duration-200"
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
