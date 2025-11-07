import React from 'react';
import { AppWindow, Code2, Palette } from 'lucide-react';

const projects = [
  {
    title: 'LensCraft',
    description: 'A photo-focused camera app with manual controls, live filters, and RAW capture.',
    tags: ['SwiftUI', 'Metal', 'Core Image'],
  },
  {
    title: 'FitTrack',
    description: 'Minimal workout tracker with offline-first sync and health integrations.',
    tags: ['Kotlin', 'Compose', 'Room DB'],
  },
  {
    title: 'Nomad Notes',
    description: 'Location-aware notes with map previews and instant search.',
    tags: ['React Native', 'Expo', 'SQLite'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative bg-black py-20 text-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-geist text-3xl font-semibold sm:text-4xl">Selected Work</h2>
            <p className="mt-2 max-w-2xl text-white/60">A few recent apps showcasing camera, fitness, and productivity experiences.</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">iOS</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">Android</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">Cross‑platform</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
              <div className="mb-4 flex items-center gap-2 text-white/70">
                <AppWindow className="h-4 w-4" />
                <span className="text-xs tracking-wide">Case Study</span>
              </div>
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">{t}</span>
                ))}
              </div>
              <div className="pointer-events-none absolute -right-6 -top-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Palette className="h-24 w-24 text-white/10" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
