'use client';

import PhotoHero from "@/components/VideoHero";
import SportSelector from "@/components/SportSelector";
import HighlightsSection from "@/components/sport/HighlightsSection";
import AcademicBar from "@/components/AcademicBar";
import SeasonStats from "@/components/sport/SeasonStats";
import CoachTestimonial from "@/components/sport/CoachTestimonial";
import RecruiterForm from "@/components/sport/RecruiterForm";
import InTheNews from "@/components/sport/InTheNews";
import SocialMedia from "@/components/sport/SocialMedia";
import ScheduleSection from "@/components/sport/ScheduleSection";
import ShareBar from "@/components/sport/ShareBar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <PhotoHero />
      <SportSelector />
      <div id="athlete-content" className="bg-gray-50/0">
        <HighlightsSection />
        <AcademicBar />
        <SeasonStats />
        <CoachTestimonial />
        <ScheduleSection />
        <InTheNews />
        <SocialMedia />
        <RecruiterForm />
      </div>
      <ShareBar />
      <Footer />
    </main>
  );
}
