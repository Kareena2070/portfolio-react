
import './App.css'
import './component/skills.css'
  import profile from './assets/profile.jpeg'
  import Navbar from './component/navbar'
  import HeroSection from './component/hero'
  import SkillSection from './component/skills'
  import ProjectSection from './component/project'
  import Experience from './component/experience'
  import Contact from './component/contact'
 

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
     
    </>
  )
}

export default App
