import { Facebook, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold tracking-tight">ADITYA COLOUR TECHNOLOGY AND SCIENCE SATNA</p>
            <p className="mt-2 text-sm text-slate-400 max-w-sm">Where innovation meets impact. Advancing color science, chemistry, and biotechnology through education and research.</p>
          </div>
          <div>
            <p className="text-sm font-semibold">Contact</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li>Email: info@adityacts.edu</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: Satna, Madhya Pradesh</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Quick Links</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-400">
              <li><a href="#programs" className="hover:text-white">Programs</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#admissions" className="hover:text-white">Admissions</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Stay Updated</p>
            <form className="mt-3 flex gap-2">
              <input type="email" placeholder="Email address" className="w-full rounded-md bg-slate-800/60 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500" />
              <button className="inline-flex items-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-pink-500">
                <Mail size={16} className="mr-1" /> Subscribe
              </button>
            </form>
            <div className="mt-4 flex items-center gap-4 text-slate-400">
              <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook size={18} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube size={18} /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} ADITYA COLOUR TECHNOLOGY AND SCIENCE SATNA. All rights reserved.</div>
      </div>
    </footer>
  );
}
