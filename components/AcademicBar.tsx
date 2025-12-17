'use client';

import { motion } from 'framer-motion';

export default function AcademicBar() {
  const achievements = [
    '3.2 GPA',
    'Honor Roll (Freshman Year)',
    'B.R.U. Member',
    'AAU Assistant Coach'
  ];

  return (
    <section className="relative bg-black/90 py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-center"
        >
          {achievements.map((achievement, index) => (
            <div key={achievement} className="flex items-center gap-3 sm:gap-6">
              <span className="flex items-center gap-2 text-sm sm:text-base lg:text-lg font-semibold text-white/90">
                {achievement === '3.2 GPA' && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-emerald-400/90">
                    <path d="M6 0.5L7.5 1.5L9.5 1L10.5 2.5L12 3.5L11.5 5.5L12 7.5L10.5 9L9.5 10.5L7.5 11L6 11.5L4.5 11L2.5 10.5L1.5 9L0 7.5L0.5 5.5L0 3.5L1.5 2.5L2.5 1L4.5 1.5L6 0.5Z" stroke="currentColor" strokeWidth="0.75" fill="none"/>
                    <path d="M3.5 6L5 7.5L8.5 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {achievement}
              </span>
              {index < achievements.length - 1 && (
                <span className="text-white/40 hidden sm:inline">•</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
