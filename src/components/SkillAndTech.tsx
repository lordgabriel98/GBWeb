import Skills from "./Skills";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaDartLang } from "react-icons/fa6";
import { FaRust } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";

function SkillAndTech(){

    return(
        <section className="mx-auto px-6 py-10 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-5">

            <h4 className="text-sm text-gray-400 font-semibold mb-4 tracking-widest uppercase">Skills & Technologies</h4>

            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="flex flex-col gap-1">
                <h4 className="uppercase font-semibold text-teal-700 text-sm">Languages</h4>
                <Skills name="Python" icon={<FaPython />} color="python"/>
                <Skills name="TypeScript" icon={<SiTypescript />} color="yellow" />
                <Skills name="JavaScript" icon={<SiJavascript />} color="slate" />
                <Skills name="PHP" icon={<FaPhp />} color="purple" />
                <Skills name="Dart" icon={<FaDartLang />} color="sky" />
                <Skills name="Rust" icon={<FaRust />} color="orange" />
            </div>    
            
            <div>
                <h4 className="uppercase font-semibold text-purple-700 text-sm">Frontend</h4>
                <Skills name="React" icon={<FaReact />} color="react"/>
                <Skills name="Tailwind CSS" icon={<SiTailwindcss />} color="tailwind" />
                <Skills name="Bootstrap" icon={<FaBootstrap />} color="purple" />
                <Skills name="Vite" icon={<SiVite />} color="violet" />
            </div>

            <div>
                <h4 className="uppercase font-semibold text-teal-700 text-sm">Backend</h4>
                <Skills name="Laravel" icon={<FaLaravel />} color="red"/>
                <Skills name="Node.js" icon={<FaNodeJs />} color="green" />
                <Skills name="Express.js" icon={<SiExpress />} color="yellow" />
                <Skills name="MySQL" icon={<SiMysql />} color="blue" />
            </div>

            <div>
                <h4 className="uppercase font-semibold text-purple-700 text-sm">Tooling</h4>
                <Skills name="Git" icon={<FaGitAlt />} color="orange"/>
                <Skills name="GitHub" icon={<FaGithub />} color="slate" />
                <Skills name="Linux" icon={<FaLinux />} color="yellow" />
                <Skills name="Bash" icon={<FaTerminal />} color="green" />
            </div>

                        
            </div>

        </section>
    );

}

export default SkillAndTech;