'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Instagram, Youtube, Music2, Twitter } from 'lucide-react';
import { FormEvent, InputHTMLAttributes, ReactNode, useEffect, useMemo, useRef, useState } from 'react';

const assets = {
  hero: 'https://private-us-east-1.manuscdn.com/sessionFile/AHNgd84CGhe4VQcdazjpil/sandbox/3AEhAJ1k1P1rTYpUIyqnsl-img-1_1772083312000_na1fn_ZXJpYy1oZXJvLWJn.jpg',
  stats: 'https://private-us-east-1.manuscdn.com/sessionFile/AHNgd84CGhe4VQcdazjpil/sandbox/3AEhAJ1k1P1rTYpUIyqnsl-img-2_1772083293000_na1fn_ZXJpYy1zdGF0cy1iZw.jpg',
  locker: 'https://private-us-east-1.manuscdn.com/sessionFile/AHNgd84CGhe4VQcdazjpil/sandbox/3AEhAJ1k1P1rTYpUIyqnsl-img-3_1772083313000_na1fn_ZXJpYy1sb2NrZXItcm9vbS1iZw.jpg',
  texture: 'https://private-us-east-1.manuscdn.com/sessionFile/AHNgd84CGhe4VQcdazjpil/sandbox/3AEhAJ1k1P1rTYpUIyqnsl-img-4_1772083299000_na1fn_ZXJpYy1jaGljYWdvLXRleHR1cmU.jpg',
};

function CountUp({ value, start }: { value: number; start: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const totalFrames = 40;
    const id = setInterval(() => {
      frame += 1;
      setDisplay(Math.round((value * frame) / totalFrames));
      if (frame >= totalFrames) {
        clearInterval(id);
      }
    }, 20);
    return () => clearInterval(id);
  }, [start, value]);

  return <>{display}</>;
}

