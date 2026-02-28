
import './component/skills.css'
  import profile from './assets/profile.jpeg'
  import Navbar from './component/navbar'
  import HeroSection from './component/hero'
  import SkillSection from './component/skills'
  import ProjectSection from './component/project'
  import Experience from './component/experience'
  import Contact from './component/contact'

  // import ContactForm from './component/emailjs'
 

function App() {


  return (
    <>
    <Navbar/>
    <HeroSection
    img ={profile}
    />
    <SkillSection/>
    <ProjectSection/>
    <Experience/>
    <Contact/>


    {/*   Emailjs code */}

      {/* <ContactForm/> */}
     
    </>
  )
}

export default App
