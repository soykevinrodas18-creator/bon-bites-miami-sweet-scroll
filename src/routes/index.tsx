import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Menu as MenuIcon,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import heroImage from "../assets/bonbites-hero.jpg";
import pistachioImage from "../assets/marquesa-pistachio.jpg";
import nutellaImage from "../assets/marquesa-nutella.jpg";
import spreadImage from "../assets/bonbites-spread.jpg";
import slide1 from "../assets/bonbites-slide-1.jpg";
import slide2 from "../assets/bonbites-slide-2.jpg";
import slide3 from "../assets/bonbites-slide-3.jpg";
import slide4 from "../assets/bonbites-slide-4.jpg";
import slide5 from "../assets/bonbites-slide-5.jpg";
import slide6 from "../assets/bonbites-slide-6.jpg";
import slide7 from "../assets/bonbites-slide-7.jpg";

const INSTAGRAM = "https://www.instagram.com/bonbites.miami/";
const TIKTOK = "https://www.tiktok.com/@bonbites.miami?lang=en";
const WHATSAPP = "https://wa.me/17862237818?text=Hola%20BON%20BITES!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido%20%F0%9F%8D%B0";
const DOORDASH =
  "https://www.doordash.com/store/44358729?utm_source=mx_share&aw=TQuZAv5ae31P-b8W";

const products = [
  {
    name: "Nutella Marquesa",
    description: "Chocolate con avellanas, crema y capas de galletas crujientes.",
    price: "Desde $12",
    category: "Marquesas",
    image: nutellaImage,
    badge: "MÁS VENDIDO",
  },
  {
    name: "Pistachio Marquesa",
    description: "Crema de pistacho, capas de galleta y un generoso crujido tostado.",
    price: "Desde $12",
    category: "Marquesas",
    image: pistachioImage,
    badge: "FAVORITO DEL PÚBLICO",
  },
  {
    name: "Passion Fruit Marquesa",
    description: "Crema de maracuyá con un fresco acabado tropical.",
    price: "Desde $12",
    category: "Marquesas",
    image: spreadImage,
  },
  {
    name: "Mini Dulces",
    description: "Dulces en tamaño bocado, perfectos para celebraciones, regalos y compartir.",
    price: "Ver menú",
    category: "Mini Dulces",
    image: heroImage,
  },
];


const IG_SLIDES = [
  { src: slide1, alt: "Torre de marquesas BON BITES variadas" },
  { src: slide2, alt: "Variedad de marquesas BON BITES sobre madera" },
  { src: slide3, alt: "Marquesa de coco BON BITES con galletas" },
  { src: slide4, alt: "Disfrutando las marquesas BON BITES recién hechas" },
  { src: slide5, alt: "Pack de 6 sabores exclusivos BON BITES" },
  { src: slide6, alt: "Manos sosteniendo 4 sabores de marquesas BON BITES" },
  { src: slide7, alt: "Marquesa de Dulce de Leche sobre tabla de madera" },
];

