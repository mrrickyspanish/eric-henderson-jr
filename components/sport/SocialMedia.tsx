'use client';

import { ExternalLink } from 'lucide-react';

interface SocialPost {
  url: string;
  platform: 'twitter' | 'instagram';
  author: string;
  handle: string;
  date: string;
  excerpt: string;
  type?: 'highlight' | 'news' | 'personal';
}

const socialPosts: SocialPost[] = [
  {
    url: 'https://www.instagram.com/reel/DQbntDkES3e/',
    platform: 'instagram',
    author: 'Elgin Athletics',
    handle: '@elgin_athletics',
    date: 'Nov 2025',
    excerpt: 'District U-46 Buzz: Featuring LaMarin Powell. Explosive RB making waves in the 2028 class. Watch this young athlete dominate!',
    type: 'highlight',
  },
  {
    url: 'https://www.instagram.com/p/DQKe5DRgSep/',
    platform: 'instagram',
    author: 'Elgin Athletics',
    handle: '@elgin_athletics',
    date: 'Nov 2025',
    excerpt: 'LaMarin Powell named Athlete of the Week! Dual-sport standout excelling in both football and basketball. This freshman is special.',
    type: 'highlight',
  },
  {
    url: 'https://twitter.com/ElginSportsNet',
    platform: 'twitter',
    author: 'Illinois Prep Hoops',
    handle: '@ilprephoops',
    date: 'Dec 2025',
    excerpt: '2028 guard LaMarin Powell is a pure 3-level scorer who takes pride in his defensive intensity. Elite footwork and court vision. If this kid stays focused, he will dominate the MSL this season.',
    type: 'news',
  },
  {
    url: 'https://twitter.com/lamarinpowell',
    platform: 'twitter',
    author: 'LaMarin Powell',
    handle: '@lamarinpowell',
    date: 'Nov 2025',
    excerpt: 'Great weekend on the court. 127 rushing yards, 2 TDs on Friday. 23 points, 8 assists Saturday. Blessed to compete at the highest level. More to come. 🏈🏀',
    type: 'personal',
  },
  {
    url: 'https://twitter.com/ILHoopProspects',
    platform: 'twitter',
    author: 'Illinois Hoop Prospects',
    handle: '@ILHoopProspects',
    date: 'Dec 2025',
    excerpt: 'Class of 2028 Prospect Watch - Featuring LaMarin Powell among top dual-sport athletes. Elite vision, speed, and basketball IQ making him a must-watch recruit.',
    type: 'news',
  },
  {
    url: 'https://www.facebook.com/elginathletics',
    platform: 'twitter',
    author: 'Elgin Athletics',
    handle: '@elgin_athletics',
    date: 'Oct 2025',
    excerpt: 'LaMarin Powell from the varsity football team is our Athlete of the Week! Incredible performance on both sides of the ball. The future is bright!',
    type: 'news',
  },
  {
    url: 'https://twitter.com/RecruitScoop247',
    platform: 'twitter',
    author: 'Midwest Sports Report',
    handle: '@MidwestSportsRpt',
    date: 'Nov 2025',
    excerpt: 'Film breakdown: LaMarin Powell shows patience behind blocks then explodes through gaps. Vision + burst combo is rare for Class of 2028. D1 coaches taking notice.',
    type: 'news',
  },
  {
    url: 'https://instagram.com/lamarinpowell',
    platform: 'instagram',
    author: 'Illinois Football Recruiting',
    handle: '@ILFootballRecruit',
    date: 'Dec 2025',
    excerpt: 'Powell with the 47-yard TD run! Broke 4 tackles. Speed, power, balance. College-level traits already showing in this freshman. Class of 2028 stock rising 📈',
    type: 'highlight',
  },
];

export default function SocialFeed() {
  const posts = socialPosts;

  return (
    <section className="bg-slate-900 py-8 overflow-hidden">
      <div className="mb-6 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Social Media
        </h2>
        <p className="text-slate-400 text-sm">
          Latest game highlights, training updates, and media mentions. No hype. Just film.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-6 animate-scroll hover:pause-scroll">
          {[...posts, ...posts].map((post, idx) => (
            <a
              key={`${post.url}-${idx}`}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block flex-shrink-0 w-80"
            >
              <div className="absolute -top-3 left-4 z-10">
                {post.platform === 'twitter' ? (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1DA1F2] to-[#0d8bd9] shadow-lg shadow-blue-500/30 border border-blue-400/30">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#E4405F] via-[#C13584] to-[#833AB4] shadow-lg shadow-pink-500/30 border border-pink-400/30">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                )}
              </div>

              <div className={`relative rounded-xl overflow-hidden bg-slate-800/50 border-2 ${
                post.platform === 'twitter'
                  ? 'border-blue-500/30 shadow-[0_0_15px_rgba(29,161,242,0.15)] hover:shadow-[0_0_25px_rgba(29,161,242,0.25)]'
                  : 'border-pink-500/30 shadow-[0_0_15px_rgba(228,64,95,0.15)] hover:shadow-[0_0_25px_rgba(228,64,95,0.25)]'
              } transition-all duration-300 h-full`}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-base truncate">
                        {post.author}
                      </h3>
                      <p className="text-slate-400 text-sm truncate">
                        {post.handle}
                      </p>
                    </div>
                    <span className="text-slate-500 text-xs whitespace-nowrap ml-2">
                      {post.date}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className={`flex items-center gap-2 ${
                    post.platform === 'twitter' ? 'text-[#1DA1F2] group-hover:text-[#0d8bd9]' : 'text-[#E4405F] group-hover:text-[#C13584]'
                  } transition-colors`}>
                    <span className="text-sm font-semibold">
                      View on {post.platform === 'twitter' ? 'X' : 'Instagram'}
                    </span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  {post.type && (
                    <div className="absolute top-4 right-4">
                      <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-full font-bold ${
                        post.type === 'highlight' ? 'bg-green-500/20 text-green-400' :
                        post.type === 'news' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {post.type}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
