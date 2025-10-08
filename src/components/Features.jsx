const features = [
  {
    title: 'Fast Setup',
    desc: 'Vite-powered dev server with instant HMR for a delightful workflow.',
  },
  {
    title: 'Modern UI',
    desc: 'Tailwind CSS with sensible defaults to craft clean, responsive designs.',
  },
  {
    title: 'Componentized',
    desc: 'Small, focused React components to keep things maintainable.',
  },
  {
    title: 'Deploy Ready',
    desc: 'Built to run instantly on modern hosts like Vercel and Netlify.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Why you7ll love it</h2>
          <p className="mt-3 text-white/70">A tiny but polished starter to say hello to the world in style.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
