export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-white/60">
        <p>Built with ❤ using React, Vite, and Tailwind CSS.</p>
        <p className="mt-2">© {new Date().getFullYear()} HelloWorld. All rights reserved.</p>
      </div>
    </footer>
  );
}
