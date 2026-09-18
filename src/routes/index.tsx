import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  Clock3,
  Gift,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Wheat,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/raj-sweets-hero.jpg";
import mithaiImage from "@/assets/raj-sweets-mithai.jpg";
import namkeenImage from "@/assets/raj-sweets-namkeen.jpg";
import giftingImage from "@/assets/raj-sweets-gifting.jpg";

const phoneDisplay = "+91 98262 34444";
const phoneLink = "+919826234444";
const whatsappBase = "https://wa.me/919826234444";

const products = [
  { name: "Kaju Katli", note: "Silver-leafed classic", marker: "◇" },
  { name: "Motichoor Laddu", note: "Celebration favourite", marker: "●" },
  { name: "Gulab Jamun", note: "Soft, warm & syrupy", marker: "✦" },
  { name: "Milk Cake", note: "Slow-cooked goodness", marker: "■" },
  { name: "Samosa & Kachori", note: "Crisp, hot & fresh", marker: "△" },
  { name: "Festive Boxes", note: "Made to be gifted", marker: "✺" },
];

const reviews = [
  { name: "Neha Sharma", relation: "Nagda", text: "Their kaju katli has been part of every Diwali at our home. Always fresh, beautifully packed, and never too sweet." },
  { name: "Manish Jain", relation: "Regular customer", text: "The morning kachori and samosa are unbeatable. Raj Sweets has kept the same quality our family trusts for years." },
  { name: "Pooja Rathore", relation: "Wedding order", text: "They prepared 300 gift boxes for our wedding. Everything arrived on time and the presentation looked genuinely premium." },
];

const faqs = [
  ["Do you make sweets in pure ghee?", "Yes. Our signature mithai is prepared using quality ingredients and pure ghee for an authentic taste."],
  ["Can I place a bulk wedding or festival order?", "Absolutely. We prepare custom quantities and premium gift boxes for weddings, festivals and corporate occasions. Contact us early for larger orders."],
  ["Do you accept orders on WhatsApp?", `Yes. Message us on ${phoneDisplay} with your preferred items and quantity, and our team will confirm availability.`],
  ["How fresh are the products?", "Our sweets, savouries and snacks are prepared in regular fresh batches throughout the day."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raj Sweets Nagda | Pure Ghee Mithai, Namkeen & Gift Boxes" },
      { name: "description", content: "Visit Raj Sweets near Nagda Bus Stand for fresh pure ghee mithai, samosa, kachori, namkeen and festive gift boxes. Open daily 8 AM–10 PM." },
      { property: "og:title", content: "Raj Sweets — Authentic Mithai & Namkeen in Nagda" },
      { property: "og:description", content: "25 years of pure ghee mithai, fresh namkeen and festive gifting in the heart of Nagda." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Bakery",
        name: "Raj Sweets",
        telephone: phoneDisplay,
        address: {
          "@type": "PostalAddress",
          streetAddress: "12, Mahatma Gandhi Road, Near Bus Stand",
          addressLocality: "Nagda",
          addressRegion: "Madhya Pradesh",
          postalCode: "456335",
          addressCountry: "IN",
        },
        openingHours: "Mo-Su 08:00-22:00",
      }),
    }],
  }),
  component: RajSweetsPage,
});

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Raj Sweets home">
      <span className="relative grid size-11 shrink-0 place-items-center rounded-full border-2 border-current bg-saffron text-maroon shadow-[3px_3px_0_var(--maroon)] transition-transform group-hover:-rotate-6">
        <span className="font-display text-xl">रा</span>
      </span>
      {!compact && (
        <span className="leading-none">
          <strong className="block font-display text-xl text-maroon">Raj Sweets</strong>
          <small className="mt-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Nagda • Since 1999</small>
        </span>
      )}
    </a>
  );
}

function RajSweetsPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Namaste Raj Sweets!%0A%0AName: ${encodeURIComponent(String(data.get("name") ?? ""))}%0APhone: ${encodeURIComponent(String(data.get("phone") ?? ""))}%0AEnquiry: ${encodeURIComponent(String(data.get("message") ?? ""))}`;
    window.open(`${whatsappBase}?text=${message}`, "_blank", "noopener,noreferrer");
  }

  const navItems = ["About", "Favourites", "Gallery", "Reviews", "Visit"];

  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <div className="bg-maroon px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground">
        Open daily 8:00 AM – 10:00 PM <span className="mx-2 text-saffron">✦</span> Fresh batches throughout the day
      </div>

      <header className="sticky top-0 z-40 border-b-2 border-maroon/20 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <BrandMark />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-maroon transition-colors hover:text-saffron-deep">{item}</a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <Button variant="outline" asChild className="border-maroon bg-transparent font-bold text-maroon shadow-none hover:bg-cream-deep">
              <a href={`tel:${phoneLink}`}><Phone /> Call us</a>
            </Button>
            <Button asChild className="bg-maroon font-bold text-primary-foreground shadow-[3px_3px_0_var(--saffron)] hover:bg-maroon-deep">
              <a href={`${whatsappBase}?text=Namaste%20Raj%20Sweets!%20I%20would%20like%20to%20place%20an%20order.`} target="_blank" rel="noreferrer"><MessageCircle /> Order now</a>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="text-maroon lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-maroon/15 bg-cream px-4 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="border-b border-maroon/10 px-2 py-3 font-bold text-maroon">{item}</a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <section className="relative isolate min-h-[calc(100svh-112px)] overflow-hidden bg-saffron px-4 pb-12 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="sunburst absolute inset-0 -z-10 opacity-70" />
        <div className="absolute -left-12 top-24 -z-10 size-44 rounded-full border-[26px] border-cream/30" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative z-10 text-center lg:text-left">
            <div className="mb-5 inline-flex rotate-[-2deg] items-center gap-2 border-2 border-maroon bg-cream px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-maroon shadow-[4px_4px_0_var(--maroon)]">
              <Sparkles className="size-4" /> 25 years of sweetness
            </div>
            <h1 className="font-display text-[clamp(3.4rem,10vw,8.5rem)] leading-[0.84] text-maroon">
              Nagda Ki<br /><span className="text-cream drop-shadow-[4px_4px_0_var(--maroon)]">Meethi Shaan.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-base font-semibold leading-relaxed text-maroon-deep sm:text-xl lg:mx-0">
              Authentic desi mithai, garma-garam namkeen and gift boxes made fresh every day—with the taste your family grew up loving.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button size="lg" asChild className="h-14 bg-maroon px-7 text-base font-black text-primary-foreground shadow-[5px_5px_0_var(--cream)] hover:bg-maroon-deep">
                <a href={`${whatsappBase}?text=Namaste%20Raj%20Sweets!%20Please%20share%20today's%20fresh%20menu.`} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp your order</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 border-2 border-maroon bg-cream/40 px-7 text-base font-black text-maroon shadow-none hover:bg-cream">
                <a href="#favourites">Explore favourites <ArrowRight /></a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold text-maroon lg:justify-start">
              <span className="flex items-center gap-2"><Check className="size-4" /> Pure ingredients</span>
              <span className="flex items-center gap-2"><Check className="size-4" /> Fresh daily</span>
              <span className="flex items-center gap-2"><Check className="size-4" /> Custom gifting</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
            <div className="float-gentle relative rotate-2 border-[7px] border-cream bg-maroon p-2 shadow-[14px_14px_0_var(--maroon)]">
              <img src={heroImage} alt="A festive thali of Raj Sweets kaju katli, motichoor laddu, gulab jamun and milk cake" width={1600} height={1200} fetchPriority="high" className="aspect-[4/3] w-full object-cover" />
              <div className="absolute -bottom-7 -left-5 rotate-[-7deg] border-2 border-maroon bg-cream px-5 py-3 font-display text-xl text-maroon shadow-[4px_4px_0_var(--maroon)] sm:text-2xl">Shuddh. Taaza. Dil se.</div>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y-2 border-maroon bg-maroon py-3 text-cream" aria-hidden="true">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap font-display text-xl sm:text-2xl">
          {[0, 1].map((copy) => <span key={copy}>KAJU KATLI ✦ GULAB JAMUN ✦ RASGULLA ✦ MOTICHOOR LADDU ✦ MILK CAKE ✦ SAMOSA ✦ KACHORI ✦ DHOKLA ✦ NAMKEEN ✦ GIFT BOXES ✦ </span>)}
        </div>
      </div>

      <section id="about" className="scroll-mt-24 bg-cream px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-saffron-deep">Our story</p>
            <h2 className="font-display text-5xl leading-[.95] text-maroon sm:text-7xl">A Nagda tradition, made fresh.</h2>
          </div>
          <div className="border-l-4 border-saffron pl-6 sm:pl-10">
            <p className="text-xl font-medium leading-relaxed text-foreground sm:text-2xl">For over 25 years, Raj Sweets has filled family celebrations with the honest taste of pure ghee mithai and freshly made namkeen.</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">From a quick samosa near the bus stand to the perfect wedding gift box, every order is prepared with familiar recipes, careful ingredients, and the warmth of local hospitality.</p>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[['25+','Years'],['10+','Favourites'],['7 Days','Open']].map(([value, label]) => (
                <div key={label} className="border-2 border-maroon/15 bg-background p-4"><strong className="block font-display text-2xl text-maroon sm:text-3xl">{value}</strong><span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{label}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="favourites" className="scroll-mt-24 bg-maroon px-4 py-20 text-primary-foreground sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div><p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-saffron">The Raj Sweets counter</p><h2 className="font-display text-5xl leading-none sm:text-7xl">Forever favourites.</h2></div>
            <p className="max-w-md text-sm leading-relaxed text-primary-foreground/75">Timeless recipes, made in fresh batches. Ask us for today’s availability and seasonal specials.</p>
          </div>
          <div className="mt-12 grid gap-px border border-cream/20 bg-cream/20 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article key={product.name} className="group min-h-52 bg-maroon p-6 transition-colors hover:bg-maroon-deep sm:p-8">
                <div className="flex items-start justify-between"><span className="font-display text-5xl text-saffron transition-transform group-hover:rotate-12">{product.marker}</span><span className="text-xs font-black text-primary-foreground/40">0{index + 1}</span></div>
                <h3 className="mt-8 font-display text-2xl text-cream">{product.name}</h3><p className="mt-1 text-sm text-primary-foreground/60">{product.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-24 bg-saffron px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center"><p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-maroon">Fresh from our kitchen</p><h2 className="font-display text-5xl leading-none text-maroon sm:text-7xl">A feast for every mood.</h2></div>
          <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
            <figure className="group relative overflow-hidden border-4 border-maroon bg-maroon lg:col-span-7 lg:row-span-2"><img src={mithaiImage} alt="Assorted premium Indian sweets including kaju katli and laddus" loading="lazy" width={1200} height={912} className="h-full min-h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105" /><figcaption className="absolute bottom-4 left-4 bg-cream px-4 py-2 font-display text-lg text-maroon">Signature Mithai</figcaption></figure>
            <figure className="group relative overflow-hidden border-4 border-maroon bg-maroon lg:col-span-5"><img src={namkeenImage} alt="Fresh samosa, kachori, dhokla and namkeen" loading="lazy" width={1200} height={912} className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><figcaption className="absolute bottom-4 left-4 bg-cream px-4 py-2 font-display text-lg text-maroon">Hot & Savoury</figcaption></figure>
            <figure className="group relative overflow-hidden border-4 border-maroon bg-maroon lg:col-span-5"><img src={giftingImage} alt="Premium festive Raj Sweets mithai gift box" loading="lazy" width={1200} height={912} className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><figcaption className="absolute bottom-4 left-4 bg-cream px-4 py-2 font-display text-lg text-maroon">Festive Gifting</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="block-print bg-cream px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-saffron-deep">Why Raj Sweets</p><h2 className="font-display text-5xl leading-none text-maroon sm:text-7xl">Goodness you can taste.</h2></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[[ShieldCheck,'Honest ingredients','Quality ingredients selected for dependable taste.'],[Clock3,'Fresh every day','Regular batches from morning to evening.'],[Gift,'Made for occasions','Thoughtful boxes for festivals, weddings and gifting.'],[Heart,'A local favourite','Serving Nagda families with warmth for 25+ years.']].map(([Icon, title, text]) => {
                const IconComponent = Icon as typeof ShieldCheck;
                return <div key={String(title)} className="border-2 border-maroon/15 bg-background p-6 shadow-[5px_5px_0_var(--saffron)]"><IconComponent className="size-8 text-saffron-deep" /><h3 className="mt-5 font-display text-2xl text-maroon">{String(title)}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{String(text)}</p></div>;
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-24 bg-cream-deep px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center"><p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-saffron-deep">Loved in Nagda</p><h2 className="font-display text-5xl text-maroon sm:text-7xl">Sweet words.</h2></div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <article key={review.name} className={`border-2 border-maroon bg-cream p-7 shadow-[6px_6px_0_var(--maroon)] ${index === 1 ? 'lg:-translate-y-4' : ''}`}>
                <div className="flex justify-between"><div className="flex gap-1 text-saffron-deep">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}</div><Quote className="size-8 text-maroon/20" /></div>
                <p className="mt-7 text-base font-medium leading-relaxed">“{review.text}”</p><div className="mt-7 border-t border-maroon/15 pt-4"><strong className="text-maroon">{review.name}</strong><span className="ml-2 text-xs text-muted-foreground">{review.relation}</span></div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">Demo customer stories shown for design preview.</p>
        </div>
      </section>

      <section className="bg-maroon px-4 py-20 text-primary-foreground sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div><p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-saffron">Questions, answered</p><h2 className="font-display text-5xl sm:text-7xl">Before you order.</h2><p className="mt-5 max-w-md text-primary-foreground/65">Need something specific? Call or WhatsApp us and we’ll help you plan the right quantity.</p></div>
          <Accordion type="single" collapsible className="border-t border-cream/25">
            {faqs.map(([question, answer], index) => <AccordionItem key={question} value={`item-${index}`} className="border-cream/25"><AccordionTrigger className="py-6 text-left text-base font-bold text-cream hover:no-underline">{question}</AccordionTrigger><AccordionContent className="pr-8 leading-relaxed text-primary-foreground/65">{answer}</AccordionContent></AccordionItem>)}
          </Accordion>
        </div>
      </section>

      <section id="visit" className="scroll-mt-24 bg-cream px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden border-2 border-maroon bg-background shadow-[9px_9px_0_var(--saffron)] lg:grid-cols-[.8fr_1.2fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-saffron-deep">Come say namaste</p><h2 className="mt-3 font-display text-5xl leading-none text-maroon">Find us in the heart of Nagda.</h2>
              <div className="mt-8 space-y-6 text-sm">
                <div className="flex gap-4"><MapPin className="mt-0.5 size-5 shrink-0 text-saffron-deep" /><div><strong className="block text-maroon">Raj Sweets</strong><p className="mt-1 leading-relaxed text-muted-foreground">12, Mahatma Gandhi Road, Near Bus Stand, Nagda, Ujjain, Madhya Pradesh – 456335</p></div></div>
                <div className="flex gap-4"><Clock3 className="mt-0.5 size-5 shrink-0 text-saffron-deep" /><div><strong className="block text-maroon">Open daily</strong><p className="mt-1 text-muted-foreground">8:00 AM – 10:00 PM</p></div></div>
                <div className="flex gap-4"><Phone className="mt-0.5 size-5 shrink-0 text-saffron-deep" /><a href={`tel:${phoneLink}`} className="font-bold text-maroon hover:underline">{phoneDisplay}</a></div>
              </div>
              <Button asChild className="mt-8 h-12 bg-maroon px-6 font-bold text-primary-foreground hover:bg-maroon-deep"><a href="https://www.google.com/maps/search/?api=1&query=12%20Mahatma%20Gandhi%20Road%20Near%20Bus%20Stand%20Nagda%20Madhya%20Pradesh%20456335" target="_blank" rel="noreferrer"><MapPin /> Get directions</a></Button>
            </div>
            <iframe title="Map showing Raj Sweets near Nagda Bus Stand" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=12%20Mahatma%20Gandhi%20Road%2C%20Near%20Bus%20Stand%2C%20Nagda%2C%20Madhya%20Pradesh%20456335&output=embed" className="min-h-[390px] w-full border-0 grayscale-[.2] lg:min-h-full" />
          </div>
        </div>
      </section>

      <section className="bg-saffron px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-xs font-black uppercase tracking-[0.2em] text-maroon">Bulk & occasion orders</p><h2 className="mt-3 font-display text-5xl leading-none text-maroon sm:text-7xl">Let’s make it memorable.</h2><p className="mt-6 max-w-md font-medium leading-relaxed text-maroon-deep">Tell us what you’re celebrating. We’ll help with mithai quantities, assortments and beautiful gift boxes.</p></div>
          <form onSubmit={submitEnquiry} className="grid gap-5 border-2 border-maroon bg-cream p-6 shadow-[8px_8px_0_var(--maroon)] sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-xs font-black uppercase tracking-wider text-maroon">Your name<input required name="name" className="h-12 border-2 border-maroon/30 bg-background px-4 text-base font-medium normal-case outline-none transition focus:border-maroon" placeholder="e.g. Anjali Sharma" /></label><label className="grid gap-2 text-xs font-black uppercase tracking-wider text-maroon">Phone number<input required name="phone" inputMode="tel" className="h-12 border-2 border-maroon/30 bg-background px-4 text-base font-medium normal-case outline-none transition focus:border-maroon" placeholder="Your mobile number" /></label></div>
            <label className="grid gap-2 text-xs font-black uppercase tracking-wider text-maroon">What can we prepare for you?<textarea required name="message" rows={4} className="resize-none border-2 border-maroon/30 bg-background p-4 text-base font-medium normal-case outline-none transition focus:border-maroon" placeholder="Tell us about the occasion, items and quantity..." /></label>
            <Button type="submit" size="lg" className="h-14 justify-between bg-maroon px-6 text-base font-black text-primary-foreground hover:bg-maroon-deep">Send enquiry on WhatsApp <ArrowRight /></Button>
          </form>
        </div>
      </section>

      <footer className="block-print bg-maroon px-4 pb-28 pt-14 text-primary-foreground sm:px-6 lg:px-8 lg:pb-14">
        <div className="mx-auto grid max-w-7xl gap-10 border-b border-cream/20 pb-10 md:grid-cols-3">
          <div><div className="inline-flex bg-cream p-3"><BrandMark /></div><p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/60">Authentic desi mithai and namkeen, fresh every day in Nagda.</p></div>
          <div><h3 className="font-display text-2xl text-saffron">Visit</h3><p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">12, Mahatma Gandhi Road,<br />Near Bus Stand, Nagda – 456335</p><p className="mt-3 text-sm font-bold text-cream">Daily • 8 AM – 10 PM</p></div>
          <div><h3 className="font-display text-2xl text-saffron">Stay in touch</h3><div className="mt-4 space-y-3 text-sm font-bold"><a href={`tel:${phoneLink}`} className="flex items-center gap-2 hover:text-saffron"><Phone className="size-4" /> {phoneDisplay}</a><a href="https://instagram.com/rajsweetsnagda" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-saffron"><Instagram className="size-4" /> @rajsweetsnagda</a></div></div>
        </div>
        <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-2 text-xs text-primary-foreground/45 sm:flex-row sm:justify-between"><p>© 2026 Raj Sweets. All rights reserved.</p><p>Made with mithaas in Nagda.</p></div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 flex gap-2 lg:hidden">
        <Button asChild className="h-14 flex-1 bg-leaf text-base font-black text-primary-foreground shadow-[3px_3px_0_var(--maroon-deep)] hover:bg-leaf/90"><a href={`${whatsappBase}?text=Namaste%20Raj%20Sweets!%20I%20would%20like%20to%20order.`} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button>
        <Button asChild className="h-14 flex-1 bg-maroon text-base font-black text-primary-foreground shadow-[3px_3px_0_var(--saffron)] hover:bg-maroon-deep"><a href={`tel:${phoneLink}`}><Phone /> Call now</a></Button>
      </div>

      <a href={`${whatsappBase}?text=Namaste%20Raj%20Sweets!%20I%20would%20like%20to%20order.`} target="_blank" rel="noreferrer" aria-label="Order on WhatsApp" className="fixed bottom-6 right-6 z-50 hidden size-16 items-center justify-center rounded-full bg-leaf text-primary-foreground shadow-[5px_5px_0_var(--maroon)] transition-transform hover:-translate-y-1 lg:flex"><MessageCircle className="size-7" /></a>
    </main>
  );
}