import { Beaker, Palette, Cpu, Microscope, Sparkles } from 'lucide-react';

const programs = [
  {
    icon: Palette,
    title: 'B.Tech in Color Technology',
    desc: 'Dive into color theory, pigment formulation, coatings, and digital color management with industry projects.',
  },
  {
    icon: Beaker,
    title: 'B.Sc. Biotechnology',
    desc: 'Explore genetics, bioinformatics, and bioprocess engineering with hands-on lab immersion.',
  },
  {
    icon: Microscope,
    title: 'M.Sc. Applied Chemistry',
    desc: 'Advanced synthesis, spectroscopy, and materials science geared toward research and industry.',
  },
  {
    icon: Cpu,
    title: 'B.Tech AI for Materials',
    desc: 'Fuse machine learning with materials science to accelerate discovery and manufacturing.',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Programs</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Industry-aligned curricula blending science, design, and engineering.</p>
          </div>
          <Sparkles className="hidden md:block text-pink-500" />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-blue-500 text-white flex items-center justify-center shadow-md">
                <p.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
