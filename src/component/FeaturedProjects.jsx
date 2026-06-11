import sourcexcloud from "../assets/sourcexcloud.png";
import genzastology from "../assets/genzastology.png";
import foodyGo from "../assets/foodyGo.png";

function FeaturedProjects() {
  return (
    <section className="py-10 bg-white" id="featured-projects" id="projects">
      {/* SourceXCloud  */}
      <div className="max-w-7xl mx-auto px-2">
        {/* Heading */}
        <div className="text-center mb-5">
          {/* <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Featured Work
          </p> */}

          <h2 className="text-7xl fw-bold text-gray-900 mt-2">
            Real Client Projects
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Projects built for real businesses and clients, focusing on
            performance, SEO, responsive design, and user experience.
          </p>
        </div>

        {/* SourceXCloud */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-3xl p-4 shadow-sm">
          {/* Image */}
          <div>
            <img
              src={sourcexcloud}
              alt="SourceXCloud Website"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                Client Project
              </span>

              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                Team of 2
              </span>

              <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
                Internship
              </span>
            </div>

            <h3 className="text-3xl font-bold mb-2">SourceXCloud</h3>

            <p className="text-sm text-slate-500 mb-4">
              Frontend Developer • Next.js • SSR • SEO
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Technology solutions and education platform designed to help
              businesses adopt modern IT infrastructure while providing
              industry-relevant technical training programs.
            </p>

            {/* Contributions */}
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-3">Business Impact</h4>

              <ul className="space-y-2 text-gray-700">
                <li>✓ Developed responsive frontend interfaces</li>
                <li>✓ Implemented Server Side Rendering (SSR)</li>
                <li>✓ Improved SEO and website visibility</li>
                <li>✓ Integrated dynamic content and APIs</li>
                <li>✓ Optimized user experience across devices</li>
              </ul>
            </div>

            {/* Tech Stack */}

            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-3">Tech Stack</h4>

              <div className="flex flex-wrap gap-3">
                {["Next.js", "React", "Tailwind CSS", "SSR", "SEO"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white border rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Buttons */}

            <div className="flex gap-4">
              <a
                href="https://sourcexcloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90"
              >
                Live Website
              </a>
            </div>
          </div>
        </div>

        {/* GenzAstology */}
        <div className=" grid lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-3xl p-8 shadow-sm mt-12">
          {/* Content */}

          <div>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                Freelance Project
              </span>

              <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium">
                Solo Developer
              </span>

              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                Live Website
              </span>
            </div>

            <h3 className="text-3xl font-bold mb-2">GenzAstology</h3>

            <p className="text-sm text-slate-500 mb-4">
              Freelance Developer • WordPress • Responsive Design
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Developed a professional astrology website for a local astrologer
              to establish an online presence, improve credibility, and make
              services accessible to a wider audience beyond local referrals.
            </p>

            {/* Problem Solved */}

            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-3">Business Impact</h4>

              <ul className="space-y-2 text-gray-700">
                <li>
                  ✓ Created the client's first professional online presence
                </li>

                <li>
                  ✓ Increased accessibility across desktop, tablet, and mobile
                  devices
                </li>

                <li>
                  ✓ Improved business credibility through a dedicated website
                </li>

                <li>
                  ✓ Built a scalable foundation for SEO and digital marketing
                </li>

                <li>
                  ✓ Helped the client expand beyond word-of-mouth referrals
                </li>
              </ul>
            </div>

            {/* Tech Stack */}

            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-3">Tech Stack</h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "WordPress",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Responsive Design",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white border rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://genzastrology.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90"
              >
                Live Website
              </a>
            </div>
          </div>

          {/* Image */}

          <div>
            <img
              src={genzastology}
              alt="GenzAstology Website"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Foody Go */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 rounded-3xl p-8 shadow-sm mt-12">
          {/* Image */}

          <div>
            <img
              src={foodyGo}
              alt="FoodyGo"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>

          {/* Content */}

          <div>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                Technical Showcase
              </span>

              <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-medium">
                Solo Project
              </span>

              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
                Live Demo
              </span>
            </div>

            <h3 className="text-3xl font-bold mb-2">Foody Go</h3>

            <p className="text-sm text-slate-500 mb-4">
              Technical Showcase • Next.js • TypeScript
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              A modern e-commerce storefront built to strengthen my frontend
              development skills and explore how large-scale web applications
              manage products, state, user interactions, and responsive layouts.
            </p>

            {/* Technical Highlights */}

            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-3">
                Technical Highlights
              </h4>

              <ul className="space-y-2 text-gray-700">
                <li>✓ Built reusable React and Next.js components</li>

                <li>
                  ✓ Implemented responsive layouts for mobile, tablet and
                  desktop
                </li>

                <li>✓ Structured scalable component architecture</li>

                <li>✓ Improved frontend performance with Next.js</li>

                <li>✓ Practiced production deployment workflows</li>
              </ul>
            </div>

            {/* Tech Stack */}

            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-3">Tech Stack</h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "Responsive Design",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white border rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://e-commerce-5xzd.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/Kareena2070/foodyGo"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black px-6 py-3 rounded-xl hover:bg-gray-200 hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;
