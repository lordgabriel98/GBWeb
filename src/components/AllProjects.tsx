import Project from './Project';
import { IoLogoJavascript } from "react-icons/io5";
import { FaLaravel } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { SiBootstrap } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { SiNumpy } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { SiPandas } from "react-icons/si";

function AllProjects(){

    return(<div className='mx-auto flex flex-col'>
        
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-5">
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

            <Project year="2024" title="PNGRO Website"
                description="Official website for Papua New Guinea Outreach Inc."
                technologies={[
                    {name: "PHP",
                        icon: <SiPhp />
                        ,color: "violet"
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
                <Project year="2024" title="NOSS 2023"
                description="Jupyter notebook file used to analyze the NOSS data for 2023"
                technologies={[
                    {name: "Python",
                        icon: <FaPython />
                        ,color: "python"
                    },
                    {name: "NumPy",
                        icon: <SiNumpy/>
                        ,color: "orange"
                    },
                    {name: "Matplotlib",
                        icon: <LuChartNoAxesCombined />
                        ,color: "violet"
                    }
                ]} />
                
                <Project year="2023" title="PLTable"
                description="A Python program to fetch the Premier League table to the terminal."
                technologies={[
                    {name: "Python",
                        icon: <FaPython />
                        ,color: "python"
                    },
                    {name: "Pandas",
                        icon: <SiPandas />
                        ,color: "black"
                    },
                    {name: "HTML5",
                        icon: <TiHtml5 />
                        ,color: "orange"
                    }
                ]} />
                
                <Project year="2025" title="PNG Scholars"
                description="Statistical analysis and data visualization for PNG Scholars research."
                technologies={[
                    {name: "Python",
                        icon: <FaPython />
                        ,color: "python"
                    },
                    {name: "Jupyter",
                        icon: <SiJupyter />
                        ,color: "jupyter"
                    },
                    {name: "Pandas",
                        icon: <SiPandas />
                        ,color: "black"
                    }
                ]} />
        </div>
    
    </div>)
}

export default AllProjects;