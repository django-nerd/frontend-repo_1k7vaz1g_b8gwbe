import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-black py-20 text-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-geist text-3xl font-semibold sm:text-4xl">Let’s build something great</h2>
              <p className="mt-2 max-w-xl text-white/70">Available for freelance projects, consulting, and collaborations.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90">
                <Mail className="h-4 w-4" />
                Email Me
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Your Name — Mobile App Developer</p>
      </div>
    </section>
  );
};

export default Contact;
