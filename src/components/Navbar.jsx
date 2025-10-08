import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/5 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-sky-500">
            <Rocket className="text-white" size={18} />
          </span>
          <span className="font-semibold tracking-tight">HelloWorld</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
          <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </nav>
        <a
          href="#get-started"
          className="inline-flex items-center rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-white/20 hover:bg-white/20 transition"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
