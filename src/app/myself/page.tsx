"use client";

import Nav from "@/Components/Nav";
import Cursor from "@/Components/Cursor";
import Info from "@/Components/Info";
export default function myself() {
  return (
    <div className="my-auto mx-auto cursor-none cursor: none">
      <Nav></Nav>
      <Info></Info>

      <Cursor></Cursor>
    </div>
  );
}
