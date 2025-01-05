import Nav from '@/Components/Nav'
import About from '@/Components/About';
export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-800">
    <section><Nav></Nav></section>
    
    <About></About>
    
    </div>
  );
}
