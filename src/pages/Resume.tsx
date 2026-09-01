import { BsDownload } from "react-icons/bs";

import WorkExperience from "../components/WorkExperience";

import Education from "../components/Education";

import cv from '../assets/GabrielBaje_CV.pdf';

import Footer from "../components/Footer";

import {motion} from "motion/react";


function Resume(){
        return(
        <>
        <motion.section initial={{opacity:0, y:24}} animate={{opacity:1, y:0}} transition={{duration: 0.8, ease: "easeOut"}}
                className="mx-auto px-6 py-24 sm:px-10 md:px-16 lg:px-24 xl:px-40">
            <h4 className="text-sm text-teal-700 font-semibold mb-4 tracking-widest uppercase relative dark:text-teal-500">Resume</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:justify-between gap-4">

                <div>
                    <h2 className="text-5xl font-bold">
                        Experience & Education
                    </h2>
                </div>

                <div className="flex lg:justify-end">
                    <span className="flex items-center gap-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-50 py-2 px-2 dark:hover:bg-slate-500"> <BsDownload /> <a href={cv} download>  Download PDF</a></span>
                </div>

            </div>


        </motion.section>
        <div className="flex mx-auto lg:px-24 px-6 xl:px-40">
        <h4 className="text-sm text-gray-400 font-semibold mb-4 tracking-widest uppercase dark:text-white">Work Experience</h4>
        </div>
        <div className="mx-auto h-px max-w-6xl bg-slate-200"></div>
        
        <WorkExperience /> 
        
        <Education />


        <Footer />
        </>
    )
}

export default Resume;