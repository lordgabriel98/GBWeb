import Project from './Project';
import { IoLogoJavascript } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { SiBootstrap } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

import {motion} from "motion/react";

const divVariants = {hidden: {opacity: 0},
                    show: {
                        opacity: 1,
                        transition:{
                            staggerChildren:0.25,
                        },
                    },
                }
const projectVariants = {hidden:{opacity:0}, show:{opacity:1}}


function Projects(){

    return(<div className='mx-auto flex flex-col'>
        
        <motion.div variants={divVariants} initial="hidden" animate="show" className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-5">
            
            <motion.div variants={projectVariants}>
            <Project year="2025" title="ICTMS" 
                description="Job ticketing and task allocation system for the RPNGC ICT Directorate."
                technologies={[
                    {name: "Express.js",
                        icon: <IoLogoJavascript />
                    , color: "yellow"
                    },
                    {name: "Node.js",
                        icon: <FaNodeJs />
                        ,color: "green"
                    },
                    {name: "MySQL",
                        icon: <SiMysql />
                    ,color: "blue"
                    }
                ]}/>
                </motion.div>

            <motion.div variants={projectVariants}>
            <Project year="2026" title="Client Information Centre" 
                description="Data management software for tracking application and awards for Australia Awards PNG."
                technologies={[
                    {name: "Laravel",
                        icon: <FaLaravel />
                    ,color: "red"
                    },
                    {name: "Bootstrap",
                        icon: <SiBootstrap />
                        ,color: "purple"
                    },
                    {name: "GitHub",
                        icon: <FaGithub />
                        ,color: "slate"
                    }
                ]}/>
                </motion.div>

            <motion.div variants={projectVariants}>
            <Project year="2024" title="PNGRO Website"
                description="Official website for Papua New Guinea Outreach Inc."
                technologies={[
                    {name: "PHP",
                        icon: <SiPhp />
                        ,color: "purple"
                    },
                    {name: "HTML5",
                        icon: <TiHtml5 />
                        ,color: "orange"
                    },
                    {name: "Bootstrap",
                        icon: <SiBootstrap />
                        ,color: "purple"
                    }
                ]} />
        </motion.div>
        </motion.div>
        
    </div>)
}

export default Projects

