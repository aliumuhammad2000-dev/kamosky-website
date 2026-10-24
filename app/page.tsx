type IconName =
  | "arrow"
  | "menu"
  | "book"
  | "spark"
  | "heart"
  | "people"
  | "quote"
  | "camera"
  | "mail";

type IconProps = { name: IconName; className?: string };

function Icon({ name, className = "size-5" }: IconProps) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h13m-5-5 5 5-5 5" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    book: <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Zm0 0V21m4-14h8m-8 4h8" />,
    spark: <path d="m12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3Zm6.5 12 .5 2 .5-2 2-.5-2-.5-.5-2-.5 2-2 .5 2 .5Z" />,
    heart: <path d="M20.8 8.7c0 5.3-8.8 10.1-8.8 10.1S3.2 14 3.2 8.7A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z" />,
    people: <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20m6-9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm6-6.5a3 3 0 0 1 0 5.8M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.4" />,
    quote: <path d="M7.5 17H4.8A1.8 1.8 0 0 1 3 15.2V11a4 4 0 0 1 4-4h.5v3H7a1 1 0 0 0-1 1v1h1.5a1.8 1.8 0 0 1 1.8 1.8v1.4A1.8 1.8 0 0 1 7.5 17Zm10 0h-2.7a1.8 1.8 0 0 1-1.8-1.8V11a4 4 0 0 1 4-4h.5v3H17a1 1 0 0 0-1 1v1h1.5a1.8 1.8 0 0 1 1.8 1.8v1.4a1.8 1.8 0 0 1-1.8 1.8Z" />,
    camera: <path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h2l1.2-2h6.6l1.2 2h2A1.5 1.5 0 0 1 20 7.5v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-10ZM12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
    mail: <path d="M4 6h16v12H4V6Zm0 1 8 6 8-6" />,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

const initiatives = [
  { title: "Education", icon: "book" as IconName, text: "A space for verified education initiatives, programmes, and opportunities to be shared.", number: "01" },
  { title: "Skills Acquisition", icon: "spark" as IconName, text: "A space for verified skills and empowerment programmes to be documented clearly.", number: "02" },
  { title: "Humanitarian Support", icon: "heart" as IconName, text: "A space for verified humanitarian work and community support stories to be added.", number: "03" },
  { title: "Community Development", icon: "people" as IconName, text: "A space for verified community-focused projects and public updates to be published.", number: "04" },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Initiatives", href: "#initiatives" },
  { label: "Stories", href: "#stories" },
  { label: "Media", href: "#media" },
];

