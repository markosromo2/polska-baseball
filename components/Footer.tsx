const sections = [
  {
    heading: "The Program",
    links: [
      { label: "About", href: "#about" },
      { label: "Our Teams", href: "#teams" },
      { label: "Rankings", href: "#rankings" },
      { label: "Leadership", href: "#leadership" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Partnership", href: "#partnership" },
      { label: "Contact", href: "#contact" },
      { label: "Instagram", href: "https://instagram.com/polskabaseball" },
      { label: "Media", href: "#media" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-5 flex flex-col overflow-hidden border border-white/10">
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-[#DC143C]" />
              </div>
              <span
                className="text-white font-bold text-lg uppercase tracking-wider"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Polska <span className="text-[#DC143C]">Baseball</span>
              </span>
            </div>
            <p className="text-[#555] text-sm leading-relaxed max-w-xs">
              The Polish National Baseball Team. Competing across Europe and building
              toward the 2029 World Baseball Classic.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com/polskabaseball"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans font-semibold uppercase tracking-widest text-[#555] hover:text-[#DC143C] transition-colors"
              >
                @polskabaseball
              </a>
              <span className="text-[#333]">/</span>
              <a
                href="https://instagram.com/polish_baseball_softball"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans font-semibold uppercase tracking-widest text-[#555] hover:text-[#DC143C] transition-colors"
              >
                @polish_baseball_softball
              </a>
            </div>
          </div>

          {/* Nav sections */}
          {sections.map((s) => (
            <div key={s.heading}>
              <div className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-4">
                {s.heading}
              </div>
              <ul className="space-y-2.5">
                {s.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[#555] hover:text-white text-sm transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1a1a1a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#444] text-xs">
            &copy; 2026 Polish National Baseball Team
          </p>
          <p className="text-[#333] text-xs">
            Polish American Baseball &amp; Softball Foundation &mdash; 501(c)(3)
          </p>
        </div>
      </div>
    </footer>
  );
}
