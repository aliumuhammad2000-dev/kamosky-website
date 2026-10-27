import Image from "next/image";

import { galleryImages, impactStoryPlaceholders, mediaPlaceholders } from "./site-data";
import { Icon } from "./site-icons";
import { PlaceholderVisual } from "./placeholder-visual";
import { SectionIntro } from "./section-intro";

export function ImpactStoriesSection() {
  return (
    <section id="stories" className="site-container section-space">
      <SectionIntro
        eyebrow="03 · Public impact"
        title="Stories with room for the facts to lead."
        description="Impact stories will be published here only when the people, places, dates, and outcomes can be attributed to a reliable public source."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {impactStoryPlaceholders.map((label, index) => (
          <article
            key={label}
            className={`border border-forest-900/15 p-6 ${index === 1 ? "bg-gold-100/35" : "bg-white/30"}`}
          >
            <Icon name="quote" className="size-7 text-gold-600" />
            <p className="mt-16 font-serif text-2xl leading-snug text-forest-950">
              A verified public-service story will appear here.
            </p>
            <div className="mt-10 border-t border-forest-900/15 pt-4 text-xs uppercase tracking-[0.16em] text-forest-900/50">
              {label}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function NewsMediaSection() {
  return (
    <section id="media" className="bg-gold-100/35">
      <div className="site-container section-space">
        <SectionIntro
          eyebrow="04 · News & media"
          title="A calm, useful window into the work."
          description="News, statements, interviews, and media appearances can be added here with dates, publication names, and direct source links."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="group relative overflow-hidden bg-forest-950 text-ivory-50">
            <PlaceholderVisual label="Featured media placeholder · source to be added" />
            <div className="p-6 sm:p-8">
              <p className="eyebrow text-gold-200">Featured update · placeholder</p>
              <h3 className="mt-4 max-w-xl font-serif text-3xl leading-tight">
                Verified news coverage and public statements will be featured here.
              </h3>
              <span className="mt-8 inline-flex items-center gap-3 text-sm text-gold-200">
                Read when published <Icon name="arrow" className="size-4" />
              </span>
            </div>
          </article>
          <div className="divide-y divide-forest-900/15 border-y border-forest-900/15">
            {mediaPlaceholders.map((item, index) => (
              <article key={`${item}-${index}`} className="flex gap-5 py-6">
                <span className="font-serif text-xl text-gold-600">0{index + 1}</span>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-forest-900/50">
                    Source pending · date pending
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-forest-950">{item}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  const [featuredGalleryImage, secondaryGalleryImage] = galleryImages;

  return (
    <section id="gallery" className="site-container section-space">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionIntro
          eyebrow="05 · Gallery"
          title="Moments, when they are ready to be shared."
          description="Image placeholders are intentionally used until approved, attributable photographs are available."
        />
        <span className="hidden shrink-0 items-center gap-2 pb-1 text-sm text-forest-900/60 sm:flex">
          <Icon name="camera" className="size-4" /> Image archive
        </span>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-12 sm:grid-rows-2">
        <div className="sm:col-span-7 sm:row-span-2">
          {featuredGalleryImage ? (
            <div className="relative h-full min-h-56 overflow-hidden">
              <Image
                src={featuredGalleryImage.src}
                alt={featuredGalleryImage.alt}
                fill
                sizes="(min-width: 640px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <PlaceholderVisual label="Gallery image placeholder" tall />
          )}
        </div>
        <div className="sm:col-span-5">
          {secondaryGalleryImage ? (
            <div className="relative min-h-56 overflow-hidden">
              <Image
                src={secondaryGalleryImage.src}
                alt={secondaryGalleryImage.alt}
                fill
                sizes="(min-width: 640px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <PlaceholderVisual label="Gallery image placeholder" />
          )}
        </div>
        <div className="sm:col-span-5">
          <PlaceholderVisual label="Gallery image placeholder" />
        </div>
      </div>
    </section>
  );
}