export default function Home() {
  const [openForm, setOpenForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const statsRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
      },
      { threshold: 0.35 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const nameLetters = useMemo(() => 'ERIC HENDERSON JR.'.split(''), []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpenForm(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <main className="bg-midnight text-ivory">
      <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-28 md:px-12">
        <Image src={assets.hero} alt="Eric Henderson Jr. hero background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="absolute right-3 top-2 text-[40vw] font-barlow font-extrabold leading-none text-chicago-red/10">5</div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-5xl"
        >
          <h1 className="font-barlow text-6xl uppercase leading-[0.9] tracking-tight md:text-9xl">
            {nameLetters.map((letter, i) => (
              <motion.span key={`${letter}-${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.03 }}>
                {letter}
              </motion.span>
            ))}
          </h1>
          <p className="mt-6 font-geist text-lg uppercase tracking-[0.2em] text-gold">One of One</p>
          <p className="mt-2 font-dm text-sm uppercase tracking-[0.14em] md:text-base">RB | Chicago Bulls College Prep | Class of 2028</p>
          <a href="#stats" className="mt-10 inline-flex items-center gap-2 rounded-md border border-chicago-red bg-chicago-red px-6 py-3 font-geist text-xs uppercase tracking-[0.2em] text-white transition hover:bg-red-700">Explore Profile</a>
        </motion.div>
        <ChevronDown className="absolute bottom-5 left-1/2 size-7 -translate-x-1/2 text-ivory/70" />
      </section>

      <section id="stats" ref={statsRef} className="relative overflow-hidden border-y border-white/10 px-6 py-16 md:px-12">
        <Image src={assets.stats} alt="Stats textured background" fill className="object-cover" />
        <div className="absolute inset-0 bg-midnight/80" />
        <div className="relative z-10 grid gap-8 md:grid-cols-2">
          <div className="border-l-2 border-chicago-red pl-4">
            <p className="font-geist text-xs uppercase tracking-[0.3em] text-ivory/70">Primary Profile</p>
            <p className="font-barlow text-5xl">RB / MLB</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Stat label="Height" value={5} suffix=" ft 9 in" start={inView} />
            <Stat label="Weight" value={158} suffix=" lbs" start={inView} />
            <Stat label="Jersey" value={5} start={inView} />
            <div>
              <p className="font-geist text-xs uppercase tracking-[0.24em] text-ivory/70">Offer</p>
              <p className="mt-2 inline-flex items-center rounded border border-gold/50 bg-gold/20 px-3 py-1 font-dm text-sm text-gold">Western Kentucky (Verbal)</p>
            </div>
          </div>
        </div>
      </section>

      <RevealSection className="px-6 py-16 md:px-12" title="Game Film" accent="red">
        <div className="grid gap-6 md:grid-cols-2">
          {['Junior Season Highlights', 'Top 10 Plays', 'Explosive Runs & Goal-line Stops'].map((title) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="aspect-video overflow-hidden rounded-md border border-white/10">
                <iframe
                  className="h-full w-full"
                  loading="lazy"
                  src="https://www.hudl.com/embed/video/3/24342440/"
                  title={title}
                  allowFullScreen
                />
              </div>
              <p className="mt-3 font-dm text-sm text-ivory/80">{title}</p>
            </article>
          ))}
        </div>
        <a href="https://www.hudl.com/profile/24342440/Eric-Henderson" target="_blank" className="mt-8 inline-flex items-center gap-2 rounded-md bg-chicago-red px-5 py-3 font-geist text-xs uppercase tracking-[0.2em]"><ExternalLink className="size-4" />View Full Hudl Profile</a>
      </RevealSection>

      <section className="relative overflow-hidden px-6 py-20 md:px-12">
        <Image src={assets.locker} alt="Locker room atmosphere" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative z-10 max-w-2xl rounded-xl border border-gold/30 bg-black/50 p-8 backdrop-blur-sm">
          <p className="font-geist text-xs uppercase tracking-[0.3em] text-gold">The Locker Room</p>
          <h2 className="mt-3 font-barlow text-4xl uppercase md:text-5xl">Exclusive Access for Coaches</h2>
          <p className="mt-4 font-dm text-ivory/85">Submit your inquiry to unlock uncut game film, chalk-talk breakdowns, academic records, and a personalized welcome from Eric.</p>
          <button onClick={() => setOpenForm(true)} className="mt-8 rounded-md bg-chicago-red px-6 py-3 font-geist text-xs uppercase tracking-[0.2em]">Request Access</button>
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 px-6 py-10 md:px-12">
        <Image src={assets.texture} alt="Chicago texture" fill className="object-cover opacity-20" />
        <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-barlow text-2xl uppercase">Eric Henderson Jr.</p>
            <p className="font-dm text-sm text-ivory/70">Powered by Creative Eye Studios</p>
          </div>
          <div className="flex items-center gap-4 text-ivory/80">
            <Instagram className="size-5" /><Twitter className="size-5" /><Music2 className="size-5" /><Youtube className="size-5" />
          </div>
        </div>
      </section>

      {openForm && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
          <form onSubmit={handleSubmit} className="w-full max-w-xl rounded-xl border border-white/15 bg-[#0d1117] p-6">
            <h3 className="font-barlow text-3xl uppercase">Recruiter Inquiry</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Input label="Coach Name" name="coachName" required />
              <Input label="School / Organization" name="school" required />
              <Input label="Email" name="email" type="email" required />
              <Input label="Phone" name="phone" />
              <div className="md:col-span-2">
                <label className="field-label">Message</label>
                <textarea name="message" rows={4} className="field" />
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button type="submit" className="rounded bg-chicago-red px-5 py-2 font-geist text-xs uppercase tracking-[0.2em]">Send Inquiry</button>
              <button type="button" onClick={() => setOpenForm(false)} className="rounded border border-white/30 px-5 py-2 font-geist text-xs uppercase tracking-[0.2em]">Close</button>
            </div>
            {submitted && <p className="mt-4 font-dm text-sm text-gold">Inquiry received. Access details will be sent by email.</p>}
          </form>
        </div>
      )}
    </main>
  );
}

function Stat({ label, value, suffix = '', start }: { label: string; value: number; suffix?: string; start: boolean }) {
  return (
    <div>
      <p className="font-geist text-xs uppercase tracking-[0.24em] text-ivory/70">{label}</p>
      <p className="mt-2 font-geist text-3xl"><CountUp value={value} start={start} />{suffix}</p>
    </div>
  );
}

function Input({ label, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label>
      <span className="field-label">{label}</span>
      <input {...props} className="field" />
    </label>
  );
}

function RevealSection({ title, accent, className, children }: { title: string; accent: 'red' | 'gold'; className?: string; children: ReactNode }) {
  return (
    <motion.section initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className={className}>
      <h2 className="font-barlow text-5xl uppercase md:text-6xl">{title}</h2>
      <div className={`mb-8 mt-2 h-1 w-24 ${accent === 'red' ? 'bg-chicago-red' : 'bg-gold'}`} />
      {children}
    </motion.section>
  );
}
