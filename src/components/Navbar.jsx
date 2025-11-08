import { GraduationCap, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-rose-500 to-purple-600 text-white shadow-md">
              <GraduationCap size={22} />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight text-slate-900">
                ADITYA COLOUR TECHNOLOGY AND SCIENCE SATNA
              </p>
              <p className="text-xs text-slate-600 -mt-0.5">Innovate • Discover • Lead</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#programs" className="hover:text-slate-900 transition-colors">Programs</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4 text-xs text-slate-700">
            <div className="flex items-center gap-1"><Phone size={14} /> <span>+91 98765 43210</span></div>
            <div className="flex items-center gap-1"><Mail size={14} /> <span>info@adityacts.edu</span></div>
          </div>

          <a
            href="#admissions"
            className="ml-4 inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400 md:ml-6"
          >
            Apply Now
          </a>
        </div>
      </div>

      <div className="md:hidden border-t border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-xs text-slate-700 flex flex-wrap items-center gap-x-4 gap-y-1" id="contact">
          <div className="flex items-center gap-1"><Phone size={14} /> <span>+91 98765 43210</span></div>
          <div className="flex items-center gap-1"><Mail size={14} /> <span>info@adityacts.edu</span></div>
          <div className="flex items-center gap-1"><MapPin size={14} /> <span>Satna, MP</span></div>
        </div>
      </div>
    </header>
  );
}
