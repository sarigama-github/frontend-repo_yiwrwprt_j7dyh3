import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Why Choose ACTS?</h2>
                <p className="mt-3 text-slate-700">ADITYA COLOUR TECHNOLOGY AND SCIENCE SATNA is a forward-looking institute specializing in color technology, chemistry, and biotech. Our ecosystem blends research, industry partnerships, and hands-on learning to prepare you for real-world impact.</p>
                <ul className="mt-6 grid gap-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-pink-500" /> Research-driven curriculum</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-500" /> Industry collaborations & internships</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-purple-500" /> Modern labs & innovation spaces</li>
                </ul>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
                <img src="https://images.unsplash.com/photo-1759092912891-9f52486bb059?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkZW50cyUyMGluJTIwYSUyMG1vZGVybiUyMGxhYnxlbnwwfDB8fHwxNzYyNjIwNTU2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Students in a modern lab" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/40" />
              </div>
            </div>
          </div>
        </section>
        <Programs />
        <section id="admissions" className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">Admissions Open</h2>
            <p className="mt-3 text-slate-700">Apply for the upcoming session and join a vibrant community of innovators.</p>
            <form className="mt-8 grid gap-3 sm:grid-cols-2 text-left">
              <input required placeholder="Full name" className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500" />
              <input required type="email" placeholder="Email address" className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500" />
              <input required placeholder="Phone number" className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500" />
              <select className="rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500">
                <option>Program of Interest</option>
                <option>B.Tech in Color Technology</option>
                <option>B.Sc. Biotechnology</option>
                <option>M.Sc. Applied Chemistry</option>
                <option>B.Tech AI for Materials</option>
              </select>
              <textarea placeholder="Tell us about your goals" className="sm:col-span-2 min-h-[120px] rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500" />
              <button className="sm:col-span-2 inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
                Submit Application
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
