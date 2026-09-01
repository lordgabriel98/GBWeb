import Hero from '../components/Hero';
import Projects from '../components/Projects'
import Footer from '../components/Footer';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';

function Home(){

    return (
        <>        
        <Hero />
        <div className="mx-auto my-1 h-px max-w-6xl bg-slate-200"></div>
         <div className="flex flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-5">
                
                <div className="max-w-2xl text-left">
                    <p className="text-gray-400 text-sm uppercase font-semibold dark:text-white">Featured Projects</p>
                </div>
                <div className="text-right">
                    <span className="text-teal-500 hover:underline"><Link to="/projects">All Projects</Link> <FontAwesomeIcon icon={faArrowRight} /></span>
                </div>
                
            </div>
        
        <Projects />
        <Footer />
        </>
        

    )

}

export default Home