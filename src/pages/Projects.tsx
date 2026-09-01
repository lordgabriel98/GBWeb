import Footer from "../components/Footer";
import AllProjects from "../components/AllProjects";

import {motion} from "motion/react";

function Projects(){
        return(
        
        <>
        <motion.section initial={{opacity:0, y:24}} animate={{opacity:1, y:0}} transition={{duration: 0.8, ease: "easeOut"}}
             className="mx-auto px-6 pt-24 pb-10 sm:px-10 md:px-16 lg:px-24 xl:px-40">
            <h4 className="text-sm text-teal-700 font-semibold mb-4 tracking-widest uppercase relative">Work</h4>
            <h2 className="text-5xl mb-10 font-bold">
                Projects
            </h2>
            <p className="text-gray-500 max-w-2xl">
                A selection of things I've built — from developer tooling to production web applications.
            </p>
        </motion.section>

        <AllProjects />

        <Footer />
        </>
        
        
    )
}

export default Projects;