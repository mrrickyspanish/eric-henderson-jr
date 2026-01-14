"use client";

import { useState } from "react";
import { useSport } from "@/components/sport/SportContext";
import { sportContent } from "@/components/sport/sportContent";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

type FormState = "idle" | "submitting" | "success" | "error";

export default function RecruiterForm() {
  const { currentSport } = useSport();
  const content = sportContent[currentSport];
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  const subject = `Interest in LaMarin Powell – ${content.position} – Class of 2028`;
  
  const backgroundImage = currentSport === 'football' 
    ? '/LP_football_7.png' 
    : '/lamarin_powell_basketball_3.jpg';

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setState("submitting");

    const fd = new FormData(e.currentTarget);
    const payload = {
      sport: currentSport,
      subject: subject,
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      school: String(fd.get("school") || "").trim(),
      role: String(fd.get("role") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/recruiter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Request failed");
      }

      setState("success");
      (e.currentTarget as HTMLFormElement).reset();

      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.4 },
        colors: ['#ffffff', '#cccccc'],
      });

      setTimeout(() => setState("idle"), 5000);
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden group">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 70%, transparent)'
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`glow-${currentSport}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-tr ${content.colors.gradient} opacity-10 blur-[100px]`}
        />
      </AnimatePresence>

      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
           className="absolute -top-[20%] -right-[20%] w-[80vh] h-[80vh] border border-white/5 rounded-full border-dashed"
         />
         <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
           className="absolute -bottom-[20%] -left-[20%] w-[60vh] h-[60vh] border border-white/5 rounded-full border-dashed"
         />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl overflow-hidden">
          
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${content.colors.gradient}`} />

          {/* Desktop: Landscape Layout */}
          <div className="grid md:grid-cols-[380px,1fr] gap-0">
            
            {/* Left: Header Column */}
            <div className="relative p-8 md:p-10 bg-black/40 flex flex-col justify-center border-r border-white/10 overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage: `url('${backgroundImage}')`,
                }}
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Recruiting Inquiry
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Coaches and Recruiters: Request full game film, transcripts, and schedule availability.
              </p>
              
              <div className="mt-8 flex items-center gap-2 opacity-30">
                <div className="h-px flex-1 bg-white"></div>
                <span className="text-[9px] uppercase tracking-widest text-white whitespace-nowrap">Official Contact</span>
                <div className="h-px flex-1 bg-white"></div>
              </div>
              </div>
            </div>

            {/* Right: Form Column */}
            <div className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="bg-white/5 rounded px-4 py-2.5 border border-white/10 flex items-center gap-3">
              <span className="text-white/40 uppercase text-[10px] font-bold tracking-wider">Subject:</span>
              <span className="text-white/90 font-mono text-xs sm:text-sm truncate">{subject}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-bold text-white/50 uppercase tracking-widest">Recruiter Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-black/40 border border-white/10 focus:border-white/50 rounded p-3 text-white outline-none transition-colors"
                  placeholder="Coach Name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-white/50 uppercase tracking-widest">School Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-black/40 border border-white/10 focus:border-white/50 rounded p-3 text-white outline-none transition-colors"
                  placeholder=".edu address preferred"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="space-y-2">
                <label htmlFor="school" className="text-xs font-bold text-white/50 uppercase tracking-widest">University / Program</label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  required
                  className="w-full bg-black/40 border border-white/10 focus:border-white/50 rounded p-3 text-white outline-none transition-colors"
                  placeholder="University of..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="role" className="text-xs font-bold text-white/50 uppercase tracking-widest">Title</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  className="w-full bg-black/40 border border-white/10 focus:border-white/50 rounded p-3 text-white outline-none transition-colors"
                  placeholder="HC, OC, DC, Recruiting Coord."
                />
              </div>
            </div>

             <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-bold text-white/50 uppercase tracking-widest">Direct Line (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-black/40 border border-white/10 focus:border-white/50 rounded p-3 text-white outline-none transition-colors"
                  placeholder="555-0123"
                />
              </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold text-white/50 uppercase tracking-widest">Message</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                className="w-full bg-black/40 border border-white/10 focus:border-white/50 rounded p-3 text-white outline-none transition-colors resize-none"
                placeholder="Requesting transcripts, film access, or camp invite details..."
              />
            </div>

            <button
              type="submit"
              disabled={state === "submitting"}
              className="w-full bg-white hover:bg-gray-200 text-black font-black py-3.5 rounded uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {state === "submitting" ? "Transmitting..." : "Send Inquiry"}
            </button>
            <p className="text-xs text-slate-500 text-center mt-3">
              Message goes directly to the Powell family and coaching staff.
            </p>

            {state === "success" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-center text-sm font-medium">
                Inquiry received. We will respond shortly.
              </motion.div>
            )}

            {state === "error" && (
               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-center text-sm font-medium">
                {error}
              </motion.div>
            )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
