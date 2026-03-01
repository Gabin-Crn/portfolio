import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import BlogPreview from "@/components/sections/BlogPreview";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsPreview />
      <BlogPreview />
      <Education />
      <Contact />
    </main>
  );
}
