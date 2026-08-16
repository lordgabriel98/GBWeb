import Skills from "./Skills";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function SkillAndTech(){

    return(
        <section className="mx-auto px-6 py-10 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-5">

            <h4 className="text-sm text-gray-400 font-semibold mb-4 tracking-widest uppercase">Skills & Technologies</h4>

            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="flex flex-col gap-1">
                <h4>Languages</h4>
                <Skills name="Python" icon={<FaPython />} color="python"/>
                <Skills name="TypeScript" icon={<SiTypescript />} color="yellow" />
                <Skills name="JavaScript" icon={<SiJavascript />} color="slate" />
                <Skills name="PHP" icon={<FaPhp />} color="purple" />
            </div>    
            
            <div>
                <h4>Frontend</h4>
                <Skills name="React" icon={<FaReact />} color="react"/>
                <Skills name="Tailwind CSS" icon={<SiTailwindcss />} color="tailwind" />
            </div>

            <div>
                <h4>Backend</h4>
                <Skills name="Python" icon={<FaPython />} color="python"/>
                <Skills name="TypeScript" icon={<SiTypescript />} color="yellow" />
            </div>

            <div>
                <h4>Tooling</h4>
                <Skills name="Python" icon={<FaPython />} color="python"/>
                <Skills name="TypeScript" icon={<SiTypescript />} color="yellow" />
            </div>

                        
            </div>

        </section>
    );

}

export default SkillAndTech;