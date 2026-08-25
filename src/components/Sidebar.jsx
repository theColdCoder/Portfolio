import React, { useState, useEffect } from "react";
// Import the required Font Awesome icons from react-icons
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6"; // Note: X/Twitter uses FaXTwitter now
import {
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaInstagram as InstagramIcon,
  FaXTwitter as TwitterIcon,
} from "react-icons/fa6";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  // Sample sections to simulate scroll tracking
  const sections = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
  ];
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Capture mouse movement to update glow coordinates
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#1e3a5f] text-[#94a3b8] font-sans antialiased selection:bg-teal-300 selection:text-teal-900"
      style={{
        // Inline styles create a dynamic radial glow mask centered exactly on the cursor
        background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(29, 78, 216, 0.15), transparent 80%), #0f172a`,
      }}
    >
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Sidebar Component */}
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Title & Headline */}
              <h1 className="text-4xl font-bold tracking-tight text-[#e2e8f0] sm:text-5xl">
                <a href="/">
                  Hi, I'm <span className="text-[#e2e8f0]">Jackson</span>
                </a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-[#5eead4] sm:text-xl">
                Software Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-sm text-[#94a3b8]">
                I build accessible, pixel-perfect digital experiences for the
                web.
              </p>

              {/* Navigation Links */}
              <nav className="nav hidden lg:block mt-16 w-max">
                <ul className="flex flex-col gap-4">
                  {sections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                      <li key={section.id}>
                        <button
                          onClick={() => setActiveSection(section.id)}
                          className="group flex items-center py-3 text-left transition-all"
                        >
                          {/* Animated indicator line */}
                          <span
                            className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                              isActive
                                ? "w-16 bg-[#e2e8f0]"
                                : "w-8 bg-[#64748b] group-hover:w-16 group-hover:bg-[#e2e8f0]"
                            }`}
                          />
                          {/* Link Text */}
                          <span
                            className={`text-xs font-bold tracking-widest transition-all motion-reduce:transition-none ${
                              isActive
                                ? "text-[#e2e8f0]"
                                : "text-[#64748b] group-hover:text-[#e2e8f0]"
                            }`}
                          >
                            {section.label}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Social Icons footer */}
            <div className="ml-1 mt-8 flex items-center gap-5 text-xl">
              <a href="#" className="hover:text-[#5eead4] transition-colors">
                <i className="fab fa-github">
                  <FaGithub size={24} />
                </i>
              </a>
              <a href="#" className="hover:text-[#5eead4] transition-colors">
                <i className="fab fa-linkedin">
                  <FaLinkedin size={24} />
                </i>
              </a>
              <a href="#" className="hover:text-[#5eead4] transition-colors">
                <i className="fab fa-instagram">
                  <FaInstagram size={24} />
                </i>
              </a>
              <a href="#" className="hover:text-[#5eead4] transition-colors">
                <i className="fab fa-twitter">
                  {" "}
                  <FaXTwitter size={22} />
                </i>
              </a>
            </div>
          </header>

          {/* Main Content Area (To demonstrate scrolling) */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36"
            >
              <p className="leading-relaxed text-sm text-[#94a3b8]">
                [Your About Content Goes Here... Everything placed in this
                column will scroll normally while the sidebar stays locked in
                place on large desktop screens.]
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
