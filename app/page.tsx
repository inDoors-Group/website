"use client"; // Ensure this is a client component

import HeroSection from "@/pages/herosection";
import ContactSection from "@/pages/contactsection";
import {NavbarDemo} from "@/components/navbar";
import {FloatingDockDemo} from "@/components/floatingDock";
export default function Home() {
  return (
    <>
      <NavbarDemo />
      

      <main className="relative flex flex-col overflow-hidden mx-auto">
        {/* Hero Section with Particles */}
        <HeroSection />

        {/*         <EducationSection />
         */}
        <ContactSection />
      </main>



      <FloatingDockDemo/>
    </>
  );
}
