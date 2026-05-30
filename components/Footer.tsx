export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] py-8 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-sm overflow-hidden flex flex-col">
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-[#DC143C]" />
          </div>
          <span className="text-sm font-bold text-white">
            POLSKA <span className="text-[#DC143C]">BASEBALL</span>
          </span>
        </div>

        <div className="text-xs text-[#9CA3AF] text-center">
          &copy; 2026 Polish National Baseball Team &mdash; Polish American Baseball &amp; Softball Foundation (501c3)
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/polskabaseball"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#9CA3AF] hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="mailto:polskanationalbaseball@gmail.com"
            className="text-xs text-[#9CA3AF] hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
