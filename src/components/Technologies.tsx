export interface TechnologyProps{
    name: string
    icon: React.ReactNode
}

function Technologies({name, icon}: TechnologyProps){

    return(
        <div className="flex flex-wrap items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 mt-2">
            {icon}
        <span>
            {name}
        </span>

        </div>
    )

}

export default Technologies;