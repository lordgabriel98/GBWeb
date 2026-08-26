import { Link } from "react-router-dom";
function Navbar(){

    return (
        <nav className="border-b border-gray-200  
        relative flex flex-col sm:flex-row items-center justify-between 
        px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-5 gap-4">
            <div className="text-xl font-bold">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-purple-500" />
                <span style={{
                    backgroundImage: "linear-gradient(90deg, #0d9488, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",}}>Gabriel Baje</span>
            </div>
            <ul className="flex gap-5 sm:gap-8 text-gray-500 text-sm font-medium">
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )

}

export default Navbar;