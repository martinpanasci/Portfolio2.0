
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsRecent } from "@/sections/ProjectsRecent";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  
  return (
    <div>
      <Header />      
      <HeroSection />      
      <ProjectsRecent />
      <TapeSection />
      <AboutSection />
      <Experience />      
      <ContactSection />
      <Footer />
    </div>
  );
}
