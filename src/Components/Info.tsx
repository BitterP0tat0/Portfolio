import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/Components/ui/background-beams-with-collision";
import Carousel from "./Carousel";
export default function Info() {
  return (
    <div className=" mt-auto relative overflow-hidden bg-gradient-to-tr from-gray-700 via-gray-900 to-black py-16 sm:py-20 ">
      <BackgroundBeamsWithCollision className="bg-gradient-to-tr from-gray-700 via-gray-900 to-black ">
        <div className="absolute bg-cyan-300 blur-lg w-20 h-20 rounded "></div>

        <div className="flex flex-wrap absolute content-center justify-center top-0">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Hello, I am Boxuan !
          </h1>

          <main className="flex mt-10 text-center max-w-85">
            <p className="text-lg text-white flex flex-wrap">
              I am a passionate Software Engineering student with a strong
              interest in programming. Coding is not just my field of study but
              also my hobby and aspiration. In the future, my dream is to become
              an exceptional full-stack developer, capable of handling
              everything from front-end to back-end system design and
              development. I am eager to learn and explore new technologies,
              aiming to contribute to the tech world through continuous practice
              and innovation while realizing my personal goals.
            </p>
          </main>
          <section className="text-center mt-20">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              My hobbies
            </h1>
            <Carousel></Carousel>
          </section>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
