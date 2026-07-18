import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="border-b border-slate-800 bg-slate-900 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          Ai App Factory
        </Link>
        
        <div className="flex items-center gap-6">
        <Link href="/onboarding" className="text-slate-300 hover:text-white transition">Onboarding</Link>
        <Link href="/settings" className="text-slate-300 hover:text-white transition">Settings</Link>
        </div>
      </div>
    </nav>
  );
}
