import { useState } from "react"
import { NavLink } from "react-router-dom";

function Header() {

        const [isOpne, setIsOpen] =useState(false);

        function handleIsOpne(){
            setIsOpen(true)
        }
        function handleIsClose(){
            setIsOpen(false)
        }

    return (
        <div>
            {/* Desktop View */}
            <div className="flex justify-between bg-gray-900 text-white items-center px-10 py-5 text-2xl">
                <h1 className="text-3xl font-bold">Yahye Hassan</h1>

                <div className="sm:flex hidden items-center space-x-4">
                    <ul className="flex gap-10 items-center">

                        <NavLink to="/"> <li>Home</li> </NavLink>
                        <NavLink to="/about"> <li>About</li> </NavLink>
                        <NavLink to="/contact"> <li>Contact</li> </NavLink>
                    </ul>
                </div>
                    <i style={{
                        display: isOpne === true ? "none" : ""
                    }} onClick={handleIsOpne} className="fa-solid fa-bars sm:hidden block"></i>

                    <i  style={{
                        display: isOpne === true ? "block" : ""
                    }} onClick={handleIsClose} className="fa-solid fa-x hidden"></i>
            </div>

            {/* Mobile View */}
            <div style={{
                display: isOpne === true ? "block" : ""
            }} className="hidden  items-center space-x-4 bg-gray-900 text-white -mt-[0.5px] p-4 text-2xl">
                <ul className="flex flex-col gap-10 items-center">
                    <NavLink to="/"> <li>Home</li> </NavLink>
                    <NavLink to="/about"> <li>About</li> </NavLink>
                    <NavLink to="/contact"> <li>Contact</li> </NavLink>
                </ul>

            </div>
        </div>
    )
}

export default Header