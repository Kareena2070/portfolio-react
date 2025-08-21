
// import './App.css'
  import Navbar from './component/navbar'
  import HeroSection from './component/hero'
  import profile from './assets/profile.jpeg'

function App() {


  return (
    <>
    <Navbar/>
    <HeroSection
    img ={profile}
    />
     
    </>
  )
}

export default App
