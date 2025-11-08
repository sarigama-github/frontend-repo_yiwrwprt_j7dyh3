import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mWY-FNsBVpRvZHS5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500/10 to-blue-500/10 px-3 py-1 text-xs font-semibold text-pink-700 ring-1 ring-inset ring-pink-500/20">
            Vibrant • Scientific • Future-ready
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            ADITYA COLOUR TECHNOLOGY AND SCIENCE SATNA
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 max-w-xl">
            A premier institution at the intersection of color science, biotechnology, and modern engineering. Learn from leading researchers and build a career that shapes tomorrow.
          </p>

        
          <div className="mt-8 flex items-center gap-3">
            <a href="#admissions" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400">
              Start Application
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#programs" className="inline-flex items-center justify-center rounded-lg bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-900 ring-1 ring-slate-200 hover:bg-white">
              Explore Programs
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
    </section>
  );
}
