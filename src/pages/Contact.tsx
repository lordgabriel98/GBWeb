import Footer from "../components/Footer";

import { IoPaperPlaneOutline } from "react-icons/io5";

import { LuLinkedin } from "react-icons/lu";

import { HiOutlineEnvelope } from "react-icons/hi2";

import { LuGithub } from "react-icons/lu";

import {useGoogleReCaptcha} from "react-google-recaptcha-v3";

import { useState } from "react";


function Contact(){
    const {executeRecaptcha} = useGoogleReCaptcha();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

         if (!executeRecaptcha) {
        console.log("reCAPTCHA not ready");
        return;
    }

    const token = await executeRecaptcha("contact");

        
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            recaptchaToken:token,
        }

        
    
        const response = await fetch("/api/contact", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        });

        if(response.ok){
            console.log("Message sent!");
        }
    }

    return(
        <>
       <section className="mx-auto px-6 pt-24 pb-10 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-5">
            <h4 className="text-sm text-teal-700 font-semibold mb-4 tracking-widest uppercase relative">Contact</h4>
                <h2 className="text-5xl mb-10 font-bold">
                    Let's Work Together
                </h2>

                 <p className="text-gray-500 mb-10 max-w-2xl">
            Whether you're looking to hire, collaborate on a project, or simply say hello — feel free to get in touch.
        </p>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="mb-4">
            <form onSubmit={handleSubmit} className="w-full text-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block font-medium text-sm mb-4">Name</label>
                        <input id="name" name="name" type="text" className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-sm" placeholder="Your name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium text-sm mb-4">Email</label>
                        <input id="email" name="email" type="email" className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 text-sm" placeholder="Email" required />
                    </div>
                
                </div>

                <div>
                    <label htmlFor="message" className="block font-medium text-sm my-4">Message</label>
                    <textarea id="message" name="message" className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 mb-4 text-sm" rows={6} style={{ resize: "none" }} placeholder="What's on your mind?"/>
                </div>


                <button type="submit" className="bg-gradient-to-r from-[#0d9488] to-[#7c3aed] text-white px-2 py-2 rounded-lg hover:opacity-90">
                    <span className="flex items-center gap-1"><IoPaperPlaneOutline /> Send Message</span></button>
            </form>
        </div>

        <div className="flex flex-col md:px-16 lg:px-18 xl:px-20 pt-10 md:pt-0 space-y-10 w-[90%]">
            <div>
                <h4 className="text-xs text-gray-400 font-semibold mb-4 tracking-widest uppercase">Direct</h4>
                <a href="mailto:bajegabriel@gmail.com" className="text-sm text-slate-700 hover:text-teal-700 font-medium">
                    <span className="flex items-center"> <HiOutlineEnvelope className="mr-2 text-teal-500"/> bajegabriel@gmail.com</span></a>
            </div>
            <div>
                <h4 className="text-xs text-gray-400 font-semibold mb-4 tracking-widest uppercase">Elsewhere</h4>
                <div className="flex flex-col gap-5">
          <a href="https://github.com/lordgabriel98/">
            <span className="flex items-center text-gray-600 text-sm space-x-2 hover:text-slate-900"><LuGithub className="mr-2"/> GitHub </span>
          </a>
          <a href="https://www.linkedin.com/in/gabriel-baje-166b571aa/">
            <span className="flex items-center text-gray-600 text-sm space-x-2 hover:text-slate-900"><LuLinkedin className="mr-2 text-purple-700"/> LinkedIn </span>
          </a>

           <div className="relative overflow-hidden border border-gray-300 px-3 rounded-lg text-sm bg-gray-100">
            <div className="absolute top-0 left-0 right-0 h-1 w-full rounded-lg" style={{ background: "linear-gradient(90deg, #0d9488, #7c3aed, #0891b2)" }} />
               
            <div className="flex flex-col">
                <p className="pt-4"><span className="text-xs uppercase tracking-wider font-medium text-sm text-gray-600 mr-20">Response Time</span></p>
                <p className="py-2"><span className="font-normal">Usually between 1-2 business days. For urgent matters, email works best.</span></p>
            </div>
            

        </div>
          </div>
            </div>
        </div>
                
        
        </div>
        </section>

        


        <Footer />
        </>
    )
}

export default Contact;