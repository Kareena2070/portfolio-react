
import './App.css'
import './component/skills.css'
  import profile from './assets/profile.jpeg'
  import Navbar from './component/navbar'
  import HeroSection from './component/hero'
  import SkillSection from './component/skills'
 

function App() {


  return (
    <>
    <Navbar/>
    <HeroSection
    img ={profile}
    />
    <SkillSection/>
     
    </>
  )
}

export default App
