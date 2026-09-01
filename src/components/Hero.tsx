import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

import { LuLinkedin } from "react-icons/lu";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuGithub } from "react-icons/lu";

import {motion} from "motion/react";

function Hero(){

    return (
        <motion.section initial={{opacity:0, y:24}} animate={{opacity:1, y:0}} transition={{duration: 0.8, ease: "easeOut"}} className="mx-auto px-6 py-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-5">
            <h4 className="text-sm text-teal-700 font-semibold mb-4 tracking-widest uppercase relative">Software Developer</h4>
            <h2 className="text-6xl mb-10 font-bold">
            Building intentional<br></br> <span style={{
            backgroundImage: "linear-gradient(90deg, #0d9488, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            software for the modern<br></br> web.
          </span>
            </h2>

        <p className="text-gray-500 mb-10 max-w-2xl">
            I'm Gabriel Baje — a software developer focused on designing systems, implementing backend solutions and data analytics. Currently open to new opportunities.
        </p>

        <div className= "flex flex-row items-start gap-10 mb-3">
            
                <Link className="bg-gradient-to-r from-[#0d9488] to-[#7c3aed] text-white text-sm px-4 py-2 rounded-lg hover:opacity-90" to="/projects"> View Projects <FontAwesomeIcon icon={faArrowRight} /> </Link>

                <Link className="border-1 border-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-slate-50" to="/contact"> Get in Touch </Link>
            
        </div>
        <div className="flex flex-row gap-10 py-4">
          <a href="https://github.com/lordgabriel98/">
            <LuGithub className="text-gray-500 hover:text-slate-900"/>
          </a>
          <a href="https://www.linkedin.com/in/gabriel-baje-166b571aa/">
            <LuLinkedin className="text-gray-500 hover:text-slate-900"/>
          </a>

          <a href="mailto:bajegabriel@gmail.com">
            <HiOutlineEnvelope className="text-gray-500 hover:text-slate-900"/>
          </a>
        </div>

        </motion.section>
        
        
    );
}

export default Hero;