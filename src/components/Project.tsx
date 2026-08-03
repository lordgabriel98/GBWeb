interface MyProjectProps{
    year: string;
    title: string
    description: string
}

function Project({year, title, description}: MyProjectProps){
    
    return(
        <div className="bg-gray-200 w-1/3">

            <p className="text-sm">{year}</p>

            <h3>{title}</h3>

            <p>{description}</p>
        
        </div>
    )
    
}

export default Project