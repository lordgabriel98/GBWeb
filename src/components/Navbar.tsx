function Navbar(){

    return (
        <nav className="border-t-4 border-teal-500 border-gray-200 border-b  
        relative flex items-center justify-between 
        px-40 py-5">
            <div className="text-xl font-bold">
                <span style={{
            backgroundImage: "linear-gradient(90deg, #0d9488, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",}}>Gabriel Baje</span>
            </div>
            <ul className="absolute left-1/2 flex -translate-x-1/2 gap-8 text-gray-500 text-sm font-medium">
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )

}

export default Navbar;