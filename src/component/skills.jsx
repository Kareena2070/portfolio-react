


// function SkillSection(){

    

//     return(
//         <div className='skills' id="skills">
//             <div className='skill-heading'>
//             <h1>Skills & Technologies </h1>
//             </div>
//             <div className='skill-item'>
//                 <div className='item-heading'>Frontend</div>
//                 <div className='button'>
//                     <button>HTML5</button>
//                     <button>CSS3</button>
//                     <button>JavaScript</button>
//                     <button>Bootstrap</button>
//                     <button>React</button>
//                 </div>
//             </div>
//             <div className='skill-item'>
//                 <div className='item-heading'>Backend</div>
//                 <div className='button'>
//                 <button>Python</button>
//                 <button>PostgreSQL</button>
//                 </div>
//             </div>
//             <div className='skill-item'>
//                 <div className='item-heading'>Tools & Others</div>
//                 <div className='button'>
//                     <button>Git</button>
//                     <button>GitHub</button>
//                     <button>VS Code</button>
//                     <button>Canvas</button>
//                 </div>
//             </div>

//         </div>

        
//     );
// }

// export default SkillSection

function SkillSection() {
    const skills = {
      Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React"],
      Backend: ["Python", "PostgreSQL"],
      "Tools & Others": ["Git", "GitHub", "VS Code", "Canvas"],
    };

  
    return (
      <div className="skills" id="skills">
        <div className="skill-heading">
          <h1>Skills & Technologies</h1>
        </div>
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-item" key={category}>
            <div className="item-heading">{category}</div>
            <div className="button">
              {items.map((item) => (
                <button key={item}>{item}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default SkillSection;
  