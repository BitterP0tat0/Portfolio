import Nav from "@/Components/Nav";
import Contact from "@/Components/Contact";
import Cursor from "@/Components/Cursor";

export default function Page() {
  return (
    <div className="bg-white dark:bg-gray-800">
      <Nav></Nav>

      <Contact />
      <Cursor></Cursor>
    </div>
  );
}
