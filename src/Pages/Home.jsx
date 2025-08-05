import { NavLink } from "react-router-dom";
import Profile from "../components/Profile";
import Projects from "../components/Projects";

// Projects Img
import image1ofProjects from "../images/Projects/Agrivista.png"
import image2ofProjects from "../images/Projects/Bean Scene.png"
import image3ofProjects from "../images/Projects/Colck.png"
import image4ofProjects from "../images/Projects/Doctorcare.png"
import image5ofProjects from "../images/Projects/Off&On.png"
import image6ofProjects from "../images/Projects/Tasbiih.png"
import image7ofProjects from "../images/Projects/Zarrin.png"
import Seminars from "../components/Seminars";

// Seminar Img
import SeminarImage1 from "../images/seminars/Seminar1.png"
import SeminarImage2 from "../images/seminars/Seminar2.jpg"
import SeminarImage3 from "../images/seminars/Seminar3.png"
import Testimonials from "../components/Testimonials";



function Home() {
    return (
        <div>
            <Profile />


            <div className="flex items-center justify-between px-10 sm:px-40">
                <h1 className="text-3xl text-red-900">My Projects</h1>
                <NavLink to="/MoreProjects">
                    <button className="bg-gray-900 text-red-500 sm:px-10 px-4 py-2 rounded-lg">See More</button>
                </NavLink>
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 sm:ml-40 ml-12">
                <Projects projectImg={image1ofProjects} projectTitle="Agrivesta" />
                <Projects projectImg={image2ofProjects} projectTitle="Bean Scene" />
                <Projects projectImg={image3ofProjects} projectTitle="Colck" />
                <Projects projectImg={image4ofProjects} projectTitle="Doctorcare" />
                <Projects projectImg={image5ofProjects} projectTitle="Light" />
                <Projects projectImg={image6ofProjects} projectTitle="Tasbiih" />
            </div>

            <div className="flex items-center justify-between px-10 sm:px-40 mt-20">
                <h1 className="text-3xl text-red-900">seminar</h1>
                <NavLink to="/MoreSeminars">
                    <button className="bg-gray-900 text-red-500 sm:px-10 px-4 py-2 rounded-lg">See More</button>
                </NavLink>
            </div>

            <div className="grid sm:grid-cols-3 grid-cols-1 sm:ml-40 ml-12 mt30">
                <Seminars SeminarImg={SeminarImage1} SeminarTitle="lorem lorem lorem" />
                <Seminars SeminarImg={SeminarImage2} SeminarTitle="lorem lorem lorem" />
                <Seminars SeminarImg={SeminarImage3} SeminarTitle="lorem lorem lorem" />
                <Seminars SeminarImg={SeminarImage1} SeminarTitle="lorem lorem lorem" />
                <Seminars SeminarImg={SeminarImage3} SeminarTitle="lorem lorem lorem" />
                <Seminars SeminarImg={SeminarImage2} SeminarTitle="lorem lorem lorem" />
            </div>

            <div className=" text-center m-20">
                <h1 className="text-5xl text-red-900">Testimonials</h1>
            </div>
            <div className="flex sm:justify-evenly justify-between flex-wrap sm:px-20">
                <Testimonials Person="Eng Yoonis" description="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                <Testimonials Person="Eng AbdiHakiim" description="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                <Testimonials Person="Eng Muscab" description="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
                <Testimonials Person="Eng Hafsa" description="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
            </div>
        </div>
    )
}

export default Home;