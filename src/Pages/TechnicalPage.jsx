import NavBar from "../Components/NavBar"
import TechnicalHeader from "../Components/TechnicalHeader"
import Skills from "../Components/Skills"
import Certifications from "../Components/Certifications"
import JobExperience from "../Components/WorkExperience"
import ProjectTiles from "../Components/ProjectTiles"
import Footer from "../Components/Footer"

const TechnicalPage = () => {
    return (<>
        <NavBar/>
        <TechnicalHeader/>
        <Skills/>
        <Certifications/>
        <JobExperience/>
        <ProjectTiles/>
        <Footer/>
    </>
    )
}

export default TechnicalPage