function PlaceholderVisual({ label, tall = false }: { label: string; tall?: boolean }) {
  return (
    <div className={`placeholder-grid relative overflow-hidden bg-forest-950 ${tall ? "min-h-112 sm:min-h-136" : "min-h-56"}`} role="img" aria-label={`${label} placeholder`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(190,154,81,0.34),transparent_34%),linear-gradient(140deg,rgba(11,50,42,0.9),rgba(24,72,59,0.4))]" />
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-6 text-ivory-100">
        <span className="max-w-56 text-xs uppercase tracking-[0.22em] text-ivory-100/70">{label}</span>
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold-300/50 text-gold-200"><Icon name="camera" className="size-5" /></span>
      </div>
    </div>
  );
}

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <p className="eyebrow">{eyebrow}</p>
      <div className="max-w-2xl">
        <h2 className="display-heading text-4xl leading-[0.98] text-forest-950 sm:text-5xl">{title}</h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-forest-900/65">{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-ivory-50 text-forest-950">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-ivory-100/15 text-ivory-50">
        <div className="site-container flex h-20 items-center justify-between">
          <a href="#top" className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300" aria-label="Kamosky home">
            <span className="flex size-9 items-center justify-center border border-gold-300/70 font-serif text-lg text-gold-200">K</span>
            <span className="font-serif text-xl tracking-[0.16em]">KAMOSKY</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} className="nav-link">{item.label}</a>)}
            <a href="#contact" className="button button-small button-light">Contact</a>
          </nav>
          <details className="relative md:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-ivory-100/30 text-ivory-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation menu</span><Icon name="menu" className="size-5" />
            </summary>
            <nav className="absolute right-0 top-14 w-64 border border-forest-900/10 bg-ivory-50 p-3 text-forest-950 shadow-2xl" aria-label="Mobile navigation">
              {navItems.map((item) => <a key={item.href} href={item.href} className="block border-b border-forest-900/10 px-4 py-3 text-sm font-medium last:border-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold-500">{item.label}</a>)}
              <a href="#contact" className="button button-small button-dark mt-3 w-full">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <section id="top" className="relative isolate bg-forest-950 text-ivory-50">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(190,154,81,0.2),transparent_30%),linear-gradient(115deg,#082f27_0%,#123e32_58%,#0c2d26_100%)]" />
        <div className="site-container grid min-h-190 items-end gap-14 pb-14 pt-32 sm:pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20 lg:pt-28">
          <div className="max-w-3xl animate-rise">
            <p className="eyebrow text-gold-200">Public profile · Kamosky</p>
            <h1 className="display-heading mt-6 max-w-3xl text-[clamp(3.6rem,10vw,8.7rem)] leading-[0.82] tracking-[-0.055em] text-ivory-50">Alhaji Kamorudeen <span className="text-gold-200">Olawale Yusuf</span></h1>
            <div className="mt-9 flex max-w-xl gap-4 border-l border-gold-300/70 pl-5 sm:pl-7"><p className="max-w-md text-lg leading-8 text-ivory-100/80 sm:text-xl">Personal Assistant on Special Duties to the President of Nigeria.</p></div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#about" className="button button-gold">Explore the profile <Icon name="arrow" className="size-4" /></a><a href="#initiatives" className="button button-outline-light">View initiatives <Icon name="arrow" className="size-4" /></a></div>
          </div>
          <div className="relative mx-auto w-full max-w-md animate-rise [animation-delay:120ms] lg:mx-0 lg:justify-self-end">
            <div className="absolute -left-5 -top-5 size-24 border-l border-t border-gold-300/60 sm:-left-8 sm:-top-8 sm:size-32" />
            <PlaceholderVisual label="Portrait placeholder · verified image to be added" tall />
            <div className="absolute -bottom-5 -right-5 border border-gold-300/50 bg-forest-900/90 px-5 py-4 backdrop-blur sm:-right-8"><p className="text-[10px] uppercase tracking-[0.22em] text-gold-200">Official public profile</p><p className="mt-1 font-serif text-sm text-ivory-50">Information to be verified</p></div>
          </div>
        </div>
        <div className="site-container flex items-center justify-between border-t border-ivory-100/15 py-5 text-xs uppercase tracking-[0.18em] text-ivory-100/50"><span>Public information platform</span><a href="#about" className="hidden items-center gap-3 transition-colors hover:text-gold-200 sm:flex">Scroll to discover <Icon name="arrow" className="size-4" /></a></div>
      </section>

      <section id="about" className="site-container section-space">
        <SectionIntro eyebrow="01 · About" title="A considered space for public service and public record." description="This public profile is being shaped as a clear, respectful home for verified information about Kamosky’s work, areas of focus, and public-facing initiatives." />
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-20"><div className="border-t border-forest-900/20 pt-5"><p className="text-sm uppercase tracking-[0.18em] text-forest-900/50">Profile note</p><p className="mt-5 max-w-sm font-serif text-2xl leading-snug text-forest-950">Verified details will be added as the public record is prepared.</p></div><div className="max-w-2xl"><p className="text-lg leading-8 text-forest-900/70">The full About page is reserved for a verified biography, areas of responsibility, and a carefully sourced account of public work. No personal or official details are inferred here.</p><a href="/about" className="link-arrow mt-8 inline-flex">Read the full profile <Icon name="arrow" className="size-4" /></a></div></div>
      </section>

      <section id="initiatives" className="bg-forest-900 text-ivory-50"><div className="site-container section-space"><SectionIntro eyebrow="02 · Areas of focus" title="Where service meets the everyday." description="These four themes provide a clear structure for future updates. Programme names, outcomes, dates, and locations should be replaced with verified information before publication." /><div className="mt-14 grid gap-px overflow-hidden border border-ivory-100/15 bg-ivory-100/15 sm:grid-cols-2 lg:grid-cols-4">{initiatives.map((initiative) => <article key={initiative.title} className="group bg-forest-900 p-6 transition-colors hover:bg-forest-800 sm:p-8"><div className="flex items-start justify-between"><span className="flex size-12 items-center justify-center border border-gold-300/50 text-gold-200"><Icon name={initiative.icon} /></span><span className="font-serif text-sm text-ivory-100/40">{initiative.number}</span></div><h3 className="mt-16 font-serif text-2xl text-ivory-50">{initiative.title}</h3><p className="mt-4 text-sm leading-6 text-ivory-100/60">{initiative.text}</p><span className="mt-8 inline-flex text-gold-200 transition-transform group-hover:translate-x-1"><Icon name="arrow" className="size-4" /></span></article>)}</div></div></section>

      <section id="stories" className="site-container section-space"><SectionIntro eyebrow="03 · Public impact" title="Stories with room for the facts to lead." description="Impact stories will be published here only when the people, places, dates, and outcomes can be attributed to a reliable public source." /><div className="mt-14 grid gap-6 lg:grid-cols-3">{["Story placeholder · verified account to be added", "Story placeholder · source to be confirmed", "Story placeholder · details to be supplied"].map((label, index) => <article key={label} className={`border border-forest-900/15 p-6 ${index === 1 ? "bg-gold-100/35" : "bg-white/30"}`}><Icon name="quote" className="size-7 text-gold-600" /><p className="mt-16 font-serif text-2xl leading-snug text-forest-950">A verified public-service story will appear here.</p><div className="mt-10 border-t border-forest-900/15 pt-4 text-xs uppercase tracking-[0.16em] text-forest-900/50">{label}</div></article>)}</div></section>

      <section id="media" className="bg-gold-100/35"><div className="site-container section-space"><SectionIntro eyebrow="04 · News & media" title="A calm, useful window into the work." description="News, statements, interviews, and media appearances can be added here with dates, publication names, and direct source links." /><div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"><article className="group relative overflow-hidden bg-forest-950 text-ivory-50"><PlaceholderVisual label="Featured media placeholder · source to be added" /><div className="p-6 sm:p-8"><p className="eyebrow text-gold-200">Featured update · placeholder</p><h3 className="mt-4 max-w-xl font-serif text-3xl leading-tight">Verified news coverage and public statements will be featured here.</h3><span className="mt-8 inline-flex items-center gap-3 text-sm text-gold-200">Read when published <Icon name="arrow" className="size-4" /></span></div></article><div className="divide-y divide-forest-900/15 border-y border-forest-900/15">{["Media item placeholder · date and source to be added", "Media item placeholder · date and source to be added", "Media item placeholder · date and source to be added"].map((item, index) => <article key={item + index} className="flex gap-5 py-6"><span className="font-serif text-xl text-gold-600">0{index + 1}</span><div><p className="text-xs uppercase tracking-[0.14em] text-forest-900/50">Source pending · date pending</p><h3 className="mt-2 font-serif text-xl text-forest-950">{item}</h3></div></article>)}</div></div></div></section>

      <section id="gallery" className="site-container section-space"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><SectionIntro eyebrow="05 · Gallery" title="Moments, when they are ready to be shared." description="Image placeholders are intentionally used until approved, attributable photographs are available." /><span className="hidden shrink-0 items-center gap-2 pb-1 text-sm text-forest-900/60 sm:flex"><Icon name="camera" className="size-4" /> Image archive</span></div><div className="mt-14 grid gap-4 sm:grid-cols-12 sm:grid-rows-2"><div className="sm:col-span-7 sm:row-span-2"><PlaceholderVisual label="Gallery image placeholder" tall /></div><div className="sm:col-span-5"><PlaceholderVisual label="Gallery image placeholder" /></div><div className="sm:col-span-5"><PlaceholderVisual label="Gallery image placeholder" /></div></div></section>

      <section id="contact" className="bg-forest-950 text-ivory-50"><div className="site-container section-space grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div className="max-w-3xl"><p className="eyebrow text-gold-200">06 · Contact</p><h2 className="display-heading mt-5 text-5xl leading-[0.95] sm:text-7xl">For verified enquiries, start here.</h2><p className="mt-6 max-w-xl text-base leading-7 text-ivory-100/65">Official contact channels will be added when they are confirmed. Please do not treat this placeholder as an active office address or contact detail.</p></div><div className="flex size-24 items-center justify-center border border-gold-300/50 text-gold-200 sm:size-32"><Icon name="mail" className="size-8" /></div></div></section>

      <footer className="bg-forest-950 text-ivory-100/60"><div className="site-container flex flex-col gap-6 border-t border-ivory-100/15 py-8 text-xs leading-5 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-2xl">This website is a public-information profile and is not an official government website. It does not use or imply government endorsement, and all biographical, programme, and media details should be independently verified.</p><a href="#top" className="inline-flex shrink-0 items-center gap-2 uppercase tracking-[0.16em] transition-colors hover:text-gold-200">Back to top <Icon name="arrow" className="size-3 -rotate-90" /></a></div></footer>
    </main>
  );
}
