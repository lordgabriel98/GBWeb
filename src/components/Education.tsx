function Education()
{
    return(
        <>
        <section className="mx-auto px-6 sm:px-5 md:px-16 lg:px-8 xl:px-20">
            <div className="flex mx-auto md:px-16 lg:px-18 xl:px-20">
                <h4 className="text-sm text-gray-400 font-semibold mb-4 tracking-widest uppercase">Education</h4>
                </div>
                <div className="mx-auto my-1 h-px max-w-6xl bg-slate-200"></div>

                <div className="grid grid-cols-1 pb-5 md:grid-cols-[1fr_4fr] lg:grid-cols-[1fr_4fr] pt-10 text-gray-500 px-10 lg:px-20">
                    <div className="space-y-4 text-sm pb-4">
                        <p>2017 - 2020</p>
                    </div>

                    <div className="space-y-4">
                        <p className="text-md">Bachelor in Mathematics and Computing Science</p>
                        <div className="flex">
                            <span className="bg-purple-100 text-purple-700 rounded-md px-2 font-semibold"><p>Divine Word University</p></span>
                        </div>
                        
                        <p className="text-sm">Awarded the Hans Erik Lang awarded for most outstanding IS/MCS student.</p>
                    </div>
                </div>
                
        </section>
        </>
    );
}

export default Education;