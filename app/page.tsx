"use client"; // Ensure this is a client component

import HeroSection from "@/pages/herosection";
import ContactSection from "@/pages/contactsection";
import AboutSection from "@/pages/aboutsection";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative flex flex-col overflow-hidden mx-auto">
        {/* Hero Section with Particles */}
        <HeroSection />
        <AboutSection />

        {/*         <EducationSection />
         */}
        <ContactSection />
      </main>
    </>
  );
}
