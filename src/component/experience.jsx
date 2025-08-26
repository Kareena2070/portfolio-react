// src/components/Experience.jsx
import React from "react";

function Experience() {
    const achievements = [
        {
          title: "Meta Front-End Developer Certification",
          description:
            "Pursuing Meta's certification program, covering HTML, CSS, JavaScript, React, and version control.",
          year: "2025",
        },
        {
          title: "Sprint Hackathon",
          description:
            "Built a MoneyMaze project using JavaScript DOM manipulation, Flexbox, CSS Grid, and Bootstrap during a team hackathon.",
          year: "2024",
        },
        {
          title: "NavGurukul Experience",
          description:
            "Contributed at NavGurukul by supporting peers in coding and collaborative learning projects.",
          year: "2024-present",
        },
        {
          title: "Git & GitHub Mastery",
          description:
            "Hands-on projects using Git and GitHub, gaining practical experience in version control and collaboration.",
          year: "2025",
        },

        {
            title: "Youth For Seva (YFS) - Core Volunteer (Delhi, India)",
            description:
            "Volunteered with Youth for Seva, contributing to community initiatives and student mentoring.",
            year: "2021-204"
        }
      ];

  return (
    <section className="container my-5 pt-5" id="experience"  data-aos="fade-right">
      <h1 className="text-center mb-4">Experience & Achievements</h1>
      <div className="row">
        {achievements.map((item, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card shadow-sm border-1 h-100">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <span className="btn btn-dark">{item.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
