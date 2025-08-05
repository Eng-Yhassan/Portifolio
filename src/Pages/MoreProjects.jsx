import Projects from "../components/Projects"
import image1ofProjects from "../images/Projects/Agrivista.png"
import image2ofProjects from "../images/Projects/Bean Scene.png"
import image3ofProjects from "../images/Projects/Colck.png"
import image4ofProjects from "../images/Projects/Doctorcare.png"
import image5ofProjects from "../images/Projects/Off&On.png"
import image6ofProjects from "../images/Projects/Tasbiih.png"
import image7ofProjects from "../images/Projects/Zarrin.png"

function MoreProjects() {
    return (
        <div>
            <div className="grid sm:grid-cols-3 grid-cols-1 sm:ml-40 ml-10">
                <Projects projectImg={image1ofProjects} projectTitle="Agrivesta" />
                <Projects projectImg={image2ofProjects} projectTitle="Bean Scene" />
                <Projects projectImg={image3ofProjects} projectTitle="Colck" />
                <Projects projectImg={image4ofProjects} projectTitle="Doctorcare" />
                <Projects projectImg={image2ofProjects} projectTitle="Bean Scene" />
                <Projects projectImg={image3ofProjects} projectTitle="Colck" />
                <Projects projectImg={image5ofProjects} projectTitle="Light" />
                <Projects projectImg={image1ofProjects} projectTitle="Agrivesta" />
                <Projects projectImg={image2ofProjects} projectTitle="Bean Scene" />
                <Projects projectImg={image3ofProjects} projectTitle="Colck" />
                <Projects projectImg={image4ofProjects} projectTitle="Doctorcare" />
                <Projects projectImg={image6ofProjects} projectTitle="Tasbiih" />
            </div>
        </div>
    )
}
export default MoreProjects