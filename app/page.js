import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Home() {
  return (
   <div className = "bg-[#151312]">
   <Navbar/>
   <Hero/>
   <Projects/>
   <Education/>
   </div>
  );
}
