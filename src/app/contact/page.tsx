"use client";
import Nav from "@/Components/Nav";
import Cursor from "@/Components/Cursor";
import Info from "@/Components/Info";
import { Vortex } from "@/Components/ui/vortex";
export default function myself() {
  return (
    <div className="my-auto mx-auto cursor-none cursor: none">
      <Nav></Nav>
      <Info></Info>
      <div className="w-full h-[200] mx-auto overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            This is me
          </h2>
          <p className="text-white text-xl md:text-2xl max-w-xl mt-6 text-center">
            The one who always improve himself
          </p>
        </Vortex>
      </div>
      <Cursor></Cursor>
    </div>
  );
}
