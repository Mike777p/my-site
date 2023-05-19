import NavBar from "../Components/NavBar"
import TechnicalHeader from "../Components/TechnicalHeader"
import Skills from "../Components/Skills"
import Certifications from "../Components/Certifications"
import JobExperience from "../Components/WorkExperience"
import ProjectTiles from "../Components/ProjectTiles"
import Footer from "../Components/Footer"
import { ToastContainer } from 'react-toastify';

const TechnicalPage = () => {
    return (<>
        <NavBar/>
        <ToastContainer/>
        <TechnicalHeader/>
        <ProjectTiles/>
        <Skills/>
        <Certifications/>
        <JobExperience/>
        <Footer/>
    </>
    )
}

export default TechnicalPage