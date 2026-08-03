import Project from './Project';

function Projects(){

    return(<div className='max-auto flex flex-row gap-10 px-40 py-24'>

        <Project year="2025" title="ICTMS" 
            description="Job ticketing and task allocation system for the RPNGC ICT Directorate."/>

        <Project year="2026" title="Client Information Centre" 
            description="Data management software for tracking application and awards for Australia Awards PNG."/>

        <Project year="2024" title="PNGRO Website"
            description="Official website for Papua New Guinea Outreach Inc." />

    
    </div>)
}

export default Projects

