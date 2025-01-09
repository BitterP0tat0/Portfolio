"use client";

import { BackgroundBeamsWithCollision } from "@/Components/ui/background-beams-with-collision";
import Carousel from "./Carousel";
export default function Info() {
  return (
    <div className=" mt-auto my-auto relative overflow-hidden bg-gradient-to-tr from-gray-700 via-gray-900 to-black py-16 sm:py-20 h-[100vh]">
      <BackgroundBeamsWithCollision className="bg-gradient-to-tr from-gray-700 via-gray-900 to-black opacity-80 my-auto h-screen ">
        <div className="absolute bg-cyan-300 blur-lg w-20 h-20 rounded "></div>

        <div className="flex flex-wrap absolute justify-center top-0 content-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Hello, I am Boxuan !
          </h1>

          <div className="flex flex-col items-center justify-center text-center space-y-4 px-6 py-4">
            <p className="text-lg text-white tracking-wide transition-all duration-300 ease-in-out hover:text-cyan-400 hover:opacity-80 hover:transform hover:scale-95">
              I am a passionate Software Engineering student with a strong
              interest in programming. Coding is not just my field of study but
              also my hobby and aspiration. In the future, my dream is to become
              an exceptional full-stack developer, capable of handling
              everything from front-end to back-end system design and
              development. I am eager to learn and explore new technologies,
              aiming to contribute to the tech world through continuous practice
              and innovation while realizing my personal goals.
            </p>
            <p className="text-lg text-white tracking-wide transition-all duration-300 ease-in-out hover:text-cyan-400 hover:opacity-80 hover:transform hover:scale-95">
              I strongly believe that technology has the power to transform
              lives and create a better future. My journey in software
              engineering is driven by a desire to build meaningful applications
              that solve real-world problems and bring value to people.
              Collaboration, creativity, and resilience are at the core of my
              work ethic, and I am committed to growing not only as a developer
              but also as a team player. Through dedication and continuous
              learning, I aim to leave a lasting impact in the field of
              technology.
            </p>
          </div>

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
