import './App.css'
import Navbar from "./components/Navbar"
import About from './pages/About'
import Home from "./pages/Home"
import {Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'


function App() {
 
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-700 dark:text-white transition-colors duration-300">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

   
    </div>
    
)}

export default App
