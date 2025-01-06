'use client'
import { motion } from "framer-motion"
import { PinContainer } from "./ui/3d-pin"
import { TextHoverEffect } from "./ui/text-hover-effect";
export default function About() {
    return (
        
        <div className="relative overflow-hidden bg-gradient-to-tr from-gray-700 via-gray-900 to-black py-24 sm:py-32" >
            
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-500 rounded-full opacity-50 z-30 blur-2xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full opacity-30 z-30 blur-2xl" />
            

            <div className="mx-auto max-w-5xl px-6 lg:px-8 items-center">
                <motion.div 
                    className="max-w-2xl text-center"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl"   initial={{ rotateX: 0 }}
          whileHover={{ rotateX: 40 }}  transition={{ duration: 1, ease:"easeOut"
           }}
          style={{ transformStyle: "preserve-3d" }} >
                        Welcome to My Space
                    </motion.h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Hi, I’m Boxuan Chen! A sophomore majoring in Software Engineering, passionate about full-stack development.
                    </p>
                </motion.div>
               
                <div className="mt-16 flex flex-wrap justify-center gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    > 
                        <PinContainer
                            title="Linkedin site"
                            href="https://www.linkedin.com/in/boxuan-chen-498886303"
                        >
                        
                            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg">
                                <h3 className="font-bold text-xl text-white">
                                    My Linkedin
                                </h3>
                                <p className="mt-2 text-sm text-gray-200">
                                    Connect with me on Linkedin to explore my professional journey.
                                </p>
                                <img
  src="/image/Linkedin.svg"  
  alt="LinkedIn Logo"
  width={200}
  height={200}
/>
                            </div>
                        </PinContainer>
                     
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <PinContainer
        title="My Github"
        href="https://github.com/BitterP0tat0"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] bg-gradient-to-tr from-purple-300 to-yellow-300 rounded-lg shadow-lg">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Github site
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Check my github for seeing the learning progress of a Junior Programmer
            </span>

            <img
  src="/image/Github.svg"  
  alt="Git Logo"
  width={200}
  height={200}
/>
          </div>
         
        </div>
      </PinContainer>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-6"

                    >
                        <PinContainer
                            title="Instagram"
                            href="https://www.instagram.com/boxuanmark/profilecard/?igsh=cHd6aGVqNDU0NDMz"
                        >
                            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem] bg-gradient-to-br from-green-400 via-lime-500 to-yellow-500 rounded-lg shadow-lg " >
                                <h3 className="font-bold text-xl text-white">
                                    My Instagram
                                </h3>
                                <p className="mt-2 text-sm text-gray-200">
                                    Explore my life through my Insta
                                </p>

                                <img
  src="/image/Insta.svg"  
  alt="Insta Logo"
  width={200}
  height={200}
/>
                            </div>
                        </PinContainer>

                        
                    </motion.div>
   
                   

                </div>
                
            </div> 
            <div className="mx-auto mt-10 w-80 h-40 flex items-center justify-center">
    <TextHoverEffect text="BOXUAN" />
</div>
        </div>
       
    )
}
