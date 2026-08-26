import React, { useState, useEffect, useRef } from "react";
import Projects from "./Projects";
import About from "./About";
import Experience from "./Experience";
// Visual anchors and social vectors
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCodepen,
  FaGoodreads,
  FaEnvelope,
} from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";


// --- STATIC DATA PATTERNS MATCHING BRITTANYCHIANG.COM ---
// Data structures for experience, projects, and writing can be found
// in the full implementation linked in.


const WRITING_DATA = [
  /* ... */
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const isMoving = useRef(false);

  // Custom mouse flashlight effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isMoving.current) {
        window.requestAnimationFrame(() => {
          setCoords({ x: e.clientX, y: e.clientY });
          isMoving.current = false;
        });
        isMoving.current = true;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Date
  const currentDate = new Date().getFullYear();

  // Monitor element scrolling intersection bounds
  useEffect(() => {
    const sectionIds = ["about", "experience", "projects", "writing"];
    const observers = [];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Focus tracking core area window
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };


    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen bg-[#0f172a] text-[#94a3b8] antialiased selection:bg-teal-300 selection:text-teal-900 transition-colors duration-500 relative"
      style={{
        background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(29, 78, 216, 0.12), transparent 80%), #0f172a`,
      }}
    >
      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* --- SIDEBAR PERSISTENT COLUMN --- */}
          <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#e2e8f0] sm:text-5xl">
                <a href="/">Hi i'm Jackson</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-[#5eead4] sm:text-xl">
                Software Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-sm text-[#94a3b8]">
                I build accessible, pixel-perfect experiences for the web.
              </p>

              {/* Navigation links with scrollspy */}
              <nav className="nav hidden lg:block mt-16 w-max">
                <ul className="flex flex-col gap-4">
                  {[
                    { id: "about", label: "ABOUT" },
                    { id: "experience", label: "EXPERIENCE" },
                    { id: "projects", label: "PROJECTS" },
                    { id: "writing", label: "WRITING" },
                  ].map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => handleScrollToSection(item.id)}
                          className="group flex items-center py-3 text-left transition-all"
                        >
                          <span
                            className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                              isActive
                                ? "w-16 bg-[#e2e8f0]"
                                : "w-8 bg-[#64748b] group-hover:w-16 group-hover:bg-[#e2e8f0]"
                            }`}
                          />
                          <span
                            className={`text-xs font-bold tracking-widest transition-all motion-reduce:transition-none ${
                              isActive
                                ? "text-[#e2e8f0]"
                                : "text-[#64748b] group-hover:text-[#e2e8f0]"
                            }`}
                          >
                            {item.label}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Sticky Footnote Social Icons */}
            <div className="ml-1 mt-8 flex items-center gap-5 text-xl">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#5eead4] text-[#94a3b8] transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#5eead4] text-[#94a3b8] transition-colors"
                aria-label="GitHub"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#5eead4] text-[#94a3b8] transition-colors"
                aria-label="GitHub"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#5eead4] text-[#94a3b8] transition-colors"
                aria-label="GitHub"
              >
                <FaEnvelope size={22} />
              </a>

              {/* ... other icons ... */}
            </div>
          </header>

          {/* --- MAIN CONTENT SECTIONS --- */}
          <main className="pt-24 lg:w-1/2 lg:py-24 flex flex-col gap-24 lg:gap-32">
            {/* ABOUT VIEW */}
            <About />

            {/* EXPERIENCE SECTION */}
            <section id="experience">
              <Experience />
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects">
              <Projects />
            </section>

            {/* WRITING SECTION */}
            <section id="writing" className="scroll-mt-24">
              <h2 className="text-sm font-bold tracking-widest text-[#e2e8f0] uppercase mb-4 lg:hidden">
                Writing
              </h2>
              {/* Mapping WRITING_DATA */}
              <p></p>
            </section>

            {/* --- CORE CLOSING SEMANTIC FOOTER --- */}
            <footer className="max-w-md pb-16 text-xs text-[#64748b] last:mb-0">
              {/* Footer content referencing technology stack */}
            <p>Developed by Jackson, built with React. All rights reserved. © {currentDate}</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
