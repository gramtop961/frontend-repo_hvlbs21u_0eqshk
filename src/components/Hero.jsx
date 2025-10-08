export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-600/40 via-sky-500/20 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 py-24 sm:py-28 relative">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Hello, World!
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            A minimal, elegant landing page starter built with React, Vite, and Tailwind CSS.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-semibold shadow-sm hover:bg-white/90 transition"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md bg-white/10 text-white ring-1 ring-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/20 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
