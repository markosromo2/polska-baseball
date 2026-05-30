import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsTicker />
      <News />
      <About />
      <Teams />
      <Media />
      <Rankings />
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
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      <Image
        src="/images/background.jpg"
        alt="Polish National Baseball Team"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />

      {/* Polish flag stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#DC143C]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl">
          <p className="text-[#DC143C] font-sans text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Polish National Baseball Federation
          </p>
          <h1
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase leading-none mb-6 text-white"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Representing
            <br />
            <span className="text-[#DC143C]">Poland</span>
            <br />
            on the World Stage
          </h1>
          <p className="text-[#aaaaaa] text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            A competitive national program built on professional standards,
            international collaboration, and a clear path toward the 2029 World Baseball Classic.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#partnership"
              className="px-7 py-3.5 bg-[#DC143C] hover:bg-[#A50E2D] text-white font-sans font-bold text-sm uppercase tracking-widest transition-colors"
            >
              Partner With Us
            </a>
            <a
              href="#about"
              className="px-7 py-3.5 border border-white/30 hover:border-white text-white font-sans font-semibold text-sm uppercase tracking-widest transition-colors"
            >
              Our Program
            </a>
          </div>
        </div>

        {/* Stat bar */}
        <div className="mt-14 flex flex-wrap gap-px border-t border-white/10 pt-8">
          {[
            { value: "3", label: "National Teams" },
            { value: "Top 5", label: "WBSC Climber 2025" },
            { value: "2029", label: "WBC Target" },
            { value: "Runner-Up", label: "2025 Senior Europeans" },
          ].map((s) => (
            <div key={s.label} className="pr-10 mr-10 border-r border-white/10 last:border-0 last:mr-0">
              <div
                className="text-3xl font-bold text-[#DC143C] uppercase"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                {s.value}
              </div>
              <div className="text-[#888] text-xs uppercase tracking-widest mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── News Ticker ───────────────────────────────────────────── */
function NewsTicker() {
  return (
    <div className="bg-[#DC143C] py-2.5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
        <span className="font-sans font-black text-white text-xs uppercase tracking-widest whitespace-nowrap bg-black/20 px-3 py-1">
          Latest
        </span>
        <div className="flex gap-12 overflow-hidden">
          <span className="text-white text-xs font-sans font-medium tracking-wide whitespace-nowrap">
            Poland names John McLaren as National Team Manager &nbsp;&nbsp;&bull;&nbsp;&nbsp;
            Senior Team competes in Wroclaw July 27 &ndash; Aug 1, 2026 &nbsp;&nbsp;&bull;&nbsp;&nbsp;
            U18 Team crowned 2025 European B-Pool Champions &nbsp;&nbsp;&bull;&nbsp;&nbsp;
            Poland ranked 5th-highest global climber in WBSC 2025 Rankings
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── News ──────────────────────────────────────────────────── */
function News() {
  return (
    <section id="news" className="py-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <Label>Latest News</Label>
            <h2
              className="text-4xl sm:text-5xl font-bold uppercase text-white mt-1"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              From the Program
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-4">
          {/* Featured story */}
          <div className="md:col-span-7 relative overflow-hidden group bg-[#0F0F0F] border border-[#222]">
            <div className="relative h-64 md:h-80">
              <Image
                src="/photos/team-lineup-01.jpg"
                alt="Poland names John McLaren"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>
            <div className="p-6">
              <span className="inline-block bg-[#DC143C] text-white text-xs font-bold uppercase tracking-widest px-2 py-1 mb-3">
                Press Release
              </span>
              <h3
                className="text-2xl sm:text-3xl font-bold uppercase text-white leading-tight mb-3 group-hover:text-[#DC143C] transition-colors"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Poland Names John McLaren as National Team Manager
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                The Polish Baseball Federation enters a pivotal new chapter with the appointment
                of former MLB manager John McLaren, a major step as Poland builds toward
                qualification for the 2029 World Baseball Classic.
              </p>
            </div>
          </div>

          {/* Side stories */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="relative overflow-hidden group bg-[#0F0F0F] border border-[#222] flex gap-0">
              <div className="relative w-36 flex-shrink-0">
                <Image
                  src="/images/u18-team.jpg"
                  alt="U18 Champions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="144px"
                />
              </div>
              <div className="p-4">
                <span className="text-[#DC143C] text-xs font-bold uppercase tracking-widest">2025 Season</span>
                <h3
                  className="text-lg font-bold uppercase text-white mt-1 mb-2 leading-tight group-hover:text-[#DC143C] transition-colors"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  U18 Claims European B-Pool Championship
                </h3>
                <p className="text-[#888] text-xs leading-relaxed">
                  Poland&apos;s U18 squad won the 2025 European B-Pool Championship in Kutno, earning promotion.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group bg-[#0F0F0F] border border-[#222] flex gap-0">
              <div className="relative w-36 flex-shrink-0">
                <Image
                  src="/images/ranking.jpg"
                  alt="WBSC Rankings"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="144px"
                />
              </div>
              <div className="p-4">
                <span className="text-[#DC143C] text-xs font-bold uppercase tracking-widest">Rankings</span>
                <h3
                  className="text-lg font-bold uppercase text-white mt-1 mb-2 leading-tight group-hover:text-[#DC143C] transition-colors"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  5th-Highest WBSC Climber Globally in 2025
                </h3>
                <p className="text-[#888] text-xs leading-relaxed">
                  Poland&apos;s rise reflects steady improvement and growing competitiveness on the international stage.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group bg-[#0F0F0F] border border-[#222] flex gap-0">
              <div className="relative w-36 flex-shrink-0">
                <Image
                  src="/photos/pitcher-action-01.jpg"
                  alt="2026 Season"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="144px"
                />
              </div>
              <div className="p-4">
                <span className="text-[#DC143C] text-xs font-bold uppercase tracking-widest">2026 Season</span>
                <h3
                  className="text-lg font-bold uppercase text-white mt-1 mb-2 leading-tight group-hover:text-[#DC143C] transition-colors"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  Senior Team Hosts Europeans in Wroclaw
                </h3>
                <p className="text-[#888] text-xs leading-relaxed">
                  After a runner-up finish in 2025, the Senior Team competes on home soil July 27 &ndash; Aug 1.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="py-20 bg-[#0A0A0A] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/photos/team-group-photo.png"
                alt="Polish National Baseball Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#DC143C] p-5 hidden sm:block">
              <div
                className="text-white text-3xl font-bold uppercase leading-none"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                Est.
              </div>
              <div
                className="text-white text-5xl font-bold uppercase leading-none"
                style={{ fontFamily: "var(--font-oswald)" }}
              >
                2022
              </div>
            </div>
          </div>

          <div>
            <Label>Who We Are</Label>
            <h2
              className="text-4xl sm:text-5xl font-bold uppercase text-white mt-2 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              A New Standard in International Baseball
            </h2>
            <div className="w-12 h-1 bg-[#DC143C] mb-6" />
            <p className="text-[#888] leading-relaxed mb-4">
              The Polish National Baseball Team represents the next generation of European
              baseball. We are a competitive program built on professional standards,
              international collaboration, and a clear focus on development and performance.
            </p>
            <p className="text-[#888] leading-relaxed mb-4">
              Our program brings together Polish-heritage players from around the world and
              top domestic talent, creating a team that competes across Europe while helping
              grow the game in Poland.
            </p>
            <p className="text-[#888] leading-relaxed mb-8">
              With leadership from former Major League Baseball players and coaches, and a
              long-term vision toward the 2029 World Baseball Classic, we are building Poland
              into a respected presence in international baseball.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Professional Leadership", desc: "Former MLB managers and coaches" },
                { title: "Global Reach", desc: "Players from across the diaspora" },
                { title: "Rising Rankings", desc: "Top 5 global climber in 2025" },
                { title: "Youth Pipeline", desc: "U18, U23, and Senior programs" },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-[#DC143C] pl-3">
                  <div className="font-sans font-bold text-white text-sm">{item.title}</div>
                  <div className="font-sans text-[#888] text-xs mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>
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
      location: "Wroclaw, Poland",
      result: "2025 Runner-Up",
      img: "/images/senior-team.jpg",
      desc: "After a runner-up finish in 2025, the Senior Team competes on home soil in Wroclaw with one goal: claim the title and carry that momentum toward 2027 and the World Baseball Classic.",
      featured: true,
    },
    {
      name: "U23 National Team",
      tag: "U23",
      date: "August 2026",
      location: "Paderborn, Germany",
      result: "European B-Pool",
      img: "/images/u23-team.jpg",
      desc: "Our U23 squad heads to Paderborn for the European Championship B-Pool, looking to build on Poland's rising momentum and take another step forward on the international stage.",
      featured: false,
    },
    {
      name: "U18 National Team",
      tag: "U18",
      date: "2025 Season",
      location: "Kutno, Poland",
      result: "2025 B-Pool Champions",
      img: "/images/u18-team.jpg",
      desc: "The U18 team won the 2025 European B-Pool Championship, earning promotion and proving the strength of our youth development pipeline. The future is here.",
      featured: false,
    },
  ];

  return (
    <section id="teams" className="py-20 bg-[#050505] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <Label>Our Teams</Label>
            <h2
              className="text-4xl sm:text-5xl font-bold uppercase text-white mt-1"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Three Programs. One Mission.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {teams.map((team) => (
            <div
              key={team.name}
              className={`group relative overflow-hidden bg-[#0F0F0F] border flex flex-col ${
                team.featured ? "border-[#DC143C]" : "border-[#222] hover:border-[#DC143C]/50"
              } transition-colors`}
            >
              {team.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#DC143C] z-10" />
              )}

              <div className="relative h-56 overflow-hidden">
                <Image
                  src={team.img}
                  alt={team.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span
                    className={`inline-block px-2 py-0.5 text-xs font-bold uppercase tracking-widest ${
                      team.featured ? "bg-[#DC143C] text-white" : "bg-black/60 text-white border border-white/20"
                    }`}
                  >
                    {team.tag}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#DC143C] text-xs font-bold uppercase tracking-widest">{team.result}</span>
                </div>
                <h3
                  className="text-xl font-bold uppercase text-white mb-1 leading-tight group-hover:text-[#DC143C] transition-colors"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {team.name}
                </h3>
                <div className="text-[#666] text-xs mb-3">{team.date} &bull; {team.location}</div>
                <p className="text-[#888] text-sm leading-relaxed flex-1">{team.desc}</p>
              </div>
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
    { outlet: "The New York Times", sub: "The Athletic", headline: "Poland National Baseball Team Eyes WBC Future" },
    { outlet: "MLB.com", sub: "Official", headline: "Poland Hires Former MLB Player Dennis Cook to Manage Team" },
    { outlet: "The Morning Call", sub: "Feature", headline: "Pence Pops Up in Poland" },
    { outlet: "Yonhap News Agency", sub: "Korea", headline: "Poland's Rise in International Baseball Gains Global Attention" },
    { outlet: "WNKY News", sub: "Profile", headline: "Holmes Continues Worldwide Coaching Journey in Poland" },
    { outlet: "IB Journal", sub: "News", headline: "Polish American Baseball Foundation Seeks Heritage Players" },
  ];

  return (
    <section id="media" className="py-20 bg-[#0A0A0A] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div>
            <Label>In the Media</Label>
            <h2
              className="text-4xl sm:text-5xl font-bold uppercase text-white mt-1 mb-4 leading-tight"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Global Coverage
            </h2>
            <div className="w-12 h-1 bg-[#DC143C] mb-5" />
            <p className="text-[#888] text-sm leading-relaxed">
              Poland&apos;s rise in international baseball has drawn coverage from major sports
              publications across North America, Europe, and Asia.
            </p>

            <div className="mt-8 relative aspect-[3/2] overflow-hidden">
              <Image
                src="/photos/team-practice-dusk.jpg"
                alt="Poland baseball team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          <div className="lg:col-span-2 divide-y divide-[#1a1a1a]">
            {coverage.map((item) => (
              <div
                key={item.headline}
                className="py-5 group flex items-start gap-4 hover:bg-[#0F0F0F] px-2 -mx-2 transition-colors"
              >
                <div className="w-1 h-full self-stretch bg-[#222] group-hover:bg-[#DC143C] transition-colors flex-shrink-0 mt-1" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">{item.outlet}</span>
                    <span className="text-[#555] text-xs">/</span>
                    <span className="text-[#555] text-xs uppercase tracking-wide">{item.sub}</span>
                  </div>
                  <p className="text-[#aaa] text-sm leading-snug group-hover:text-white transition-colors">
                    &ldquo;{item.headline}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Rankings ──────────────────────────────────────────────── */
function Rankings() {
  return (
    <section id="rankings" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/pitcher3.jpg"
          alt="Poland baseball"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Label>World Rankings</Label>
            <h2
              className="text-4xl sm:text-5xl font-bold uppercase text-white mt-1 mb-6 leading-tight"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Climbing the WBSC Rankings
            </h2>
            <div className="w-12 h-1 bg-[#DC143C] mb-6" />
            <p className="text-[#aaa] leading-relaxed mb-4">
              Poland has made clear progress in the WBSC World Baseball Rankings, finishing as the
              5th-highest climber globally in 2025. This rise reflects the steady improvement of
              the program and growing competitiveness on the international stage.
            </p>
            <p className="text-[#aaa] leading-relaxed">
              Our upward movement comes from consistent player development, professional
              preparation, and smart competition across Europe and beyond. We are building toward
              the 2029 World Baseball Classic with purpose and momentum.
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-[#DC143C] p-6 flex items-center gap-6">
              <div
                className="text-white font-bold leading-none"
                style={{ fontFamily: "var(--font-oswald)", fontSize: "5rem" }}
              >
                #5
              </div>
              <div>
                <div className="text-white font-bold text-lg uppercase" style={{ fontFamily: "var(--font-oswald)" }}>
                  Global Climber
                </div>
                <div className="text-white/70 text-sm">WBSC World Rankings &bull; 2025</div>
              </div>
            </div>
            {[
              { label: "Senior National Team", value: "Runner-Up", sub: "2025 European Championship" },
              { label: "U18 National Team", value: "Champions", sub: "2025 European B-Pool" },
              { label: "World Baseball Classic", value: "2029", sub: "Qualification Target" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-black/60 border border-white/10 p-4 flex items-center justify-between"
              >
                <div>
                  <div className="text-white font-sans font-semibold text-sm">{item.label}</div>
                  <div className="text-[#888] text-xs mt-0.5">{item.sub}</div>
                </div>
                <div
                  className="text-[#DC143C] font-bold text-lg uppercase"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Leadership ────────────────────────────────────────────── */
function Leadership() {
  const staff = [
    {
      name: "John McLaren",
      title: "Head Coach & Manager",
      bio: "Former Major League Baseball manager bringing decades of professional experience to the international stage.",
      img: "/images/mclaren.jpg",
    },
    {
      name: "Dennis Cook",
      title: "Coach & Manager",
      bio: "World Series champion and veteran MLB pitcher dedicated to player development and competitive excellence.",
      img: "/images/coaches.jpg",
    },
  ];

  const management = [
    {
      name: "John Dobkowski",
      title: "President",
      bio: "Leads the Polish American Baseball & Softball Foundation and oversees the organization's strategic direction.",
    },
    {
      name: "Paul Bragiel",
      title: "General Manager",
      bio: "Venture capitalist with a background in sports team investment and international athletic development.",
    },
    {
      name: "Markos Romo",
      title: "Assistant General Manager",
      bio: "Manages player recruitment, marketing, and sponsorship development for the national program.",
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-[#050505] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Label>Leadership</Label>
        <h2
          className="text-4xl sm:text-5xl font-bold uppercase text-white mt-1 mb-12"
          style={{ fontFamily: "var(--font-oswald)" }}
        >
          The People Behind the Program
        </h2>

        {/* Coaching Staff */}
        <div className="mb-3">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC143C]">Coaching Staff</span>
            <div className="flex-1 h-px bg-[#1a1a1a]" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {staff.map((person) => (
              <div key={person.name} className="group bg-[#0F0F0F] border border-[#222] overflow-hidden hover:border-[#DC143C]/50 transition-colors flex">
                <div className="relative w-28 flex-shrink-0">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                    sizes="112px"
                  />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <div className="text-[#DC143C] text-xs font-bold uppercase tracking-widest mb-1">{person.title}</div>
                  <h3
                    className="text-xl font-bold uppercase text-white mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {person.name}
                  </h3>
                  <p className="text-[#888] text-xs leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Management */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DC143C]">Team Management</span>
            <div className="flex-1 h-px bg-[#1a1a1a]" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {management.map((person) => (
              <div key={person.name} className="bg-[#0F0F0F] border border-[#222] p-5 hover:border-[#DC143C]/50 transition-colors">
                <div className="text-[#DC143C] text-xs font-bold uppercase tracking-widest mb-1">{person.title}</div>
                <h3
                  className="text-xl font-bold uppercase text-white mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {person.name}
                </h3>
                <div className="w-8 h-0.5 bg-[#DC143C] mb-3" />
                <p className="text-[#888] text-xs leading-relaxed">{person.bio}</p>
              </div>
            ))}
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
    <section id="partnership" className="py-20 bg-[#0A0A0A] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden mb-6">
              <Image
                src="/images/fans.jpg"
                alt="Partnership opportunities"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
            </div>
            <Label>Partnership</Label>
            <h2
              className="text-4xl sm:text-5xl font-bold uppercase text-white mt-1 mb-4 leading-tight"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Build Something Meaningful With Us
            </h2>
            <div className="w-12 h-1 bg-[#DC143C] mb-5" />
            <p className="text-[#888] text-sm leading-relaxed mb-4">
              As a sponsor of the Polish National Baseball Team, your brand gains exposure to
              passionate baseball fans across multiple markets while supporting the growth of
              the sport internationally.
            </p>
            <p className="text-[#888] text-sm leading-relaxed mb-6">
              Our partners benefit from association with a professional, competitive program that
              represents Polish excellence on the global stage.
            </p>
            <a
              href="mailto:polskanationalbaseball@gmail.com"
              className="inline-block px-7 py-3.5 bg-[#DC143C] hover:bg-[#A50E2D] text-white font-sans font-bold text-sm uppercase tracking-widest transition-colors"
            >
              Get Partnership Info
            </a>
          </div>

          <div className="bg-[#0F0F0F] border border-[#222] p-7">
            <h3
              className="text-2xl font-bold uppercase text-white mb-5"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Partnership Benefits
            </h3>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={b} className="flex items-start gap-4">
                  <span
                    className="text-[#DC143C] font-bold text-lg leading-none mt-0.5 flex-shrink-0"
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    0{i + 1}
                  </span>
                  <span className="text-[#888] text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 pt-6 border-t border-[#1a1a1a]">
              <p className="text-[#555] text-xs leading-relaxed">
                The Polish National Baseball Team is supported by the Polish American Baseball &amp; Softball Foundation,
                a registered 501(c)(3) nonprofit organization. Sponsorships are tax-deductible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ───────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#050505] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Label>Contact</Label>
            <h2
              className="text-4xl sm:text-5xl font-bold uppercase text-white mt-1 mb-4 leading-tight"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              Get in Touch
            </h2>
            <div className="w-12 h-1 bg-[#DC143C] mb-5" />
            <p className="text-[#888] text-sm leading-relaxed">
              For general inquiries, partnership opportunities, player recruitment, or media
              requests, reach out directly.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="mailto:polskanationalbaseball@gmail.com"
              className="flex items-center gap-5 bg-[#0F0F0F] border border-[#222] p-5 hover:border-[#DC143C]/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-[#DC143C] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <div className="text-[#DC143C] text-xs font-bold uppercase tracking-widest mb-0.5">Email</div>
                <div className="text-white text-sm font-semibold group-hover:text-[#DC143C] transition-colors">
                  polskanationalbaseball@gmail.com
                </div>
                <div className="text-[#666] text-xs mt-0.5">General inquiries &amp; sponsorship</div>
              </div>
            </a>

            <a
              href="https://instagram.com/polskabaseball"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-[#0F0F0F] border border-[#222] p-5 hover:border-[#DC143C]/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-[#DC143C] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <div className="text-[#DC143C] text-xs font-bold uppercase tracking-widest mb-0.5">Instagram</div>
                <div className="text-white text-sm font-semibold group-hover:text-[#DC143C] transition-colors">@polskabaseball</div>
                <div className="text-[#666] text-xs mt-0.5">National team updates</div>
              </div>
            </a>

            <a
              href="https://instagram.com/polish_baseball_softball"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 bg-[#0F0F0F] border border-[#222] p-5 hover:border-[#DC143C]/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-[#DC143C] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <div className="text-[#DC143C] text-xs font-bold uppercase tracking-widest mb-0.5">Instagram</div>
                <div className="text-white text-sm font-semibold group-hover:text-[#DC143C] transition-colors">@polish_baseball_softball</div>
                <div className="text-[#666] text-xs mt-0.5">Foundation &amp; softball</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Shared ─────────────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-[#DC143C]" />
      <span className="text-[#DC143C] text-xs font-bold uppercase tracking-[0.2em] font-sans">
        {children}
      </span>
    </div>
  );
}
