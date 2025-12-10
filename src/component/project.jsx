
import worldCountriesData from '../assets/worldCountriesData.png'
import calculator from '../assets/calculator.png'
import galleryHive from '../assets/galleryHive.png'
import todo from '../assets/todo-app.png'
import savorySpace from "../assets/savorySpace.png";
import lazarev from '../assets/lazarev.png'

import loveQuiz from '../assets/doYouLove.png'

function ProjectSection(){

    const projects = [

      {
        title: "SavorySpace - Recipe App",
        description: "A dynamic recipe management app where users can add, view, and save unique recipes. Features login/signup, API-based storage, and a responsive UI built using DOM manipulation.",
        techStack: "HTML, CSS, JavaScript,React, SheetDB API",
        image: savorySpace, 
        github: "https://github.com/Kareena2070/SavorySpace-recipeApp.git", 
        demo: "https://savoryspace.netlify.app/" 
      },

       {
            title: "Lazarev",
            description: "Implemented interactive animations with vanilla JS and GSAP (hover nav, marquee carousel). Improved UX with accessible details toggles, hover-follow parallax images, and progressive reveals. Added multimedia interactions: clickable showreel and hover-autoplay portfolio videos.",
            techStack: "HTML, CSS, JavaScript (DOM)",
            image: lazarev,
            github: "https://github.com/Kareena2070/HTML-CSS-min-projec/tree/main/calculator",
            demo: "https://lazarev-k.netlify.app"
        },

        {
          title: "World Countries Data Visualization",
          description: "Interactive web app displaying 250+ countries with search and sort by name, capital, or population. Features dynamic country cards and population bar charts using JavaScript, HTML, CSS, and Chart.js.",
          techStack: "JavaScript DOM manipulation, HTML, CSS, and Chart.js",
          image: worldCountriesData,
          github: "https://github.com/Kareena2070/Countries-data",
          demo: "https://kareena2070.github.io/Countries-data/"
          
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
          title: "GalleryHive - Interactive Image Gallery",
          description: "A dynamic web app for uploading, categorizing, and viewing images in a Pinterest-style gallery. Features include user authentication, search, category creation, and responsive Masonry layout for seamless browsing.",
          techStack: "HTML, CSS, JavaScript, LocalStorage, Font Awesome",
          image: galleryHive,
          github: "https://github.com/Kareena2070/GalleryHive",
          demo: "https://kareena2070.github.io/GalleryHive/"
        },
       

        {
          title: "Interactive Love Quiz Web App",
          description: "A playful multi-page web app where users navigate through a series of 'Yes/No' questions to reveal a fun love message. Each page displays unique animations and prompts, creating an engaging interactive experience.",
          techStack: "HTML, CSS, JavaScript, WebP images",
          image: loveQuiz,
          github: "https://github.com/Kareena2070/project-do-you-love-me-",
          demo: "https://kareena2070.github.io/project-do-you-love-me-/"
        }

      ];

    return(
      <>
      <div className='container my-5' id='projects' data-aos="zoom-in">
        <h1 className='text-center my-4'>Projects</h1>
        <div className='row'>
          {projects.map((project, index) => (
            <div className='col-md-4 pt-4'key={index}>
                <div className='card h-100 shadow-lg pt-2' >
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
