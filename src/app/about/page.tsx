import Nav from "@/Components/Nav";
import About from "@/Components/About";
import Cursor from "@/Components/Cursor";

export default function Page() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Nav></Nav>

      <About></About>
      <Cursor></Cursor>
    </div>
  );
}
