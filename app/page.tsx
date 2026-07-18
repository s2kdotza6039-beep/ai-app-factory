import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <Navigation />
      
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Ai App Factory
        </h1>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
          Imported from existing codebase
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link
            href="/auth"
            className="rounded-xl bg-orange-600 hover:bg-orange-500 px-8 py-4 font-semibold transition"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="rounded-xl border border-slate-700 hover:bg-slate-800 px-8 py-4 font-semibold transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Features</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <h3 className="text-xl font-bold mb-2">User authentication</h3>
            <p className="text-slate-400 text-sm">Powered by our platform</p>
          </div>
        </div>
      </section>
    
      {/* Testimonials - Added by Shang Tsung */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-slate-900">
        <h2 className="text-4xl font-bold mb-10 text-center">What People Are Saying</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Alex M.", text: "This app changed how I build software. Incredible." },
            { name: "Sarah K.", text: "Finally an app builder that actually works." },
            { name: "James R.", text: "Built my startup app in one afternoon. Mind-blowing." }
          ].map((t) => (
            <div key={t.name} className="p-6 rounded-2xl border border-slate-800 bg-slate-900">
              <p className="text-slate-300 text-sm mb-4">"{t.text}"</p>
              <p className="font-bold text-sm text-orange-400">— {t.name}</p>
            </div>
          ))}
        </div>
      </section></main>
  );
}
