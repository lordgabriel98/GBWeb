import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Project from './Project';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

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
                description="Job ticketing and task allocation system for the RPNGC ICT Directorate."/>

            <Project year="2026" title="Client Information Centre" 
                description="Data management software for tracking application and awards for Australia Awards PNG."/>

            <Project year="2024" title="PNGRO Website"
                description="Official website for Papua New Guinea Outreach Inc." />
        </div>
    
    </div>)
}

export default Projects

