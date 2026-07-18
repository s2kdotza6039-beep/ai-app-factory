import Navigation from "@/components/Navigation";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Settings</h1>
        <p className="text-slate-400 mb-8">
          Manage account and application preferences
        </p>

        <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
          <p className="text-slate-300">
            Content for the Settings page will go here.
          </p>
        </div>
      </section>
    </main>
  );
}
