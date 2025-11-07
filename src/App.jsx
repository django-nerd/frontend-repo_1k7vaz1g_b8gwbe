import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Tech from './components/Tech';
import Contact from './components/Contact';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="font-geist text-lg font-semibold tracking-tight">dev.mobile</a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#projects" className="hover:text-white">Work</a>
          <a href="#expertise" className="hover:text-white">Expertise</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>
      {open && (
        <div className="mx-auto max-w-7xl px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-white">
            <a href="#projects" onClick={() => setOpen(false)} className="py-1 text-sm">Work</a>
            <a href="#expertise" onClick={() => setOpen(false)} className="py-1 text-sm">Expertise</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-1 text-sm">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Tech />
        <Contact />
      </main>
    </div>
  );
}

export default App;
