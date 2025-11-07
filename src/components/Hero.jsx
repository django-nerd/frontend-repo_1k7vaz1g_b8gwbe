import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to ensure text readability (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
              <Smartphone className="h-4 w-4 text-white/80" />
              <span className="text-xs tracking-wide text-white/70">Mobile App Developer</span>
            </div>
            <h1 className="font-geist text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Crafting minimalist, high-performance mobile experiences
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
              I design and build elegant iOS and Android apps with clean architecture, stunning UI, and a focus on performance.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90">
                View Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
