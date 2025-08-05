import { NavLink } from "react-router-dom";
import Profile from "../components/Profile"

function About() {
    return (
        <div>

            <Profile />
            <div>
                <div className="text-center m-10">
                    <NavLink to="/MoreProjects">
                        <button className="bg-gray-900 text-red-500 sm:px-10 px-4 py-2 rounded-lg">More About My Projects</button>
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default About;