function IgCarousel() {
  const isHovered = useRef(false);

  return (
    <div
      className="ig-carousel-root mt-9"
      onMouseEnter={() => { isHovered.current = true; }}
      onMouseLeave={() => { isHovered.current = false; }}
      style={{ overflow: "hidden", width: "100%" }}
    >
      <div
        className="ig-infinite-track"
        style={{
          display: "flex",
          gap: "12px",
          width: "max-content",
          animation: "ig-scroll 30s linear infinite",
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
      >
        {/* Doble loop para efecto infinito continuo */}
        {[...IG_SLIDES, ...IG_SLIDES].map((slide, i) => (
          <a
            key={i}
            href="https://www.instagram.com/bonbites.miami/"
            target="_blank"
            rel="noreferrer"
            className="ig-carousel-slide"
            aria-label={slide.alt}
            style={{ flex: "0 0 auto" }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              width={800}
              height={800}
              loading="lazy"
              className="ig-carousel-img"
            />
            <span className="ig-carousel-overlay">Ver en Instagram ↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}


function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside aria-label="Atención por WhatsApp" className="fixed bottom-20 right-4 z-50 flex items-center md:bottom-7 md:right-7">
      {/* Tooltip */}
      <div
        className={`mr-3 hidden items-center gap-2 rounded-full border border-border bg-background/95 px-4 py-2 text-xs font-bold text-foreground shadow-xl backdrop-blur-md transition-all duration-300 sm:flex ${
          showTooltip ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0 hover:pointer-events-auto hover:scale-100 hover:opacity-100"
        }`}
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500"></span>
        </span>
        <span>¡Escríbenos por WhatsApp!</span>
      </div>

      {/* Bubble Button */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-bubble group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Contactar por WhatsApp (+1 786 223-7818)"
        id="whatsapp-floating-btn"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30"></span>

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          className="size-8 fill-current transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </aside>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BON BITES Miami | Marquesas en Doral" },
      {
        name: "description",
        content:
          "Descubre las marquesas y mini postres BON BITES en Doral, Miami. Explora nuestros favoritos y ordena todos los días de 2–9 pm.",
      },
      { property: "og:title", content: "BON BITES Miami | Best Marquesas Everrr" },
      {
        property: "og:description",
        content: "Cremosas, crujientes y hechas para tus momentos más dulces. Ordena BON BITES en Doral.",
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
          sameAs: [INSTAGRAM, TIKTOK],
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
  const [category, setCategory] = useState("Todos");

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const visibleProducts = category === "Todos" ? products : products.filter((item) => item.category === category);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-nav-border bg-nav/95 backdrop-blur-xl">
        <nav className="mx-auto grid h-20 max-w-screen-2xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:flex sm:px-7 lg:px-12" aria-label="Navegación principal">
          <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Inicio BON BITES">
            <BrandMark compact />
          </a>
          <div className="ml-auto hidden items-center gap-7 lg:flex">
            {[
              ["Inicio", "#home"], ["Menú", "#menu"], ["Nosotros", "#about"], ["Galería", "#gallery"], ["Contacto", "#contact"],
            ].map(([label, href]) => <a key={label} href={href} className="nav-link">{label}</a>)}
            
            <a href={DOORDASH} target="_blank" rel="noreferrer" className="button button-light">Ordenar ahora <ArrowUpRight className="size-4" /></a>
          </div>
          <button className="icon-button ml-auto lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}>
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
              
              <h1 className="mt-6 font-display text-[clamp(4.4rem,13vw,10rem)] font-black uppercase leading-[0.72]">
                BON<br />BITES
              </h1>
              <p className="mt-8 max-w-lg font-accent text-3xl leading-none sm:text-4xl">Las mejores marquesas.</p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
                Capas cremosas, galletas crujientes y sabores únicos para convertir cualquier momento en algo dulce.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={DOORDASH} target="_blank" rel="noreferrer" className="button button-light button-large">Ordenar ahora <ShoppingBag className="size-4" /></a>
                
              </div>
              <div className="mt-8 flex items-center gap-3">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hero-social" aria-label="Instagram"><InstagramIcon /></a>
                <a href={TIKTOK} target="_blank" rel="noreferrer" className="hero-social" aria-label="TikTok @bonbites.miami"><SocialIcon label="TikTok" /></a>
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
          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              <span>CRUJIENTE · CREMOSO · HECHO CON AMOR · MIAMI · LAS MEJORES MARQUESAS · SIEMPRE FRESCO · DORAL · CRUJIENTE · CREMOSO · HECHO CON AMOR · MIAMI · LAS MEJORES MARQUESAS · SIEMPRE FRESCO · DORAL · CRUJIENTE · CREMOSO · HECHO CON AMOR · MIAMI · LAS MEJORES MARQUESAS · SIEMPRE FRESCO · DORAL · CRUJIENTE · CREMOSO · HECHO CON AMOR · MIAMI · LAS MEJORES MARQUESAS · SIEMPRE FRESCO · DORAL · </span>
              <span>CRUJIENTE · CREMOSO · HECHO CON AMOR · MIAMI · LAS MEJORES MARQUESAS · SIEMPRE FRESCO · DORAL · CRUJIENTE · CREMOSO · HECHO CON AMOR · MIAMI · LAS MEJORES MARQUESAS · SIEMPRE FRESCO · DORAL · CRUJIENTE · CREMOSO · HECHO CON AMOR · MIAMI · LAS MEJORES MARQUESAS · SIEMPRE FRESCO · DORAL · CRUJIENTE · CREMOSO · HECHO CON AMOR · MIAMI · LAS MEJORES MARQUESAS · SIEMPRE FRESCO · DORAL · </span>
            </div>
          </div>
        </section>

        <section id="menu" className="section-shell bg-surface">
          <div className="mx-auto max-w-7xl" data-reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow">Elige tu antojo</p>
                <h2 className="display-title">El menú</h2>
              </div>
              <p className="section-intro">En capas, refrigeradas y terminadas a mano. Disponibles en regular, mediano y grande.</p>
            </div>
            <div className="mt-8 flex gap-2 overflow-x-auto pb-2" aria-label="Filtros del menú">
              {["Todos", "Marquesas", "Mini Dulces"].map((item) => (
                <button key={item} onClick={() => setCategory(item)} className={`filter-chip ${category === item ? "filter-chip-active" : ""}`}>{item}</button>
              ))}
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {visibleProducts.map((product) => (
                <article key={product.name} className="product-card group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img src={product.image} alt={`${product.name} por BON BITES`} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                  </div>
                  <div className="p-5">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3">
                      <h3 className="min-w-0 font-display text-2xl font-black uppercase leading-none">{product.name}</h3>
                      <span className="shrink-0 font-display text-sm font-black text-primary">{product.price}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                    <a href={DOORDASH} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold uppercase text-primary">Ordenar ahora <ArrowUpRight className="size-4" /></a>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">Los sabores actuales y precios finales se confirman en DoorDash.</p>
          </div>
        </section>

        <section className="section-shell bg-foreground text-background" id="favorites">
          <div className="mx-auto max-w-7xl" data-reveal>
            <p className="eyebrow text-accent">Los más pedidos</p>
            <div className="mt-3 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
              <h2 className="display-title max-w-4xl">Nuestros favoritos</h2>
              <p className="max-w-sm text-background/60">Los sabores a los que los clientes de BON BITES siempre regresan.</p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {products.slice(0, 2).map((product, index) => (
                <article key={product.name} className="favorite-card group">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img src={product.image} alt={`${product.name}, favorito de BON BITES`} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" />
                    <span className="favorite-number">0{index + 1}</span>
                    <span className="product-badge">MÁS VENDIDO</span>
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
              <img src={spreadImage} alt="Variedad colorida de marquesas BON BITES" width={1600} height={1008} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="absolute -bottom-5 -right-2 -rotate-3 bg-primary-foreground px-6 py-5 text-primary shadow-sticker sm:right-8">
                <BrandMark compact />
              </div>

            </div>
            <div className="order-1 lg:order-2 lg:pl-10">
              <p className="eyebrow">Sobre BON BITES</p>
              <h2 className="display-title mt-3">Dessert,<br />but make it<br />a moment.</h2>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-accent-foreground/75">Nacido en Doral y hecho para compartir, BON BITES convierte las marquesas clásicas en postres atrevidos, listos para la cámara, con textura y personalidad únicos.</p>
              <div className="mt-7 flex flex-wrap gap-2"><span className="identity-chip">Hecho en Miami</span><span className="identity-chip">Para compartir</span><span className="identity-chip">Siempre fresco</span></div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section-shell bg-background overflow-hidden">
          <div className="mx-auto max-w-7xl" data-reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow">Fresco del feed</p>
                <h2 className="display-title">Momentos dulces</h2>
              </div>

            </div>
          </div>
          <IgCarousel />

        </section>

        <section className="relative min-h-[600px] overflow-hidden">
          <img src={spreadImage} alt="Marquesas BON BITES listas para ordenar" width={1600} height={1008} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-cta-overlay" />
          <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-5 py-20 text-center text-primary-foreground" data-reveal>
            <p className="eyebrow text-accent">Tu señal dulce</p>
            <h2 className="mt-4 font-display text-[clamp(4rem,12vw,9rem)] font-black uppercase leading-[0.78]">¿Listo para<br />un mordisco?</h2>
            <div className="mt-9 flex w-full max-w-md flex-col justify-center gap-3 sm:flex-row"><a href={DOORDASH} target="_blank" rel="noreferrer" className="button button-light button-large">Ordenar ahora</a><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="button button-outline button-large">Contáctanos</a></div>
          </div>
        </section>

        <section id="contact" className="section-shell bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl" data-reveal>
            <p className="eyebrow text-accent">Encuéntranos</p><h2 className="display-title mt-3">Ven a buscar<br />tu mordisco.</h2>
            <div className="mt-10 grid gap-px bg-primary-foreground/20 sm:grid-cols-3">
              <div className="contact-cell"><MapPin className="size-6 text-accent" /><p className="contact-label">Ubicación</p><p className="contact-value">Doral, Florida</p></div>
              <div className="contact-cell"><Clock3 className="size-6 text-accent" /><p className="contact-label">Horario</p><p className="contact-value">Todos los días · 2–9 pm</p></div>
              <div className="contact-cell"><InstagramIcon className="size-6 text-accent" /><p className="contact-label">Instagram</p><a href={INSTAGRAM} target="_blank" rel="noreferrer" className="contact-value">@bonbites.miami</a></div>
            </div>

          </div>
        </section>
      </main>

      <footer className="bg-nav px-5 pb-28 pt-12 text-nav-foreground md:pb-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
          
          
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-nav-border pt-5 text-xs text-nav-foreground/45">© 2026 BON BITES. Todos los derechos reservados.</div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-primary-foreground/20 bg-primary p-3 backdrop-blur-xl md:hidden"><a href={DOORDASH} target="_blank" rel="noreferrer" className="button button-light w-full">Ordenar ahora <ShoppingBag className="size-4" /></a></div>
      <WhatsAppFloatingButton />
    </div>
  );
}