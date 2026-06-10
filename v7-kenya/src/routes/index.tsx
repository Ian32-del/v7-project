import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Leaf, Award, Zap } from "lucide-react";
import heroSparkling from "@/assets/hero-sparkling.jpg";
import heroSoda from "@/assets/hero-soda.jpg";
import heroMalt from "@/assets/hero-malt.jpg";
import { Reveal } from "@/components/site/Reveal";
import { FaWhatsapp } from "react-icons/fa";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "V7 Kenya — Refreshment, Bottled." },
      { name: "description", content: "Discover V7 Kenya's premium beverage line — sparkling vitamin drinks, super soda and rich malt." },
    ],
  }),
});

const slides = [
  {
    img: heroSparkling,
    eyebrow: "Vitamin Sparkling Drinks",
    title: "Refreshment packed\nwith flavor.",
    desc: "Fruity sparkling energy with essential vitamins for your everyday glow.",
    accent: "from-pink-500/40 to-purple-700/40",
  },
  {
    img: heroSoda,
    eyebrow: "Super Soda",
    title: "Bold taste.\nClean refreshment.",
    desc: "A modern soda crafted for cool moments and bigger flavor.",
    accent: "from-amber-900/60 to-blue-900/30",
  },
  {
    img: heroMalt,
    eyebrow: "V7 Malt",
    title: "A rich, smooth\nmalt experience.",
    desc: "Premium malt for those who appreciate depth, character, and craft.",
    accent: "from-amber-700/50 to-yellow-800/30",
  },
];

function Home() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HERO CAROUSEL */}
      <div className="pt-0 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto border border-gray-300 rounded-3xl overflow-hidden shadow-lg">
          <section className="relative h-[85vh] min-h-[500px] w-full overflow-hidden">
            {slides.map((s, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
              >
                <img src={s.img} alt={s.eyebrow} className="absolute inset-0 size-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
              </div>
            ))}

            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center">
              <div key={i} className="max-w-2xl animate-fade-up">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-white uppercase">
                  <Sparkles size={14} /> {slides[i].eyebrow}
                </span>
                <h1 className="mt-5 text-white font-display font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.05] whitespace-pre-line">
                  {slides[i].title}
                </h1>
                <p className="mt-5 text-white/85 text-lg max-w-xl">{slides[i].desc}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-glow hover:-translate-y-0.5 transition-transform"
                  >
                    View Products <ArrowRight size={18} />
                  </Link>
                  <a
                    href="https://wa.me/254791302007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur-md text-white px-7 py-3.5 font-semibold hover:bg-white/15 hover:scale-105 transition-all"
                  >
                     <FaWhatsapp className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 inset-x-0 z-10 flex justify-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-white" : "w-4 bg-white/40"}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
      {/* INTRO */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Who we are</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Premium beverages for <span className="text-gradient-primary">modern Kenya</span>.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              V7 Kenya is dedicated to delivering refreshing premium beverages crafted for modern lifestyles —
              built on quality, refreshment, and innovation.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: Leaf, title: "Fresh Ingredients", text: "Sourced and crafted with care for vibrant flavor." },
            { icon: Award, title: "Premium Quality", text: "Every can meets the V7 standard — clean, bold, true." },
            { icon: Zap, title: "Built to Refresh", text: "Energy and refreshment for life on the move." },
          ].map((f, idx) => (
            <Reveal key={f.title} delay={idx * 120}>
              <div className="group h-full rounded-3xl bg-card border border-border p-8 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all">
                <div className="size-12 rounded-2xl gradient-primary grid place-items-center text-primary-foreground mb-5 group-hover:scale-110 transition-transform">
                  <f.icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-12 px-6">
        <Reveal>
          <div className="max-w-7xl mx-auto rounded-3xl gradient-primary p-10 md:p-14 shadow-glow flex flex-col md:flex-row items-center justify-between gap-6 text-primary-foreground">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">Taste the V7 difference.</h3>
              <p className="mt-2 opacity-90">Explore the full lineup — sparkling, soda, and malt.</p>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 font-semibold hover:scale-105 transition-transform">
              Browse Products <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="py-12 px-6">
        <Reveal>
          <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-700 p-10 md:p-14 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
                🤝 Partner With Us
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">Become a Distributor</h3>
              <p className="mt-3 text-white/90 text-lg max-w-xl">
                Join Kenya's fastest-growing beverage network. Exclusive territories available.
              </p>
              <div className="flex flex-wrap gap-4 mt-5 text-sm text-white/80">
                <span className="flex items-center gap-1">✓ Low minimum order</span>
                <span className="flex items-center gap-1">✓ Marketing support</span>
                <span className="flex items-center gap-1">✓ Training included</span>
              </div>
            </div>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 rounded-full bg-white text-emerald-700 px-8 py-4 font-bold hover:scale-105 transition-all shadow-md whitespace-nowrap"
            >
              Apply Now <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}