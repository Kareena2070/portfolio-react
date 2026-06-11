function SkillSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, modern and SEO-friendly web applications.",
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },

    {
      title: "Backend & APIs",
      description:
        "Working with APIs, authentication and server-side integrations.",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "MongoDB",
      ],
    },

    {
      title: "Tools & Workflow",
      description:
        "Development tools used in real-world projects and collaboration.",
      skills: [
        "Git",
        "GitHub",
        "Vercel",
        "Netlify",
        "WordPress",
        "VS Code",
      ],
    },

    {
      title: "Currently Learning",
      description:
        "Technologies and concepts I am actively improving every day.",
      skills: [
        "Data Structures",
        "Algorithms",
        "System Design",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <section id="skills" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-8">
          {/* <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Skills
          </p> */}

          <h2 className="text-5xl font-bold text-gray-900 mt-2">
            Technologies & Expertise
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            A combination of frontend development, backend fundamentals,
            deployment workflows, and continuous learning through real-world
            projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-3">
                {category.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white border rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default SkillSection;