import AboutMe from './components/AboutMe'
import Experience from './components/Experience';
import ProjectsCarousel from './components/ProjectsCarousel';
import Skills from './components/Skills';
import Blog from './components/Blog';



// app/page.tsx
export default function Home() {
  return (
    <main className="p-8">
      <AboutMe />
      <Skills />
      <ProjectsCarousel /> 
      <Experience />
      <Blog />
    </main>
  );
}
