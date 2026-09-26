import { useState, useEffect } from "react";


import {Popover, PreviewTrigger, Button} from "react-aria-components";

type Saint = {
    name: string;
    feast_day: string;
    era: string;
    patronage: string[];
    legacy: string;
    summary: string;
    image: string;
    wikipedia: string;
};

function Footer() {

    const [saints, setSaints] = useState<Saint[]>([]);

    useEffect(()=>{
        async function SaintOfTheDay(){
            
        const api = "https://acoci86.github.io/daily-saints/";
        const now = new Date();

        const key = String(now.getMonth() + 1).padStart(2, '0') + '-' +
                String(now.getDate()).padStart(2, '0');

        const res = await fetch(`${api}/api/v1/saints/${key}.json`);

        if(!res.ok){
            throw new Error(`HTTP ${res.status}`);
        }

        const day = await res.json();


        setSaints(day.saints)
    
    }

    SaintOfTheDay();
        
        }, []);

    return (
        <footer className="
            mx-auto
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
            border-t
            border-gray-200
            px-6
            sm:px-10
            md:px-16
            lg:px-24
            xl:px-40
            py-5
            mt-20
        ">
            <p className="text-sm text-gray-400 dark:text-white">
                © 2026 Gabriel Baje
            </p>

            <span className="flex items-center gap-1">

        
                <PreviewTrigger>
                    <Button className="text-sm text-gray-400 dark:text-white">Ave Christus Rex</Button>
                    
                    <Popover className="w-64 max-w-[calc(100vw-2rem)] rounded-lg border border-slate-200 bg-white p-3 shadow-lg outline-none dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/30">
                        <div className="text-xs text-slate-500 dark:text-white">
                            <div className="flex">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="#FFD700"> <path d="M19.1242 4.87571C21.5287 7.28019 20.2883 12.419 16.3537 16.3536C12.4191 20.2882 7.28025 21.5286 4.87578 19.1242C2.4713 16.7197 3.71171 11.5808 7.64631 7.64625C11.5809 3.71164 16.7198 2.47123 19.1242 4.87571Z" stroke="#FFD700" stroke-width="2.25"/> </svg><p className="ml-1 pb-2 text-sm">Saint of the day</p>
                            </div>
                            <ul className="text-[#FFD700] space-y-2">
                                {saints.map((saint) => (
                                    <li className="hover:text-amber-400" key={saint.name}>
                                        <a href="https://acoci86.github.io/daily-saints/" target="__blank"> {saint.name} </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Popover>

                </PreviewTrigger>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                >
                    <path
                        d="M12 21.29V2.70996C13.1595 2.70996 14.2715 3.17056 15.0913 3.99043C15.9112 4.8103 16.3718 5.92228 16.3718 7.08175C16.3718 8.24121 15.9112 9.35319 15.0913 10.1731C14.2715 10.9929 13.1595 11.4535 12 11.4535M5.37439 20.1971L18.6257 12.5465M5.37439 12.5464L18.6257 20.1971"
                        stroke="#D4AF37"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

            </span>

            <p className="text-sm text-gray-400 dark:text-white">
                Built with React · Tailwind CSS
            </p>

        </footer>
    );
}

export default Footer;