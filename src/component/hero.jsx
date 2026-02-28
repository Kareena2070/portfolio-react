import styles from "./hero.module.css";

function HeroSection(profile) {
  return (
    <div
      className={`container-fluid py-5 px-10 container ${styles.container}`}
      id="about"
      data-aos="fade-up"
    >
      <div className={styles.box1}>
        <h1>Kareena Yadav</h1>
        <h4>Frontend Developer</h4>
      </div>
      <div className={styles.box2}>
        <p>
          Front-end developer with hands-on experience in React, JavaScript,
          HTML, CSS, Tailwind, Next.js, and TypeScript. Built and deployed
          multiple projects including interactive dashboards and full-featured
          web apps on Netlify and Vercel. Strong in API integration, responsive
          UI design, component-based architecture, and version control
          (Git/GitHub).Strong in API integration, responsive UI design, and
          version control (Git/GitHub) with ongoing practice in DSA using Python
          to sharpen problem-solving skills.
        </p>
        <a
          className="btn btn-dark"
          href="resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Check My Resume
        </a>
      </div>
      <div className={styles.box3}>
        <img src={profile.img} alt="Kareena" className={styles.imgStyle} />
      </div>
    </div>
  );
}
export default HeroSection;
