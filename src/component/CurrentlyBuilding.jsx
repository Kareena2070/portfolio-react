function CurrentlyBuilding() {
  const items = [
    {
      title: "Advanced Next.js",
      description:
        "Learning SSR, SEO optimization, performance tuning, and scalable application architecture.",
    },
    {
      title: "Backend Development",
      description:
        "Building REST APIs using Node.js, Express.js, MongoDB, and JWT authentication.",
    },
    {
      title: "Authentication Systems",
      description:
        "Implementing secure login, registration, authorization, and protected routes.",
    },
    {
      title: "Data Structures & Algorithms",
      description:
        "Practicing problem-solving and strengthening core programming fundamentals.",
    },
    {
      title: "Full Stack Projects",
      description:
        "Creating production-ready applications with frontend, backend, and database integration.",
    },
    {
      title: "Performance & SEO",
      description:
        "Improving Core Web Vitals, accessibility, metadata, and search engine visibility.",
    },
  ];

  return (
    <section className="py-10 bg-white" id="currently-building">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-8">
          {/* <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Growth Journey
          </p> */}

          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Currently Building
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Continuously improving my frontend expertise while expanding into
            backend development, system design, and production-ready full stack
            applications.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-slate-50 p-6 rounded-2xl border hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CurrentlyBuilding;