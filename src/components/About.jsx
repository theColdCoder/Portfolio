function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 text-sm leading-relaxed text-[#94a3b8] flex flex-col gap-4"
    >   <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-xs font-bold tracking-widest text-[#e2e8f0] uppercase lg:hidden">
              About
            </h2>
          </div>
      <p>
      I’m a software engineer who enjoys building things and turning ideas into useful digital experiences. I have a strong interest in the intersection of design and engineering, with a focus on creating interfaces that are clean, intuitive, and enjoyable to use.

      Over the years, I’ve worked on websites and digital projects for NGOs, schools, and community organizations, taking projects from design and development through to deployment. More recently, I’ve been focused on building modern web applications.

      I enjoy learning by building, solving problems, and constantly finding better ways to turn ideas into products that people can actually use.
      </p>
    </section>
  );
}

export default About;
