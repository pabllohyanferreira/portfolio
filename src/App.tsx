import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import BackgroundParticles from './components/BackgroundParticles';
import ProgrammingElements from './components/ProgrammingElements';
import SmoothScroll from './components/SmoothScroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <SmoothScroll />
      <BackgroundParticles />
      <ProgrammingElements />
      <Hero />
      <ProjectsSection />
      <AboutSection />
    </div>
  );
}

export default App
