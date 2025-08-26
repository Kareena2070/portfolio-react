

import styles from './hero.module.css'


function HeroSection(profile){

 
    return(
        <div className={`container-fluid py-5 px-10 container ${styles.container}`}  id="about" data-aos="fade-up">
            <div className={styles.box1}>
                <h1>Kareena Yadav</h1>
                <h3>React Developer</h3>
            </div>
            <div className={styles.box2}>
                <p>I'm a BCA student at NavGurukul and a passionate web developer, skilled in HTML, CSS, JavaScript, Python, SQL, and Node.js.
                     I've built real-world projects like portfolio websites and interactive applications using Bootstrap, React, and DOM manipulation.
                     With a strong foundation in DSA, Git/GitHub, and version control, I'm preparing for a career as a full-stack developer.
                      My goal is to build inclusive, impactful digital solutions while working with mission-driven organizations.
                </p>
                <a className="btn btn-dark"  href="resume.pdf" target="_blank" rel="noopener noreferrer"> Check My Resume</a>
            </div>
            <div className={styles.box3}>
                <img src={profile.img} alt="Kareena" className={styles.imgStyle}/>
            </div>
 
 
        </div>
    );
 }
 export default HeroSection
 
 
 