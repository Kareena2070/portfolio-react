function SkillSection() {
  const skills = {
    Frontend: ["HTML5", "CSS3", "JavaScript", "React", 'Next.js', 'TypeScript', 'Tailwind'],
    // Backend: [],
    "Tools & Others": ["Git", "GitHub", "VS Code", "Canvas"],
  };

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold">Skills & Technologies</h1>

        <div className="row g-4">
          {Object.entries(skills).map(([category, items]) => (
            <div className="col-md-6" key={category}>
              <div className="card border-0 shadow-sm h-100 skill-card-clean">
                <div className="card-body">
                  <h5 className="card-title text-warning fw-semibold mb-4 text-black fs-2">
                    {category}
                  </h5>

                  <div className="d-flex flex-wrap gap-3">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="badge bg-white text-dark border border-warning px-3 py-3 skill-badge-clean fs-6"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;