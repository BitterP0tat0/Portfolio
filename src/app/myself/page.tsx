import Nav from "@/Components/Nav";
import Cursor from "@/Components/Cursor";
import Info from "@/Components/Info";
import { Vortex } from "@/Components/ui/vortex";
export default function myself() {
  return (
    <div className="my-auto mx-auto">
      <Nav></Nav>
      <Info></Info>
      
      <Cursor></Cursor>
    </div>
  );
}
