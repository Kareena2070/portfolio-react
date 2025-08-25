
import calculator from '../assets/calculator.png'
import todo from '../assets/todo-app.png'
import counter from  '../assets/counter.png'

function ProjectSection(){

    const projects = [
        {
          title: "React Counter App",
          description: "Interactive counter app demonstrating React state management with live text input updates.",
          techStack: "React, Bootstrap, JavaScript",
          image: counter,
          github: "https://github.com/Kareena2070/min-React-task/tree/main/task-3(counter-app%26text-live)/react-file",
          demo: "https://guileless-youtiao-6c07d1.netlify.app/"
        },
        {
          title: "React To-Do App",
          description: "A to-do list app with add, delete, and mark-as-done features using React state management.",
          techStack: "React, Bootstrap, JavaScript",
          image: todo,
          github: "https://github.com/Kareena2070/min-React-task/tree/main/task-6-todos-list/react-min-project",
          demo: "https://neon-puffpuff-e303ec.netlify.app/"
        }, 
        {
            title: "JavaScript Calculator",
            description: "A basic calculator built with pure JavaScript and DOM manipulation. Supports arithmetic operations and dynamic UI creation with styled buttons.",
            techStack: "HTML, CSS, JavaScript (DOM)",
            image: calculator,
            github: "https://github.com/Kareena2070/HTML-CSS-min-projec/tree/main/calculator",
            demo: "https://funny-praline-1c147d.netlify.app/"
        },

      ];

      const dispaly ={
        marginTop: "4rem",
      }
      

    return(
      <>
      <div style={dispaly} className='container' >
        <h1 className='text-center my-4'>Projects</h1>
        <div className='row'>
          {projects.map((project, index) => (
            <div className='col-md-4'>
                <div className='card h-100 shadow-lg' >
                  <img src={project.image} alt={project.title} />
                  <div className='card-body'>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <h6>Tech Stack: {project.techStack}</h6>
                      <a href={project.demo} target='blank ' className='btn btn-dark'>Live Demo </a>
                      <a href={project.github} target='blank ' className='btn btn-dark m-1' >GitHub</a>
                      
                  </div>

                </div>
            </div>
          ))}
        </div>
      </div>
      </>
      
    );
}

export default ProjectSection