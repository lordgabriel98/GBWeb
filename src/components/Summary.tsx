function Summary(){

    return(
        <div className="relative overflow-hidden border border-gray-300 px-3 rounded-lg text-sm bg-gray-100 w-full sm:w-md dark:bg-slate-500">
            <div className="absolute top-0 left-0 right-0 h-1 w-full rounded-lg" style={{ background: "linear-gradient(90deg, #0d9488, #7c3aed, #0891b2)" }} />

            <div className="flex flex-row justify-between border-b-1 border-gray-300">
                <p className="py-4"><span className="text-xs uppercase tracking-wider text-gray-600 mr-20 dark:text-white">Location</span></p><p className="py-4"><span className="font-semibold">Port Moresby, Papua New Guinea</span></p>
            </div>
            <div className="flex flex-row justify-between border-b-1 border-gray-300">
                <p className="py-4"><span className="text-xs uppercase tracking-wider text-gray-600 mr-20 dark:text-white">Status</span></p><p className="py-4"><span className="bg-teal-100 text-teal-800 py-1 px-1 rounded-lg font-semibold">Open to work</span></p>
            </div>
            <div className="flex flex-row justify-between border-b-1 border-gray-300">
                <p className="py-4"><span className="text-xs uppercase tracking-wider text-gray-600 mr-20 dark:text-white">Experience</span></p><p className="py-4"><span className="font-semibold">5+ years</span></p>
            </div>
            <div className="flex flex-row justify-between">
                <p className="py-4"><span className="text-xs uppercase tracking-wider text-sm text-gray-600 mr-20 dark:text-white">Focus</span></p><p className="py-4"><span className="font-semibold">Software / Web / Data</span></p>
            </div>
            

        </div>
    );

}

export default Summary;