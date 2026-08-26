import  EXPERIENCE_DATA from "./eData";
import { FiArrowUpRight } from "react-icons/fi";

function Experience() {
  return (
     <section id="experience" className="scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-xs font-bold tracking-widest text-[#e2e8f0] uppercase lg:hidden">
              Experience
            </h2>
          </div>
    
          <div className="flex flex-col gap-12 group/list">
            {EXPERIENCE_DATA.map((project) => (
              <div
                key={project.id}
                className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50"
              >
                {/* Background glow tile on hover */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#1e293b]/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
    
                {/* Left column: Thumbnail representation */}
                <div className="flex gap-5 flex-col z-10 mb-2 mt-1 sm:col-span-2 text-sm font-semibold tracking-wide text-[#64748b]">
                  <span>{project.date}</span>
    
                  <div className="w-24 h-14 rounded border border-[#64748b]/20 bg-[#1e293b] flex items-center justify-center text-[10px] text-[#64748b] tracking-wider uppercase font-bold">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.thumbnailAlt}
                        className="h-full w-full rounded object-cover"
                      />
                    ) : (
                      project.thumbnailText
                    )}
                  </div>
                </div>
    
                {/* Right column: Content details */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-[#e2e8f0]">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-[#e2e8f0] hover:text-[#5eead4] focus-visible:text-[#5eead4] group/link text-base"
                        href={project.projectUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="absolute -inset-x-4 -inset-y-4 hidden rounded md:block lg:-inset-x-6 lg:-inset-y-6" />
                        <span className="inline-block">
                          {project.title}
                          <FiArrowUpRight
                            className="inline-block ml-1 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                            size={14}
                          />
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-[#94a3b8]">
                    {project.description}
                  </p>
                  <ul
                    className="mt-4 flex flex-wrap gap-2"
                    aria-label="Technologies used"
                  >
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-[#5eead4]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }

export default Experience;
