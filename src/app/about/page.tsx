import Nav from '@/Components/Nav'
import About from '@/Components/About';
import Cursor from "@/Components/Cursor"

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800">
    <section><Nav></Nav></section>
    
    <About></About>
    <Cursor></Cursor>

    </div>
  );
}
