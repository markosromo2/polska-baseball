import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <About />
      <Teams />
      <Media />
      <Rankings />
      <Program />
      <Leadership />
      <Partnership />
      <Contact />
      <Footer />
    </>
  );
}

/* ─── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#DC143C]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#DC143C 1px, transparent 1px), linear-gradient(90deg, #DC143C 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#DC143C] opacity-60" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-[#2A2A2A] rounded-full">
          <div className="w-2 h-2 rounded-full bg-[#DC143C] animate-pulse" />
          <span className="text-xs text-[#9CA3AF] tracking-widest uppercase font-medium">
            Polish National Baseball Team
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
          Representing
          <br />
          <span className="text-[#DC143C]">Poland</span>
          <br />
          on the World Stage
        </h1>

        <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-10 leading-relaxed">
          The next generation of European baseball. Built on professional standards,
          international collaboration, and a vision for the 2029 World Baseball Classic.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#partnership"
            className="px-8 py-4 bg-[#DC143C] hover:bg-[#A50E2D] text-white font-bold rounded-sm transition-colors text-sm tracking-wide uppercase"
          >
            Partner With Us
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-[#2A2A2A] hover:border-[#DC143C] text-[#9CA3AF] hover:text-white font-semibold rounded-sm transition-colors text-sm tracking-wide uppercase"
          >
            Learn More
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: "3", label: "National Teams" },
            { value: "#5", label: "Global Climber '25" },
            { value: "2029", label: "WBC Target" },
          ].map((s) => (
            <div key={s.label} className="border border-[#2A2A2A] rounded-sm p-4">
              <div className="text-3xl font-black text-[#DC143C]">{s.value}</div>
              <div className="text-xs text-[#9CA3AF] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-[#9CA3AF] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-[#9CA3AF] animate-pulse" />
      </div>
    </section>
  );
}

/* ─── News ──────────────────────────────────────────────────── */
function News() {
  return (
    <section id="news" className="py-24 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>Latest News</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black mb-12 mt-3">Breaking from the Program</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-2 bg-[#141414] border border-[#2A2A2A] rounded-sm p-8 hover:border-[#DC143C]/40 transition-colors group">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 bg-[#DC143C] text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                Press Release
              </span>
              <span className="text-xs text-[#9CA3AF]">2026</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-3 group-hover:text-[#DC143C] transition-colors">
              Poland Names John McLaren as National Team Manager
            </h3>
            <p className="text-[#9CA3AF] leading-relaxed max-w-3xl">
              The Polish Baseball Federation is entering a pivotal new chapter, highlighted by the
              appointment of former MLB manager John McLaren — a major step as Poland builds
              momentum toward qualification for the 2029 World Baseball Classic.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 hover:border-[#DC143C]/40 transition-colors group">
            <span className="text-xs text-[#9CA3AF] block mb-3">2025 Season</span>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#DC143C] transition-colors">
              U18 Claims European B-Pool Championship
            </h3>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Poland&apos;s U18 squad won the 2025 European B-Pool Championship in Kutno,
              earning promotion and proving the strength of the youth development program.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 hover:border-[#DC143C]/40 transition-colors group">
            <span className="text-xs text-[#9CA3AF] block mb-3">Rankings</span>
            <h3 className="text-xl font-bold mb-2 group-hover:text-[#DC143C] transition-colors">
              5th-Highest WBSC Climber Globally in 2025
            </h3>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Poland&apos;s steady rise in the WBSC World Baseball Rankings reflects the program&apos;s
              growing competitiveness and professional preparation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-24 bg-[#0D0D0D] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black mb-6 mt-3">
              A New Standard in International Baseball
            </h2>
            <p className="text-[#9CA3AF] leading-relaxed mb-5">
              The Polish National Baseball Team represents the next generation of European
              baseball. We are a competitive program built on professional standards,
              international collaboration, and a clear focus on development and performance.
            </p>
            <p className="text-[#9CA3AF] leading-relaxed mb-5">
              Our program brings together Polish-heritage players from around the world and
              top domestic talent, creating a team that competes across Europe while helping
              grow the game in Poland.
            </p>
            <p className="text-[#9CA3AF] leading-relaxed">
              With leadership from former Major League Baseball players and coaches, and a
              long-term vision toward the 2029 World Baseball Classic, we are building Poland
              into a respected presence in international baseball.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "⚾",
                title: "Professional Leadership",
                desc: "Former MLB managers and coaches driving performance at every level.",
              },
              {
                icon: "🌍",
                title: "Global Reach",
                desc: "Polish-heritage players recruited from North America, Europe, and beyond.",
              },
              {
                icon: "📈",
                title: "Rising Rankings",
                desc: "5th-highest global climber in WBSC rankings in 2025.",
              },
              {
                icon: "🏆",
                title: "Winning Culture",
                desc: "2025 European B-Pool Champions at the U18 level.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-5 hover:border-[#DC143C]/40 transition-colors"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-bold mb-1 text-sm">{item.title}</div>
                <div className="text-[#9CA3AF] text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Teams ─────────────────────────────────────────────────── */
function Teams() {
  const teams = [
    {
      name: "Senior National Team",
      tag: "Senior",
      date: "July 27 – Aug 1, 2026",
      location: "Wrocław, Poland",
      flag: "🇵🇱",
      desc: "After a runner-up finish in 2025, the Senior Team is hungry for more. This summer, Poland competes on home soil in Wrocław with one goal: claim the title and carry that momentum into 2027 and beyond.",
      highlight: true,
    },
    {
      name: "U23 National Team",
      tag: "U23",
      date: "August 2026",
      location: "Paderborn, Germany",
      flag: "🇩🇪",
      desc: "The future is now. Our U23 squad heads to Paderborn, Germany for the European Championship B-Pool, looking to build on Poland's rising momentum and take another step forward on the international stage.",
      highlight: false,
    },
    {
      name: "U18 National Team",
      tag: "U18",
      date: "2025 Champions",
      location: "Kutno, Poland",
      flag: "🏆",
      desc: "Building the foundation for Poland's baseball future. The U18 team won the 2025 European B-Pool Championship, earning promotion and proving the strength of our youth development pipeline.",
      highlight: false,
    },
  ];

  return (
    <section id="teams" className="py-24 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>Our Teams</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black mb-3 mt-3">Developing Talent at Every Level</h2>
        <p className="text-[#9CA3AF] mb-12 max-w-xl">
          Three competitive programs representing Poland across all age groups in international baseball.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div
              key={team.name}
              className={`relative bg-[#141414] border rounded-sm p-6 flex flex-col transition-colors ${
                team.highlight
                  ? "border-[#DC143C]"
                  : "border-[#2A2A2A] hover:border-[#DC143C]/40"
              }`}
            >
              {team.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#DC143C] rounded-t-sm" />
              )}
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`px-2 py-0.5 text-xs font-bold uppercase tracking-wider rounded-sm ${
                    team.highlight
                      ? "bg-[#DC143C] text-white"
                      : "bg-[#2A2A2A] text-[#9CA3AF]"
                  }`}
                >
                  {team.tag}
                </span>
                <span className="text-2xl">{team.flag}</span>
              </div>

              <h3 className="text-xl font-black mb-1">{team.name}</h3>
              <div className="text-[#DC143C] text-sm font-semibold mb-1">{team.date}</div>
              <div className="text-[#9CA3AF] text-xs mb-4">{team.location}</div>
              <p className="text-[#9CA3AF] text-sm leading-relaxed flex-1">{team.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Media ─────────────────────────────────────────────────── */
function Media() {
  const coverage = [
    { outlet: "The New York Times / The Athletic", headline: "Poland National Baseball Team Eyes WBC Future", type: "Feature" },
    { outlet: "MLB.com", headline: "Poland Hires Former MLB Player Dennis Cook to Manage Team", type: "News" },
    { outlet: "The Morning Call", headline: "Pence Pops Up in Poland", type: "Feature" },
    { outlet: "Yonhap News Agency", headline: "Poland's Rise in International Baseball Gains Global Attention", type: "International" },
    { outlet: "WNKY News", headline: "Holmes Continues Worldwide Coaching Journey in Poland", type: "Profile" },
    { outlet: "IB Journal", headline: "Polish American Baseball Foundation Seeks Heritage Players", type: "News" },
  ];

  return (
    <section id="media" className="py-24 bg-[#0D0D0D] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>In the Media</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black mb-3 mt-3">Coverage from Leading Publications</h2>
        <p className="text-[#9CA3AF] mb-12 max-w-xl">
          Poland&apos;s rise in international baseball has drawn attention from around the world.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {coverage.map((item) => (
            <div
              key={item.headline}
              className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-5 hover:border-[#DC143C]/40 transition-colors group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#DC143C] uppercase tracking-wider">{item.outlet}</span>
                <span className="text-xs text-[#9CA3AF] border border-[#2A2A2A] px-2 py-0.5 rounded-full">{item.type}</span>
              </div>
              <p className="font-semibold text-sm leading-snug group-hover:text-white transition-colors">
                &ldquo;{item.headline}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Rankings ──────────────────────────────────────────────── */
function Rankings() {
  return (
    <section id="rankings" className="py-24 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>World Rankings</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black mb-6 mt-3">Climbing the WBSC Rankings</h2>
            <p className="text-[#9CA3AF] leading-relaxed mb-5">
              Poland has made clear progress in the WBSC World Baseball Rankings, finishing as the
              5th-highest climber globally in 2025. This rise reflects the steady improvement of
              the program and our growing competitiveness on the international stage.
            </p>
            <p className="text-[#9CA3AF] leading-relaxed">
              Our upward movement is the result of consistent player development, professional
              preparation, and smart competition across Europe and beyond. The momentum is real,
              and we are continuing to build on it as we push toward the 2029 World Baseball Classic.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-[#141414] border border-[#DC143C] rounded-sm p-6">
              <div className="text-6xl font-black text-[#DC143C] mb-2">#5</div>
              <div className="font-bold">Highest Global Climber</div>
              <div className="text-[#9CA3AF] text-sm">WBSC World Rankings · 2025</div>
            </div>
            {[
              { label: "Senior Team", sub: "Runner-up · 2025 European Championship" },
              { label: "U18 Team", sub: "European B-Pool Champions · 2025" },
              { label: "2029 WBC", sub: "Qualification Target" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-4 flex items-center justify-between"
              >
                <div>
                  <div className="font-semibold text-sm">{item.label}</div>
                  <div className="text-[#9CA3AF] text-xs mt-0.5">{item.sub}</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-[#DC143C]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Program ───────────────────────────────────────────────── */
function Program() {
  return (
    <section id="program" className="py-24 bg-[#0D0D0D] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>Our Program</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black mb-3 mt-3">
          Professional Standards Meet International Competition
        </h2>
        <p className="text-[#9CA3AF] mb-12 max-w-xl">
          Supported by the Polish American Baseball &amp; Softball Foundation, a registered 501(c)(3) nonprofit.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: "01", title: "Compete", desc: "Compete at the highest levels of international baseball, representing Poland with excellence." },
            { num: "02", title: "Develop", desc: "Develop the sport within Poland and throughout Polish communities worldwide." },
            { num: "03", title: "Sustain", desc: "Build a sustainable program that serves as a model for national team development." },
            { num: "04", title: "Empower", desc: "Create pathways for Polish players to reach their full potential on the international stage." },
          ].map((item) => (
            <div
              key={item.num}
              className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 hover:border-[#DC143C]/40 transition-colors"
            >
              <div className="text-[#DC143C] font-black text-4xl mb-4 opacity-60">{item.num}</div>
              <div className="font-black text-lg mb-2">{item.title}</div>
              <div className="text-[#9CA3AF] text-sm leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Leadership ────────────────────────────────────────────── */
function PersonCard({ name, title, bio }: { name: string; title: string; bio: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("");
  return (
    <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-5 flex gap-4 hover:border-[#DC143C]/40 transition-colors">
      <div className="w-12 h-12 rounded-sm bg-[#DC143C]/10 border border-[#DC143C]/20 flex items-center justify-center text-[#DC143C] font-black text-sm flex-shrink-0">
        {initials}
      </div>
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-[#DC143C] text-xs font-semibold mb-2">{title}</div>
        <div className="text-[#9CA3AF] text-xs leading-relaxed">{bio}</div>
      </div>
    </div>
  );
}

function Leadership() {
  const coaching = [
    { name: "John McLaren", title: "Head Coach & Manager", bio: "Former Major League Baseball manager bringing decades of professional experience to the international stage." },
    { name: "Dennis Cook", title: "Coach & Manager", bio: "World Series champion and veteran MLB pitcher dedicated to player development and competitive excellence." },
  ];
  const management = [
    { name: "John Dobkowski", title: "President", bio: "Leads the Polish American Baseball & Softball Foundation and oversees the organization's strategic direction." },
    { name: "Paul Bragiel", title: "General Manager", bio: "Venture capitalist with a background in sports team investment and international athletic development." },
    { name: "Markos Romo", title: "Assistant General Manager", bio: "Manages player recruitment, marketing, and sponsorship development for the national program." },
  ];

  return (
    <section id="leadership" className="py-24 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>Leadership</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black mb-12 mt-3">The People Behind the Program</h2>

        <div className="mb-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-5 flex items-center gap-3">
            <span>Coaching Staff</span>
            <span className="flex-1 border-t border-[#2A2A2A]" />
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {coaching.map((p) => <PersonCard key={p.name} {...p} />)}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-5 flex items-center gap-3">
            <span>Team Management</span>
            <span className="flex-1 border-t border-[#2A2A2A]" />
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {management.map((p) => <PersonCard key={p.name} {...p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Partnership ───────────────────────────────────────────── */
function Partnership() {
  const benefits = [
    "Brand visibility on team uniforms and equipment",
    "Recognition at international tournaments and competitions",
    "Digital presence through team channels and media",
    "Access to engaged audiences in Poland, Europe, and North America",
    "Tax-deductible sponsorship through our 501(c)(3) status",
    "Association with professional MLB-level leadership",
  ];

  return (
    <section id="partnership" className="py-24 bg-[#0D0D0D] border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>Partnership</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black mb-6 mt-3">Join Us in Building Something Meaningful</h2>
            <p className="text-[#9CA3AF] leading-relaxed mb-5">
              As a sponsor of the Polish National Baseball Team, your brand gains exposure to
              passionate baseball fans across multiple markets while supporting the growth of
              the sport internationally.
            </p>
            <p className="text-[#9CA3AF] leading-relaxed mb-8">
              Our partners benefit from association with a professional, competitive program that
              represents Polish excellence on the global stage.
            </p>
            <a
              href="mailto:polskanationalbaseball@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC143C] hover:bg-[#A50E2D] text-white font-bold rounded-sm transition-colors text-sm uppercase tracking-wide"
            >
              Get Partnership Info
            </a>
          </div>

          <div className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF] mb-5">Partnership Benefits</div>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DC143C] mt-2 flex-shrink-0" />
                  <span className="text-sm text-[#9CA3AF] leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ───────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-3xl sm:text-4xl font-black mb-12 mt-3">Get in Touch</h2>

        <div className="grid sm:grid-cols-3 gap-4">
          <a
            href="mailto:polskanationalbaseball@gmail.com"
            className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 hover:border-[#DC143C]/40 transition-colors group"
          >
            <div className="text-[#DC143C] font-bold text-xs uppercase tracking-widest mb-3">Email</div>
            <div className="font-semibold group-hover:text-[#DC143C] transition-colors break-all text-sm">
              polskanationalbaseball@gmail.com
            </div>
            <div className="text-[#9CA3AF] text-xs mt-2">General inquiries &amp; sponsorship</div>
          </a>

          <a
            href="https://instagram.com/polskabaseball"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 hover:border-[#DC143C]/40 transition-colors group"
          >
            <div className="text-[#DC143C] font-bold text-xs uppercase tracking-widest mb-3">Instagram</div>
            <div className="font-semibold group-hover:text-[#DC143C] transition-colors">@polskabaseball</div>
            <div className="text-[#9CA3AF] text-xs mt-2">National team updates</div>
          </a>

          <a
            href="https://instagram.com/polish_baseball_softball"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#141414] border border-[#2A2A2A] rounded-sm p-6 hover:border-[#DC143C]/40 transition-colors group"
          >
            <div className="text-[#DC143C] font-bold text-xs uppercase tracking-widest mb-3">Instagram</div>
            <div className="font-semibold group-hover:text-[#DC143C] transition-colors">@polish_baseball_softball</div>
            <div className="text-[#9CA3AF] text-xs mt-2">Foundation &amp; softball</div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Shared ─────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-3 h-3 bg-[#DC143C] rounded-sm" />
      <span className="text-xs font-bold uppercase tracking-widest text-[#DC143C]">{children}</span>
    </div>
  );
}
