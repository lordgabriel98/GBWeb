const colorStyles = {
    teal: "bg-teal-100 text-teal-700",
    red: "bg-red-100 text-red-700",
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
    yellow: "bg-yellow-100 text-yellow-700",
    slate: "bg-slate-100 text-slate-700",
    green: "bg-green-100 text-green-700",
    orange: "bg-orange-100 text-orange-700",
    black: "bg-black-100 text-black-700",
    python: "bg-blue-100 text-blue-800",
    violet: "bg-violet-100 text-violet-700",
    jupyter: "bg-orange-100 text-orange-800",
    react: "bg-blue-100 text-[#61DBFB]",
    tailwind: "bg-gray-100 text-[#4c1d95]",
    sky: "bg-sky-100 text-sky-700"
};

export interface SkillsProps{
    name: string
    icon: React.ReactNode
    color: keyof typeof colorStyles
}

function Skills({name, icon, color}: SkillsProps){

    return(
        <div>
            <div className={`flex flex-wrap items-center gap-2 rounded-full px-3 py-1 text-sm mt-2 ${colorStyles[color]}`}>
            {icon}
        <span>
            {name}
        </span>

        </div>
            
        </div>
    );
}

export default Skills