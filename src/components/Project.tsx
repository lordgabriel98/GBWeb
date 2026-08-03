interface MyProjectProps{
    year: string;
    title: string
    description: string
}

function Project({year, title, description}: MyProjectProps){
    
    return(
        <div className="bg-gray-200 w-1/3 rounded-lg px-5 py-10 border-1 border-slate-300">

            <p className="text-xs mb-4">{year}</p>

            <h3 className="mb-4">{title}</h3>

            <p className="text-gray-700 text-sm">{description}</p>
        
        </div>
    )
    
}

export default Project