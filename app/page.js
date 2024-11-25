import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Programming from "@/components/Programming";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
   <div className = "bg-[#151312]">
   <Hero/>
   <Projects/>
   <Education/>
   {/* <Programming/> */}
   <ContactForm/>
   
   </div>
  );
}
