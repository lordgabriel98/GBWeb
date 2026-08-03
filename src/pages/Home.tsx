import Hero from '../components/Hero';
import Projects from '../components/Projects'

function Home(){

    return (
        <>        
        <Hero />
        <div className="mx-auto my-1 h-px max-w-6xl bg-slate-200"></div>
        
        <Projects />
        </>

    )

}

export default Home