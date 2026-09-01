import Technologies from "./Technologies";
import type {TechnologyProps} from "./Technologies";


interface MyProjectProps{
    year: string;
    title: string
    description: string
    technologies: TechnologyProps[];
}



function Project({year, title, description, technologies}: MyProjectProps){
    
    return(
        <div className="bg-gray-200 w-full rounded-lg px-5 py-10 border-1 border-slate-300">

            <p className="text-xs mb-4">{year}</p>

            <h3 className="mb-4">{title}</h3>

            <p className="text-gray-700 text-sm">{description}</p>

            <div className="flex flex-wrap gap-2 mt-6">
                {technologies.map((tech)=>(
                    <Technologies
                        key={tech.name}
                        name={tech.name}
                        icon={tech.icon}
                        color={tech.color}
                    />
                ))}
            </div>

        
        </div>
    )
    
}

export default Project