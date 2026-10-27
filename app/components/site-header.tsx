import { navigationItems } from "./site-data";
import { Icon } from "./site-icons";

function NavigationLinks() {
  return (
    <>
      {navigationItems.map((item) => (
        <a key={item.href} href={item.href} className="nav-link">
          {item.label}
        </a>
      ))}
    </>
  );
}

function MobileNavigation() {
  return (
    <details className="relative md:hidden">
      <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-ivory-100/30 text-ivory-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300 [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Open navigation menu</span>
        <Icon name="menu" className="size-5" />
      </summary>
      <nav
        className="absolute right-0 top-14 w-64 border border-forest-900/10 bg-ivory-50 p-3 text-forest-950 shadow-2xl"
        aria-label="Mobile navigation"
      >
        {navigationItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block border-b border-forest-900/10 px-4 py-3 text-sm font-medium last:border-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold-500"
          >
            {item.label}
          </a>
        ))}
        <a href="#contact" className="button button-small button-dark mt-3 w-full">
          Contact
        </a>
      </nav>
    </details>
  );
}

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-ivory-100/15 text-ivory-50">
      <div className="site-container flex h-20 items-center justify-between">
        <a
          href="#top"
          className="group inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
          aria-label="Kamosky home"
        >
          <span className="flex size-9 items-center justify-center border border-gold-300/70 font-serif text-lg text-gold-200">
            K
          </span>
          <span className="font-serif text-xl tracking-[0.16em]">KAMOSKY</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <NavigationLinks />
          <a href="#contact" className="button button-small button-light">
            Contact
          </a>
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}
