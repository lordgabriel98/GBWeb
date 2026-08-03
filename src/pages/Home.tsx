import Hero from '../components/Hero';
import Projects from '../components/Projects'
import Footer from '../components/Footer';

function Home(){

    return (
        <>        
        <Hero />
        <div className="mx-auto my-1 h-px max-w-6xl bg-slate-200"></div>
        
        <Projects />
        <Footer />
        </>
        

    )

}

export default Home