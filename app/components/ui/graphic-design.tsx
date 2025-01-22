"use client"
import {EvervaultCardSnippet} from "@/app/snippets/evervault-card-snippet";
import { ThreeDCardExample} from "@/app/snippets/3d-card-snippet";
import {motion} from "framer-motion";



const GraphicDesign = () => {
    return (  
        <div className="text-center mx-auto p-10">
             <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold p-10 pb-4 
                bg-clip-text text-transparent bg-gradient-to-r 
                from-indigo-500 via-purple-500 to-pink-500 "
            >
               Graphic Design 
            </h1>
            <p className=" p-4 text-white">
            Stand out with custom graphic design <br /> that brings  your vision to life and elevates your brand.
            </p>

            <div className="flex flex-col md:flex-row items-center  justify-center md:mx-auto md:space-x-10">
                <motion.div
                initial={{y:100, opacity: 0}}
                animate={{y:0,  opacity: 1 }}
                className="px-10 md:px-0"
                
                >
                 <ThreeDCardExample/>  
                 

                </motion.div>

                <motion.div
                initial={{y:100, opacity: 0}}
                animate={{y:0,  opacity: 1 }}
                className="px-10 md:px-0"
                
                >
                  
                 <EvervaultCardSnippet/>

                </motion.div>

            </div>
        </div>
    );
}
 
export default GraphicDesign;
