import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import ProgrammingElements from './components/ProgrammingElements';
import SmoothScroll from './components/SmoothScroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <SmoothScroll />
      <ProgrammingElements />
      <Hero />
      <ProjectsSection />
    </div>
  );
}

export default App
