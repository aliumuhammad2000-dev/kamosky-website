import { AboutSection, HeroSection, InitiativesSection } from "./components/profile-sections";
import { GallerySection, ImpactStoriesSection, NewsMediaSection } from "./components/content-sections";
import { ContactCTA, SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export default function Home() {
  return (
    <main className="overflow-hidden bg-ivory-50 text-forest-950">
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <InitiativesSection />
      <ImpactStoriesSection />
      <NewsMediaSection />
      <GallerySection />
      <ContactCTA />
      <SiteFooter />
    </main>
  );
}
