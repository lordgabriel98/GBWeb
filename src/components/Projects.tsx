import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Project from './Project';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { IoLogoJavascript } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { SiBootstrap } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

function Projects(){

    return(<div className='max-auto flex flex-col'>
            <div className="max-auto flex flex-row items-center justify-between px-50 py-10">
                
                <div className="max-w-2xl text-left">
                    <p className="text-gray-400 text-sm uppercase font-semibold">Featured Projects</p>
                </div>
                <div className="text-right">
                    <span className="text-teal-500 hover:underline"><a href="#">All Projects</a> <FontAwesomeIcon icon={faArrowRight} /></span>
                </div>
                
            </div>
        
        <div className="max-auto flex flex-row gap-10 px-40 py-5">
            <Project year="2025" title="ICTMS" 
                description="Job ticketing and task allocation system for the RPNGC ICT Directorate."
                technologies={[
                    {name: "Express.js",
                        icon: <IoLogoJavascript />
                    },
                    {name: "Node.js",
                        icon: <FaNodeJs />
                    },
                    {name: "MySQL",
                        icon: <SiMysql />
                    }
                ]}/>

            <Project year="2026" title="Client Information Centre" 
                description="Data management software for tracking application and awards for Australia Awards PNG."
                technologies={[
                    {name: "Laravel",
                        icon: <FaLaravel />
                    },
                    {name: "Bootstrap",
                        icon: <SiBootstrap />
                    },
                    {name: "GitHub",
                        icon: <FaGithub />
                    }
                ]}/>

            <Project year="2024" title="PNGRO Website"
                description="Official website for Papua New Guinea Outreach Inc."
                technologies={[
                    {name: "Php",
                        icon: <SiPhp />
                    },
                    {name: "HTML5",
                        icon: <TiHtml5 />
                    },
                    {name: "Bootstrap",
                        icon: <SiBootstrap />
                    }
                ]} />
        </div>
    
    </div>)
}

export default Projects

