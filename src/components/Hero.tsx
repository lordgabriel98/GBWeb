import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

function Hero(){

    return (
        <section className="max-auto px-40 py-24">
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

        <div className="flex flex-row items-start gap-10 mb-3">
            
                <a className="bg-gradient-to-r from-[#0d9488] to-[#7c3aed] text-white text-sm px-4 py-2 rounded-lg hover:opacity-90" href="#"> View Projects <FontAwesomeIcon icon={faArrowRight} /> </a>

                <a className="border-1 border-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-slate-50" href="#"> Get in Touch </a>
            
        </div>
        <div className="flex flex-row gap-10 py-4">
          <a href="#">
            <FontAwesomeIcon className="text-gray-500 hover:text-slate-900" icon={faGithub} />
          </a>
          <a href="#">
            <FontAwesomeIcon className="text-gray-500 hover:text-slate-900" icon={faLinkedinIn} />
          </a>

          <a href="#">
            <FontAwesomeIcon className="text-gray-500 hover:text-slate-900" icon={faEnvelope} />
          </a>
        </div>

        </section>
        
        
    );
}

export default Hero;