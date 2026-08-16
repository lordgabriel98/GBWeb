import Footer from "../components/Footer";
import Summary from "../components/Summary";

function About(){
        return(
        <>
         <section className="mx-auto px-6 py-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-5">
            <h4 className="text-sm text-teal-700 font-semibold mb-4 tracking-widest uppercase relative">About</h4>
                <h2 className="text-5xl mb-10 font-bold">
                    A bit about me.
                </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-15">
                <div>

                    <p className="text-black-500 max-w-2xl mb-5">
                        I'm Gabriel Baje, software developer based in Port Moresby. I've spent the last six years building web applications and developer tools. 
                    </p>
                    
                    
                    <p className="text-gray-500 max-w-2xl mb-5">
                        My work spans the full stack - from console-based applications to fully functioning user-interfaces with accompanying databases. I care deeply about performance, accessibility, and the craft of writing code that other developers enjoy reading.
                    </p>

                    <p className="text-gray-500 max-w-2xl mb-5">
                        I hold a Bachelor's degree in Mathematics and Computing Science from Divine Word University. I've also worked on projects involving web development, data analysis, statistical visualization, and information management systems.
                    </p>

                    <p className="text-gray-500 max-w-2xl">
                        Outside of work, I'm usually exploring new technologies, working on personal projects, reading, or learning something new.
                    </p>

                </div>
                

                <div>

                <Summary />
                

                </div>
              

              
            </div>

        </section>
        
        <Footer />
        </>
    )
}

export default About;