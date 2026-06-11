function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "SourceXCloud",
      duration: "2025",
      points: [
        "Developed responsive interfaces using Next.js and Tailwind CSS",
        "Implemented Server-Side Rendering (SSR) for performance and SEO",
        "Integrated dynamic content and collaborated with backend developer",
        "Delivered production-ready UI across desktop, tablet, and mobile devices",
      ],
    },

    {
      title: "Freelance Web Developer",
      company: "GenzAstology",
      duration: "2025",
      points: [
        "Worked directly with client requirements and business goals",
        "Designed and launched a fully responsive business website",
        "Established the client's first professional online presence",
        "Built a foundation for future SEO and digital marketing efforts",
      ],
    },

    {
      title: "Student Developer",
      company: "NavGurukul",
      duration: "2024 – Present",
      points: [
        "Participating in intensive software development training and peer learning",
        "Building frontend projects using React, Next.js, JavaScript, and TypeScript",
        "Practicing data structures, algorithms, Git, and collaborative development workflows",
        "Contributing to coding discussions, project reviews, and community learning initiatives",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-10 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-8">

          {/* <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Experience
          </p> */}

          <h2 className="text-4xl font-bold mt-2">
            Professional Experience
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            My journey through client projects, internships,
            freelance work, and continuous learning.
          </p>

        </div>

        {/* Timeline */}

        <div className="space-y-8">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-8 shadow-sm"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">

                <div>
                  <h3 className="text-2xl font-bold">
                    {exp.title}
                  </h3>

                  <p className="text-blue-600 font-medium">
                    {exp.company}
                  </p>
                </div>

                <span className="mt-2 md:mt-0 px-4 py-2 bg-white rounded-full border text-sm">
                  {exp.duration}
                </span>

              </div>

              <ul className="space-y-3 text-gray-700">

                {exp.points.map((point, i) => (
                  <li key={i}>
                    ✓ {point}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;