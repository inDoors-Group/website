import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import Next.js Image component
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Set breakpoint for switching to mobile menu
  const BREAKPOINT = 1024;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobileView(window.innerWidth < BREAKPOINT);
      if (window.innerWidth >= BREAKPOINT) setIsMobileMenuOpen(false);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FAFAFC] z-50">
      {" "}
      {/* <-- No shadow */}
      <div className="flex justify-center items-center h-10 w-full px-6">
        {" "}
        {/* <-- Skinnier height, more spacing */}
        {/* Desktop Navigation */}
        {!isMobileView && (
          <div className="flex items-center space-x-12 text-gray-900 text-[13px] font-light tracking-wide">
            <a href="#home">
              <Image
                src="/output-onlinepngtools.png" // Change this to your logo file
                alt="Logo"
                width={25} // Adjust width as needed
                height={25} // Adjust height as needed
                className="object-contain" // Ensures it scales properly
              />
            </a>

            <a href="#home" className="hover:text-gray-500 transition">
              Home
            </a>
            <a href="#about" className="hover:text-gray-500 transition">
              About
            </a>

            <a href="#project" className="hover:text-gray-500 transition">
              Products
            </a>

            <a href="#education" className="hover:text-gray-500 transition">
              Testimony
            </a>
            <a href="#contact" className="hover:text-gray-500 transition">
              Members
            </a>
            <a href="#contact" className="hover:text-gray-500 transition">
              Contact
            </a>
            {/* Social Icons */}
            <a
              href="https://www.youtube.com/channel/UCgRm4YfHCbr2v4gc3pHDOuA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition text-xs"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition text-xs"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/inDoors-Group"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition text-xs"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/company/106501586/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition text-xs"
            >
              <FaLinkedinIn />
            </a>
          </div>
        )}
        {/* Mobile Menu Button */}
        {isMobileView && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 text-lg hover:text-gray-500 transition"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>
      {/* Mobile Menu Dropdown */}
      {isMobileView && isMobileMenuOpen && (
        <div className="bg-[#FAFAFC] px-6 py-4 text-center">
          <a
            href="#home"
            className="block text-gray-900 py-2 text-sm hover:text-gray-500 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block text-gray-900 py-2 text-sm hover:text-gray-500 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#project"
            className="block text-gray-900 py-2 text-sm hover:text-gray-500 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#education"
            className="block text-gray-900 py-2 text-sm hover:text-gray-500 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Education
          </a>
          <a
            href="#contact"
            className="block text-gray-900 py-2 text-sm hover:text-gray-500 transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 mt-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition text-xs"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition text-xs"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition text-xs"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition text-xs"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
