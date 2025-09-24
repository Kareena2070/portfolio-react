// import HeroSection from "./hero";
// import 
import profile from '../assets/kareena.png'

function Navbar(){
    return(
        <>        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 fs-4">
            <div className="container ">
                <div className="navbar-brand fs-1">
                    <img src={profile} alt="" className="img-fluid rounded-circle " style={{ height: "80px", width: "80px" }}/>
                    {/* <span className="fw-bold">Kareena Yadav</span> */}
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" href="#about">About</a>
                        <a className="nav-link" href="#skills">Skills</a>
                        <a className="nav-link" href="#projects">Projects</a>
                        <a className="nav-link" href="#experience">Experience</a>
                        <a className="nav-link" href="#contact">Contact</a>
                    </div>

                </div>
            </div>
        </nav>

        </>

    );
}

export default Navbar