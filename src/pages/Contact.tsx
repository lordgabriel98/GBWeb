import Footer from "../components/Footer";

import {Html, Button} from "react-email";

function Contact(){
    return(
        <>
       <section className="mx-auto px-6 py-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-5">
            <h4 className="text-sm text-teal-700 font-semibold mb-4 tracking-widest uppercase relative">Contact</h4>
                <h2 className="text-5xl mb-10 font-bold">
                    Let's Work Together
                </h2>

                 <p className="text-gray-500 mb-10 max-w-2xl">
            Whether you're looking to hire, collaborate on a project, or simply say hello — feel free to get in touch.
        </p>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2">
        <div>
            <form className="w-full text-slate-700 max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block font-medium text-sm mb-4">Name</label>
                        <input id="name" name="name" type="text" className="w-full rounded-lg border border-gray-300 px-4 py-3" placeholder="Your name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium text-sm mb-4">Email</label>
                        <input id="email" name="email" type="email" className="w-full rounded-lg border border-gray-300 px-4 py-3" placeholder="Email" required />
                    </div>
                
                </div>

                <div>
                    <label htmlFor="message" className="block font-medium text-sm my-4">Message</label>
                    <textarea id="message" name="message" className="w-full rounded-lg border border-gray-300 px-4 py-3" placeholder="What's on your mind?"/>
                </div>
            </form>
        </div>
        </div>
        </section>

        


        <Footer />
        </>
    )
}

export default Contact;