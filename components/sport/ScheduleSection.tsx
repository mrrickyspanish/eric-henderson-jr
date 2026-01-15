'use client';

import { useState, useEffect } from 'react';
import { useSport } from '@/components/sport/SportContext';
import { sportContent } from '@/components/sport/sportContent';
import Image from 'next/image';

export default function ScheduleSection() {
  const { currentSport } = useSport();
  const schedule = sportContent[currentSport].schedule;
  const [selectedGameIndex, setSelectedGameIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [filter, setFilter] = useState<'All' | 'Conference' | 'Non-Conference'>('All');

  // Filter to only show upcoming games from today forward
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset to start of day for accurate comparison

  const upcomingGames = schedule.filter(game => {
    const gameDate = new Date(game.date);
    return gameDate >= today;
  });

  // Reset pagination when sport changes
  useEffect(() => {
    setSelectedGameIndex(0);
    setStartIndex(0);
    setFilter('All');
  }, [currentSport]);

  // Only show basketball schedule
  if (currentSport !== 'basketball' || !upcomingGames || upcomingGames.length === 0) return null;

  // Apply filter
  const filteredSchedule = filter === 'All' 
    ? upcomingGames 
    : upcomingGames.filter(game => game.type === filter);

  const itemsPerPage = 4;
  const totalGames = filteredSchedule.length;
  const visibleGames = filteredSchedule.slice(startIndex, startIndex + itemsPerPage);
  const hasMore = startIndex + itemsPerPage < totalGames;
  const hasPrevious = startIndex > 0;

  const selectedGame = upcomingGames[selectedGameIndex];
  const accent = sportContent[currentSport].colors.accent;
  
  // Determine if game is home or away based on opponent format
  const isAwayGame = selectedGame.opponent.startsWith('@');
  const heroImage = currentSport === 'basketball'
    ? (isAwayGame ? '/LP_hoops_5.png' : '/LP_hoops_2.png')
    : null;

  const handleGameSelect = (index: number) => {
    setSelectedGameIndex(index);
    // Auto-scroll to schedule section
    document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="schedule" className="bg-slate-950/80 py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Next Game & Schedule
            </h2>
            <p className="mt-1 text-sm md:text-base text-slate-300">
              When and where coaches can see LaMarin live for{' '}
              <span className="font-semibold">
                basketball
              </span>
              .
            </p>
          </div>
          <span className="inline-flex items-center rounded-full border border-slate-600/60 px-3 py-1 text-xs tracking-[0.2em] uppercase text-slate-300">
            {currentSport.toUpperCase()} • Schedule
          </span>
        </div>

        {/* Selected Game Card with Hero Image */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-700/70 shadow-[0_24px_80px_rgba(0,0,0,0.75)]">
            {heroImage && currentSport === 'basketball' ? (
              <>
                <div className="relative h-64 md:h-80">
                  <div className="absolute inset-0">
                    <Image
                      key={heroImage}
                      src={heroImage}
                      alt={isAwayGame ? 'LaMarin Powell in white away jersey, basketball game action' : 'LaMarin Powell in blue home jersey, basketball game action'}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/30 to-transparent pointer-events-none" />
                </div>
                <div className="relative p-5 md:p-6">
                  <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-300 mb-2">
                    {selectedGameIndex === 0 ? 'Next Game' : `Game ${selectedGameIndex + 1}`}
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-white">
                    {selectedGame.opponent}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {selectedGame.date} • {selectedGame.time}
                  </p>
                  <p className="mt-2 text-xs md:text-sm text-slate-400">
                    {selectedGame.location}
                  </p>
                  {selectedGame.type && (
                    <p className={`mt-3 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ${
                      selectedGame.type === 'Non-Conference'
                        ? 'bg-orange-500/20 border border-orange-500/50 text-orange-200'
                        : 'bg-slate-900/80 border border-slate-600/80 text-slate-200'
                    }`}>
                      {selectedGame.type}
                    </p>
                  )}
                </div>
              </>
            ) : (
              <div className="p-5 md:p-6">
                <div className="absolute inset-0 rounded-2xl opacity-40 pointer-events-none"
                     style={{ background: `radial-gradient(circle at 0% 0%, ${accent}33, transparent 55%)` }} />
                <div className="relative">
                  <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-300 mb-2">
                    {selectedGameIndex === 0 ? 'Next Game' : `Game ${selectedGameIndex + 1}`}
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-white">
                    {selectedGame.opponent}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {selectedGame.date} • {selectedGame.time}
                  </p>
                  <p className="mt-2 text-xs md:text-sm text-slate-400">
                    {selectedGame.location}
                  </p>
                  {selectedGame.type && (
                    <p className={`mt-3 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ${
                      selectedGame.type === 'Non-Conference'
                        ? 'bg-orange-500/20 border border-orange-500/50 text-orange-200'
                        : 'bg-slate-900/80 border border-slate-600/80 text-slate-200'
                    }`}>
                      {selectedGame.type}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* All Games List */}
          {schedule.length > 0 && (
            <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-4 md:p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                  Schedule
                </p>
                <div className="flex gap-2">
                  {(['All', 'Conference', 'Non-Conference'] as const).map((filterOption) => (
                    <button
                      key={filterOption}
                      onClick={() => {
                        setFilter(filterOption);
                        setStartIndex(0);
                        setSelectedGameIndex(0);
                      }}
                      className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.15em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                        filter === filterOption
                          ? 'bg-slate-700 text-white border border-slate-600'
                          : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:bg-slate-800/70 hover:text-slate-300'
                      }`}
                    >
                      {filterOption}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                {visibleGames.map((game, idx) => {
                  const actualIndex = startIndex + idx;
                  const isSelected = selectedGameIndex === actualIndex;
                  return (
                    <button
                      key={game.date + game.opponent + actualIndex}
                      onClick={() => handleGameSelect(actualIndex)}
                      className={`w-full flex flex-wrap items-center gap-2 justify-between rounded-xl px-3 py-2.5 transition-all text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                        isSelected
                          ? 'bg-slate-800/90 border-2 border-slate-600'
                          : 'bg-slate-900/80 border border-slate-800 hover:bg-slate-800/70'
                      }`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-slate-100'}`}>
                            {game.opponent}
                          </p>
                          {game.marquee && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-[9px] font-bold uppercase tracking-wider text-amber-300">
                              {game.marquee === 'Rivalry' ? '🔥' : '⭐'} {game.marquee}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400">
                          {game.date} • {game.time}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          {game.location}
                        </p>
                      </div>
                      {game.type && (
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                            game.type === 'Non-Conference'
                              ? 'bg-orange-500/20 border border-orange-500/50 text-orange-200'
                              : ''
                          }`}
                          style={game.type !== 'Non-Conference' ? {
                            border: `1px solid ${accent}55`,
                            color: accent,
                            backgroundColor: '#020617',
                          } : undefined}
                        >
                          {game.type}
                        </span>
                      )}
                    </button>
                  );
                })}
                
                {/* Pagination Controls */}
                {(hasPrevious || hasMore) && (
                  <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-slate-700/50">
                    <button
                      onClick={() => setStartIndex(Math.max(0, startIndex - itemsPerPage))}
                      disabled={!hasPrevious}
                      className={`flex items-center gap-1 text-xs font-medium px-3 py-2 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                        hasPrevious
                          ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                          : 'text-slate-600 cursor-not-allowed'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      PREV
                    </button>
                    <span className="text-xs text-slate-500 font-medium">
                      {startIndex + 1}-{Math.min(startIndex + itemsPerPage, totalGames)} of {totalGames}
                    </span>
                    <button
                      onClick={() => setStartIndex(startIndex + itemsPerPage)}
                      disabled={!hasMore}
                      className={`flex items-center gap-1 text-xs font-medium px-3 py-2 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                        hasMore
                          ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                          : 'text-slate-600 cursor-not-allowed'
                      }`}
                    >
                      NEXT
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
