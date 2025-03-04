"use client"; // Ensure this is a client component

import HeroSection from "@/pages/herosection";
import ContactSection from "@/pages/contactsection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-col overflow-hidden mx-auto">
        {/* Hero Section with Particles */}
        <HeroSection />

        {/*         <EducationSection />
         */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
