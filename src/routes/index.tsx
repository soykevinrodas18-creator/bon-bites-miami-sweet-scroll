import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  MapPin,
  Menu as MenuIcon,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import heroImage from "../assets/bonbites-hero.jpg";
import pistachioImage from "../assets/marquesa-pistachio.jpg";
import nutellaImage from "../assets/marquesa-nutella.jpg";
import spreadImage from "../assets/bonbites-spread.jpg";

const INSTAGRAM = "https://www.instagram.com/bonbites.miami/";
const DOORDASH =
  "https://www.doordash.com/store/44358729?utm_source=mx_share&aw=TQuZAv5ae31P-b8W";

const products = [
  {
    name: "Nutella Marquesa",
    description: "Silky hazelnut chocolate, cream and layers of crisp cookies.",
    price: "From $12",
    category: "Marquesas",
    image: nutellaImage,
    badge: "BEST SELLER",
  },
  {
    name: "Pistachio Marquesa",
    description: "Pistachio cream, cookie layers and a generous roasted crunch.",
    price: "From $12",
    category: "Marquesas",
    image: pistachioImage,
    badge: "FAN FAVORITE",
  },
  {
    name: "Passion Fruit Marquesa",
    description: "Bright passion fruit cream with a fresh tropical finish.",
    price: "From $12",
    category: "Marquesas",
    image: spreadImage,
  },
  {
    name: "Mini Dulces",
    description: "Bite-size sweets made for celebrations, gifts and sharing.",
    price: "See menu",
    category: "Mini Dulces",
    image: heroImage,
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BON BITES Miami | Marquesas in Doral" },
      {
        name: "description",
        content:
          "Discover BON BITES marquesas and mini desserts in Doral, Miami. Browse favorites and order daily from 2–9 pm.",
      },
      { property: "og:title", content: "BON BITES Miami | Best Marquesas Everrr" },
      {
        property: "og:description",
        content: "Creamy, crunchy and made for your sweetest moments. Order BON BITES in Doral.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          name: "BON BITES",
          servesCuisine: "Desserts",
          address: { "@type": "PostalAddress", addressLocality: "Doral", addressRegion: "FL" },
          sameAs: [INSTAGRAM],
          openingHours: "Mo-Su 14:00-21:00",
        }),
      },
    ],
  }),
  component: BonBitesPage,
});

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-mark ${compact ? "brand-mark-compact" : ""}`}>
      BON
      <br />
      BITES
    </span>
  );
}

function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SocialIcon({ label }: { label: "TikTok" | "Facebook" }) {
  if (label === "Facebook") {
    return <span className="font-display text-lg font-black" aria-hidden="true">f</span>;
  }
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
      <path d="M14.3 3c.4 2.4 1.8 3.8 4.1 4.1v3.1a9.1 9.1 0 0 1-4-1.2v6.2a6.2 6.2 0 1 1-5.3-6.1v3.2a3 3 0 1 0 2.2 2.9V3h3Z" />
    </svg>
  );
}

function BonBitesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const visibleProducts = category === "All" ? products : products.filter((item) => item.category === category);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-nav-border bg-nav/95 backdrop-blur-xl">
        <nav className="mx-auto grid h-20 max-w-screen-2xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:flex sm:px-7 lg:px-12" aria-label="Main navigation">
          <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="BON BITES home">
            <BrandMark compact />
            <span className="hidden font-display text-xs font-bold uppercase text-nav-foreground/65 sm:block">Doral, Florida</span>
          </a>
          <div className="ml-auto hidden items-center gap-7 lg:flex">
            {[
              ["Home", "#home"], ["Menu", "#menu"], ["About", "#about"], ["Gallery", "#gallery"], ["Contact", "#contact"],
            ].map(([label, href]) => <a key={label} href={href} className="nav-link">{label}</a>)}
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="icon-link" aria-label="Instagram"><InstagramIcon /></a>
            <a href={DOORDASH} target="_blank" rel="noreferrer" className="button button-light">Order now <ArrowUpRight className="size-4" /></a>
          </div>
          <button className="icon-button ml-auto lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-nav-border bg-nav px-4 py-5 lg:hidden">
            <div className="grid gap-1">
              {["Home", "Menu", "About", "Gallery", "Contact"].map((label) => (
                <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="mobile-nav-link">{label}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative min-h-[94svh] bg-primary pt-20 text-primary-foreground">
          <div className="hero-grid mx-auto grid min-h-[calc(94svh-5rem)] max-w-screen-2xl items-stretch lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative z-10 flex flex-col justify-center px-5 py-12 sm:px-10 lg:px-16 xl:px-24">
              <div className="hero-kicker"><Sparkles className="size-4" /> Made in Doral · Miami</div>
              <h1 className="mt-6 font-display text-[clamp(4.4rem,13vw,10rem)] font-black uppercase leading-[0.72]">
                BON<br />BITES
              </h1>
              <p className="mt-8 max-w-lg font-accent text-3xl leading-none sm:text-4xl">Best marquesas everrr.</p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
                Creamy layers, crunchy cookies and bold flavors made to turn any moment into a sweet one.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={DOORDASH} target="_blank" rel="noreferrer" className="button button-light button-large">Order now <ShoppingBag className="size-4" /></a>
                <a href="#menu" className="button button-outline button-large">View menu <ArrowDown className="size-4" /></a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hero-social" aria-label="Instagram"><InstagramIcon /></a>
                <span className="hero-social opacity-50" aria-label="TikTok"><SocialIcon label="TikTok" /></span>
                <span className="hero-social opacity-50" aria-label="Facebook"><SocialIcon label="Facebook" /></span>
              </div>
            </div>
            <div className="relative min-h-[55svh] overflow-hidden lg:min-h-0">
              <img src={heroImage} alt="BON BITES chocolate marquesa with creamy cookie layers" width={1200} height={1504} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-hero-overlay lg:hidden" />
              <div className="absolute bottom-5 right-5 rotate-3 bg-accent px-5 py-4 text-center text-accent-foreground shadow-sticker">
                <span className="font-display text-xs font-black uppercase">Open daily</span><br />
                <span className="font-accent text-2xl">2—9 pm</span>
              </div>
            </div>
          </div>
          <div className="marquee" aria-hidden="true"><span>CRUNCHY · CREAMY · MADE WITH LOVE · MIAMI · CRUNCHY · CREAMY · MADE WITH LOVE · MIAMI ·</span></div>
        </section>

        <section id="menu" className="section-shell bg-surface">
          <div className="mx-auto max-w-7xl" data-reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow">Pick your craving</p>
                <h2 className="display-title">The menu</h2>
              </div>
              <p className="section-intro">Layered, chilled and finished by hand. Available in regular, medium and large.</p>
            </div>
            <div className="mt-8 flex gap-2 overflow-x-auto pb-2" aria-label="Menu filters">
              {["All", "Marquesas", "Mini Dulces"].map((item) => (
                <button key={item} onClick={() => setCategory(item)} className={`filter-chip ${category === item ? "filter-chip-active" : ""}`}>{item}</button>
              ))}
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {visibleProducts.map((product) => (
                <article key={product.name} className="product-card group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img src={product.image} alt={`${product.name} by BON BITES`} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                  </div>
                  <div className="p-5">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3">
                      <h3 className="min-w-0 font-display text-2xl font-black uppercase leading-none">{product.name}</h3>
                      <span className="shrink-0 font-display text-sm font-black text-primary">{product.price}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                    <a href={DOORDASH} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold uppercase text-primary">Order now <ArrowUpRight className="size-4" /></a>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">Current flavors and final pricing are confirmed on DoorDash.</p>
          </div>
        </section>

        <section className="section-shell bg-foreground text-background" id="favorites">
          <div className="mx-auto max-w-7xl" data-reveal>
            <p className="eyebrow text-accent">Most wanted</p>
            <div className="mt-3 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
              <h2 className="display-title max-w-4xl">Our favorites</h2>
              <p className="max-w-sm text-background/60">The flavors BON BITES regulars keep coming back for.</p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {products.slice(0, 2).map((product, index) => (
                <article key={product.name} className="favorite-card group">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img src={product.image} alt={`${product.name}, a BON BITES favorite`} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" />
                    <span className="favorite-number">0{index + 1}</span>
                    <span className="product-badge">BEST SELLER</span>
                  </div>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 bg-background p-6 text-foreground">
                    <div className="min-w-0"><h3 className="font-display text-3xl font-black uppercase">{product.name}</h3><p className="mt-2 text-sm text-muted-foreground">{product.description}</p></div>
                    <a href={DOORDASH} target="_blank" rel="noreferrer" className="round-arrow" aria-label={`Order ${product.name}`}><ArrowUpRight className="size-5" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-shell bg-accent text-accent-foreground">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2" data-reveal>
            <div className="relative order-2 lg:order-1">
              <img src={spreadImage} alt="A colorful assortment of BON BITES marquesas" width={1600} height={1008} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="absolute -bottom-5 -right-2 -rotate-3 bg-primary px-6 py-5 text-primary-foreground shadow-sticker sm:right-8">
                <BrandMark compact />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-10">
              <p className="eyebrow">About BON BITES</p>
              <h2 className="display-title mt-3">Dessert,<br />but make it<br />a moment.</h2>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-accent-foreground/75">Born in Doral and made for sharing, BON BITES turns classic marquesas into bold, camera-ready desserts with serious texture and personality.</p>
              <div className="mt-7 flex flex-wrap gap-2"><span className="identity-chip">Made in Miami</span><span className="identity-chip">Made to share</span><span className="identity-chip">Always fresh</span></div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section-shell bg-background">
          <div className="mx-auto max-w-7xl" data-reveal>
            <div className="section-heading"><div><p className="eyebrow">Fresh from the feed</p><h2 className="display-title">Sweet scenes</h2></div><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="button button-dark hidden sm:inline-flex"><InstagramIcon /> Follow us</a></div>
            <div className="gallery-grid mt-9">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="gallery-item gallery-tall"><img src={heroImage} alt="Chocolate marquesa in BON BITES red" width={1200} height={1504} loading="lazy" /></a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="gallery-item"><img src={pistachioImage} alt="Pistachio marquesa close-up" width={1024} height={1024} loading="lazy" /></a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="gallery-item"><img src={nutellaImage} alt="Nutella marquesa close-up" width={1024} height={1024} loading="lazy" /></a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="gallery-item gallery-wide"><img src={spreadImage} alt="BON BITES colorful marquesa collection" width={1600} height={1008} loading="lazy" /></a>
            </div>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="button button-dark mt-6 w-full sm:hidden"><InstagramIcon /> Follow us on Instagram</a>
          </div>
        </section>

        <section className="relative min-h-[600px] overflow-hidden">
          <img src={spreadImage} alt="BON BITES marquesas ready to order" width={1600} height={1008} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-cta-overlay" />
          <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-5 py-20 text-center text-primary-foreground" data-reveal>
            <p className="eyebrow text-accent">Your sweet sign</p>
            <h2 className="mt-4 font-display text-[clamp(4rem,12vw,9rem)] font-black uppercase leading-[0.78]">Ready for<br />a bite?</h2>
            <div className="mt-9 flex w-full max-w-md flex-col justify-center gap-3 sm:flex-row"><a href={DOORDASH} target="_blank" rel="noreferrer" className="button button-light button-large">Order now</a><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="button button-outline button-large">Contact us</a></div>
          </div>
        </section>

        <section id="contact" className="section-shell bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl" data-reveal>
            <p className="eyebrow text-accent">Find us</p><h2 className="display-title mt-3">Come get<br />your bite.</h2>
            <div className="mt-10 grid gap-px bg-primary-foreground/20 sm:grid-cols-3">
              <div className="contact-cell"><MapPin className="size-6 text-accent" /><p className="contact-label">Location</p><p className="contact-value">Doral, Florida</p></div>
              <div className="contact-cell"><Clock3 className="size-6 text-accent" /><p className="contact-label">Hours</p><p className="contact-value">Every day · 2–9 pm</p></div>
              <div className="contact-cell"><InstagramIcon className="size-6 text-accent" /><p className="contact-label">Instagram</p><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="contact-value">@bonbites.miami</a></div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={DOORDASH} target="_blank" rel="noreferrer" className="button button-light button-large">Order on DoorDash <ArrowUpRight className="size-4" /></a><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="button button-outline button-large">Send us a DM</a></div>
          </div>
        </section>
      </main>

      <footer className="bg-nav px-5 pb-28 pt-12 text-nav-foreground md:pb-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div><BrandMark /><p className="mt-5 max-w-xs text-sm text-nav-foreground/55">Marquesas, mini dulces and sweet moments—made in Doral.</p></div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold uppercase"><a href="#menu">Menu</a><a href="#about">About</a><a href="#contact">Contact</a><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a><span className="opacity-40">TikTok</span><span className="opacity-40">Facebook</span></div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-nav-border pt-5 text-xs text-nav-foreground/45">© 2026 BON BITES. All rights reserved.</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary-foreground/20 bg-primary p-3 backdrop-blur-xl md:hidden"><a href={DOORDASH} target="_blank" rel="noreferrer" className="button button-light w-full">Order now <ShoppingBag className="size-4" /></a></div>
    </div>
  );
}