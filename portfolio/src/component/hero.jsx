// import "../assets/portfolio"




function HeroSection(profile){


    const container = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr", /* two equal columns */
        gap: "0",
        padding: "5rem 0",
        alignItems: "stretch", 
    }
 
 
    const box1 = {
        gridColumn: "1",
        backgroundColor: "#495057",
        textAlign: "center",
        paddingTop: "3rem",
        color: "white",
    }
    const box2 = {
        gridColumn: "1",
        textAlign: "center",
        padding: "2rem 3rem",
       
    }
    const box3 = {
        gridColumn: "2",
        gridRow: "1 / span 2",
        backgroundColor: "#6c757d",
        textAlign: "center",
        padding: "2rem 0"
    }
   
    const imgStyle = {
        width: "340px",
        height: "450px",
        borderRadius: "50%",
        objectFit: "cover",
        placeIteam : "center"
      };
 
 
    return(
        <div className="container-fluid py-5 px-10 container" style={container} id="about">
            <div style={box1}>
                <h1>Kareena Yadav</h1>
                <h3>React Developer</h3>
            </div>
            <div style={box2} >
                <p>I'm a BCA student at NavGurukul and a passionate web developer, skilled in HTML, CSS, JavaScript, Python, SQL, and Node.js.
                     I've built real-world projects like portfolio websites and interactive applications using Bootstrap, React, and DOM manipulation.
                     With a strong foundation in DSA, Git/GitHub, and version control, I'm preparing for a career as a full-stack developer.
                      My goal is to build inclusive, impactful digital solutions while working with mission-driven organizations.
                </p>
                <a className="btn btn-dark"  href="resume.pdf" target="_blank" rel="noopener noreferrer"> Check My Resume</a>
            </div>
            <div style={box3}>
                <img src={profile.img} alt="Kareena" style={imgStyle}/>
            </div>
 
 
        </div>
    );
 }
 export default HeroSection
 
 
 