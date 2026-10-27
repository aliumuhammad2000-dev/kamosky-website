import Image from "next/image";

import { aboutSources, initiatives, profilePortrait } from "./site-data";
import { Icon } from "./site-icons";
import { SectionIntro } from "./section-intro";

export function HeroSection() {
  return (
    <section id="top" className="relative isolate bg-forest-950 text-ivory-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(190,154,81,0.2),transparent_30%),linear-gradient(115deg,#082f27_0%,#123e32_58%,#0c2d26_100%)]" />
      <div className="site-container grid min-h-190 items-end gap-14 pb-14 pt-32 sm:pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20 lg:pt-28">
        <div className="max-w-3xl animate-rise">
          <p className="eyebrow text-gold-200">Public profile · Kamosky</p>
          <h1 className="display-heading mt-6 max-w-3xl text-[clamp(3.6rem,10vw,8.7rem)] leading-[0.82] tracking-[-0.055em] text-ivory-50">
            Alhaji Kamorudeen <span className="text-gold-200">Olawale Yusuf</span>
          </h1>
          <div className="mt-9 flex max-w-xl gap-4 border-l border-gold-300/70 pl-5 sm:pl-7">
            <p className="max-w-md text-lg leading-8 text-ivory-100/80 sm:text-xl">
              Personal Assistant on Special Duties to the President of Nigeria.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#about" className="button button-gold">
              Explore the profile <Icon name="arrow" className="size-4" />
            </a>
            <a href="#initiatives" className="button button-outline-light">
              View initiatives <Icon name="arrow" className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-rise [animation-delay:120ms] lg:mx-0 lg:justify-self-end">
          <div className="absolute -left-5 -top-5 size-24 border-l border-t border-gold-300/60 sm:-left-8 sm:-top-8 sm:size-32" />
          <div className="relative aspect-1952/2146 overflow-hidden border border-ivory-100/15 bg-forest-950">
            <Image
              src={profilePortrait.src}
              alt={profilePortrait.alt}
              fill
              sizes="(min-width: 1024px) 36vw, (min-width: 640px) 60vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="site-container flex items-center justify-between border-t border-ivory-100/15 py-5 text-xs uppercase tracking-[0.18em] text-ivory-100/50">
        <span>Public information platform</span>
        <a href="#about" className="hidden items-center gap-3 transition-colors hover:text-gold-200 sm:flex">
          Scroll to discover <Icon name="arrow" className="size-4" />
        </a>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="site-container section-space">
      <SectionIntro
        eyebrow="01 · About"
        title="About Alhaji Kamorudeen Olawale Yusuf"
        description="A sourced overview of Kamosky's background, public service and documented community engagement."
      />
      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-20">
        <div className="border-t border-forest-900/20 pt-5">
          <p className="text-sm uppercase tracking-[0.18em] text-forest-900/50">Public profile</p>
          <p className="mt-5 max-w-sm font-serif text-2xl leading-snug text-forest-950">
            Service, education and community support remain central themes in the public record.
          </p>
        </div>
        <div className="max-w-2xl space-y-6 text-base leading-8 text-forest-900/70 sm:text-lg">
          <p>
            Alhaji Kamorudeen Olawale Yusuf, popularly known as Kamosky, is a Nigerian public servant serving as Personal Assistant on Special Duties to President Bola Ahmed Tinubu. His public profile connects his roots in Ado-Odo, Ogun State, with an interest in education, professional development and community support.
          </p>
          <p>
            His self-published profile lists a degree in Chemistry Education from the University of Lagos, a postgraduate diploma in Security and Strategic Studies, and an MBA focused on Operations and Projects Management. These qualifications are presented as claims from his profile until independently confirmed.
          </p>
          <p>
            Public reporting has documented education support and vocational skills training associated with Yusuf and the Alliance for Kamosky. In October 2025, The Punch reported a school-materials distribution across public primary schools in Ogun State. Vanguard also reported on a vocational training programme associated with the Alliance for Kamosky in 2025.
          </p>
          <p>
            These activities provide a starting point for understanding the areas of public and community engagement associated with his work. This website brings together his background, documented initiatives, public engagements and related media coverage, with sources provided wherever information is available.
          </p>
          <div className="border-t border-forest-900/15 pt-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-900/60">Sources</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {aboutSources.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-arrow"
                  >
                    {source.label} <Icon name="arrow" className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InitiativesSection() {
  return (
    <section id="initiatives" className="bg-forest-900 text-ivory-50">
      <div className="site-container section-space">
        <SectionIntro
          eyebrow="02 · Areas of focus"
          title="Where service meets the everyday."
          description="These four themes provide a clear structure for future updates. Programme names, outcomes, dates, and locations should be replaced with verified information before publication."
          tone="light"
        />
        <div className="mt-14 grid gap-px overflow-hidden border border-ivory-100/15 bg-ivory-100/15 sm:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((initiative) => (
            <article
              key={initiative.title}
              className="group bg-forest-900 p-6 transition-colors hover:bg-forest-800 sm:p-8"
            >
              {initiative.image ? (
                <div className="relative mb-8 aspect-16/10 overflow-hidden border border-ivory-100/15">
                  <Image
                    src={initiative.image.src}
                    alt={initiative.image.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center border border-gold-300/50 text-gold-200">
                  <Icon name={initiative.icon} />
                </span>
                <span className="font-serif text-sm text-ivory-100/40">{initiative.number}</span>
              </div>
              <h3 className="mt-16 font-serif text-2xl text-ivory-50">{initiative.title}</h3>
              <p className="mt-4 text-sm leading-6 text-ivory-100/60">{initiative.text}</p>
              <span className="mt-8 inline-flex text-gold-200 transition-transform group-hover:translate-x-1">
                <Icon name="arrow" className="size-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
