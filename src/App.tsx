import { useDarkMode, useIntersectionObserver } from './hooks/useScrollSpy';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolStrip from './components/ToolStrip';
import About from './components/About';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Workflow from './components/Workflow';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDark, toggleTheme] = useDarkMode();
  useIntersectionObserver();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero isDark={isDark} />
        <ToolStrip />
        <About />
        <Expertise />
        <Projects />
        <Skills />
        <Workflow />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
