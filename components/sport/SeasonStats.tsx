'use client';

import { useSport } from '@/components/sport/SportContext';
import Image from 'next/image';

export default function SeasonStats() {
  const { currentSport } = useSport();
  const isFootball = currentSport === 'football';

  if (isFootball) {
    return (
      <section className="bg-slate-950/80 py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            2025 Season Stats
          </h2>
          <p className="mt-1 text-sm md:text-base text-slate-300">
            Sophomore season performance and achievements
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-700/70 shadow-[0_24px_80px_rgba(0,0,0,0.85)] max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[400px,1fr] gap-0">
            <div className="relative h-64 md:h-auto min-h-[400px]">
              <Image
                src="/LP_all_conference.jpg"
                alt="LaMarin Powell All-Conference football portrait, Elgin High School maroon jersey number 21"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-r from-transparent via-transparent to-slate-900/40" />
              
              <div className="absolute bottom-6 left-6">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-500/95 backdrop-blur-sm border border-amber-300/60 shadow-2xl">
                  <svg className="w-5 h-5 text-amber-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-black uppercase tracking-wider text-amber-900">All-Conference</span>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col justify-center">
              <div className="mb-6">
                <p className="text-amber-400/80 text-xs uppercase tracking-[0.2em] font-bold mb-2">2025 Season</p>
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1">Final Statistics</h3>
                <p className="text-slate-400 text-sm">Running Back • Class of 2028</p>
                <p className="text-slate-500 text-xs mt-1">Sophomore Season • 10 Games Played</p>
              </div>

              {/* Football context: rankings + high-impact summary */}
              <div className="mt-4 mb-6 max-w-[620px] space-y-3 md:space-y-4">
                <p className="font-semibold text-amber-300">
                  Top sophomore rusher in the Upstate Eight Conference.
                </p>
                <div className="space-y-1.5 text-[15px] leading-relaxed">
                  <p className="text-slate-200/80">529 rush yards • 8.4 yards per carry • 5 rushing TD • 0 fumbles (10 games).</p>
                  <p className="text-slate-200/70">4th in rushing yards in Upstate Eight West and top-6 in rushing yards / top-5 in YPC across the entire conference (East + West).</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="col-span-2 md:col-span-1 bg-amber-500/10 border-2 border-amber-500/40 rounded-xl p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent" />
                  <div className="relative">
                    <p className="text-xs uppercase tracking-wider text-amber-200 font-bold mb-1">Yards Per Carry</p>
                    <p className="text-5xl font-black text-amber-300 leading-none mb-1">8.4</p>
                    <p className="text-[10px] uppercase tracking-wider text-amber-300/70 font-semibold">Elite Average</p>
                  </div>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Rushing Yards</p>
                  <p className="text-4xl font-black text-white leading-none mb-1">529</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">63 carries</p>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Rush TDs</p>
                  <p className="text-4xl font-black text-white leading-none mb-1">5</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">58.8 YPG</p>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Rec Yards</p>
                  <p className="text-4xl font-black text-white leading-none mb-1">127</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">8 catches</p>
                </div>

                <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Rec TDs</p>
                  <p className="text-4xl font-black text-white leading-none mb-1">2</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">15.9 YPC</p>
                </div>

                <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-slate-800/80 to-slate-800/50 border border-slate-700/80 rounded-xl p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-300 font-bold mb-1">All-Purpose</p>
                  <p className="text-4xl font-black text-white leading-none mb-1">772</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">85.8 YPG • 9 Games</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }

  // Basketball stats
  return (
    <section className="bg-slate-950/80 py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            2024-25 Season Stats
          </h2>
          <p className="mt-1 text-sm md:text-base text-slate-300">
            Freshman season performance
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-700/70 shadow-[0_24px_80px_rgba(0,0,0,0.85)] max-w-4xl mx-auto">
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <p className="text-cyan-400/80 text-xs uppercase tracking-[0.2em] font-bold mb-2">2024-25 Season</p>
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1">Season Statistics</h3>
              <p className="text-slate-400 text-sm">Guard • Class of 2028</p>
              <p className="text-slate-500 text-xs mt-1">Freshman Season</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
              <div className="bg-cyan-500/10 border-2 border-cyan-500/40 rounded-xl p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-wider text-cyan-200 font-bold mb-1">Points Per Game</p>
                  <p className="text-5xl font-black text-cyan-300 leading-none mb-1">4.2</p>
                  <p className="text-[10px] uppercase tracking-wider text-cyan-300/70 font-semibold">PPG</p>
                </div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-4">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Assists Per Game</p>
                <p className="text-5xl font-black text-white leading-none mb-1">1.8</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">APG</p>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/80 rounded-xl p-4">
                <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">GPA</p>
                <p className="text-5xl font-black text-white leading-none mb-1">3.2</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Academic</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-slate-300 text-sm">
                Freshman season contributing to varsity basketball team development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
