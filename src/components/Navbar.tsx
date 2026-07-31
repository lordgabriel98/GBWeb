function Navbar(){

    return (
        <nav className="relative flex items-center justify-between px-8 py-5">
            <div className="text-xl font-bold">
                Gabriel Baje
            </div>
            <ul className="absolute left-1/2 flex -translate-x-1/2 gap-8">
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