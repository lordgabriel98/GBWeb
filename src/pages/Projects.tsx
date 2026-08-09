import Footer from "../components/Footer";
import ProjectSection from "../components/Projects";
import AllProjects from "../components/AllProjects";

function Projects(){
        return(
        
        <>
        <section className="mx-auto px-6 py-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-5">
            <h4 className="text-sm text-teal-700 font-semibold mb-4 tracking-widest uppercase relative">Work</h4>
            <h2 className="text-5xl mb-10 font-bold">
                Projects
            </h2>
            <p className="text-gray-500 max-w-2xl">
                A selection of things I've built — from developer tooling to production web applications.
            </p>
        </section>

        <AllProjects />

        <Footer />
        </>
        
        
    )
}

export default Projects;