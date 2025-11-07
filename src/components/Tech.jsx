import React from 'react';
import { Apple, Android, Cpu, Sparkles } from 'lucide-react';

const tech = [
  { name: 'Swift / SwiftUI', icon: Apple },
  { name: 'Kotlin / Jetpack Compose', icon: Android },
  { name: 'React Native / Expo', icon: Sparkles },
  { name: 'Performance & Profiling', icon: Cpu },
];

const Tech = () => {
  return (
    <section id="expertise" className="relative bg-black py-20 text-white">
      <div className="container mx-auto max-w-7xl px-6">
        <h2 className="font-geist text-3xl font-semibold sm:text-4xl">Expertise</h2>
        <p className="mt-2 max-w-2xl text-white/60">From native to cross‑platform, I build fast, reliable apps with clean, maintainable code.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tech.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.06]">
              <t.icon className="h-6 w-6 text-white" />
              <h3 className="mt-4 text-base font-medium">{t.name}</h3>
              <p className="mt-2 text-sm text-white/70">Tooling, architecture, and best practices tailored for each platform.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
