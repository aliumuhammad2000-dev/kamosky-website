import { Icon } from "./site-icons";

export function ContactCTA() {
  return (
    <section id="contact" className="bg-forest-950 text-ivory-50">
      <div className="site-container section-space grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold-200">06 · Contact</p>
          <h2 className="display-heading mt-5 text-5xl leading-[0.95] sm:text-7xl">
            For verified enquiries, start here.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-ivory-100/65">
            Official contact channels will be added when they are confirmed. Please do not treat this placeholder as an active office address or contact detail.
          </p>
        </div>
        <div className="flex size-24 items-center justify-center border border-gold-300/50 text-gold-200 sm:size-32">
          <Icon name="mail" className="size-8" />
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-forest-950 text-ivory-100/60">
      <div className="site-container flex flex-col gap-6 border-t border-ivory-100/15 py-8 text-xs leading-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl">
          This website is a public-information profile and is not an official government website. It does not use or imply government endorsement, and all biographical, programme, and media details should be independently verified.
        </p>
        <a href="#top" className="inline-flex shrink-0 items-center gap-2 uppercase tracking-[0.16em] transition-colors hover:text-gold-200">
          Back to top <Icon name="arrow" className="size-3 -rotate-90" />
        </a>
      </div>
    </footer>
  );
}
