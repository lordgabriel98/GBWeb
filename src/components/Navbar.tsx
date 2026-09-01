import { NavLink } from "react-router-dom";

import {useState} from "react";

import { MdOutlineWbSunny } from "react-icons/md";

import { PiMoonStars } from "react-icons/pi";

import { IoMenu, IoClose } from "react-icons/io5";


function Navbar(){

    const [darkMode, setDarkMode] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

     const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-teal-600 dark:text-teal-400"
            : "text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400";

    function toggleDark(){

        setDarkMode(prev => {
        const newMode = !prev;

        document.documentElement.classList.toggle("dark", newMode);

        return newMode;
    });
    }

    return (
        <nav className="border-b border-gray-200  
                relative flex flex-col sm:flex-row items-center justify-between 
                px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-5 gap-4">
            <div className="text-xl font-bold">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-purple-500" />

                <div className="flex items-center justify-between">
                 <span style={{
                    backgroundImage: "linear-gradient(90deg, #0d9488, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",}}><a href="/">Gabriel Baje</a></span>

                     <button onClick={toggleDark}
                    className="block md:hidden p-2 rounded-lg text-slate-600 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    aria-label="Toggle dark mode">{darkMode ? <MdOutlineWbSunny /> : <PiMoonStars />}
                </button>  
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium pt-4">

                    <NavLink to="/" end className={navLinkClass}>
                        Home
                    </NavLink>

                    <NavLink to="/projects" className={navLinkClass}>
                        Projects
                    </NavLink>

                    <NavLink to="/about" className={navLinkClass}>
                        About
                    </NavLink>

                    <NavLink to="/resume" className={navLinkClass}>
                        Resume
                    </NavLink>

                    <NavLink to="/contact" className={navLinkClass}>
                        Contact
                    </NavLink>


                </div>
               
            </div>

            {menuOpen && (
    <div className="border-t border-slate-200 dark:border-slate-800 py-4">
        <div className="md:flex flex flex-col gap-4 text-sm">
            <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Home
            </NavLink>

            <NavLink to="/projects" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Projects
            </NavLink>

            <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                About
            </NavLink>

            <NavLink to="/resume" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Resume
            </NavLink>

            <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Contact
            </NavLink>

        </div>
    </div>
)}

            <button onClick={()=>setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300"
                aria-label="toggle naviagation menu">{menuOpen ? <IoClose />: <IoMenu />}

            </button>
            <button onClick={toggleDark}
                    className="hidden md:block p-2 rounded-lg text-slate-600 hover:bg-gray-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    aria-label="Toggle dark mode">{darkMode ? <MdOutlineWbSunny /> : <PiMoonStars />}
                </button>  

            
        </nav>
    )

} 

export default Navbar;