import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import sp1 from "@/assets/sparkling-1.jpg";
import sp2 from "@/assets/sparkling-2.jpg";
import sp3 from "@/assets/sparkling-3.jpg";
import sp4 from "@/assets/sparkling-4.jpg";
import sp5 from "@/assets/sparkling-5.jpg";
import sd1 from "@/assets/soda-1.jpg";
import sd2 from "@/assets/soda-2.jpg";
import sd3 from "@/assets/soda-3.jpg";
import m1 from "@/assets/malt-1.jpg";
import m2 from "@/assets/malt-2.jpg";
import m3 from "@/assets/Pink-Lemonade.jpg";
import m4 from "@/assets/Blueberry.webp";
import m5 from "@/assets/pina-colada.webp";
import m6 from "@/assets/Lemon-mint.webp";
import m7 from "@/assets/pomergranate.webp";
import m8 from "@/assets/super-soda.webp";






export const Route = createFileRoute("/products")({
  component: Products,
  head: () => ({
    meta: [
      { title: "Products — V7 Kenya" },
      { name: "description", content: "Explore Vitamin Sparkling Drinks, Super Soda, and V7 Malt — V7 Kenya's signature beverage line." },
    ],
  }),
});

const sparkling = [
  { img: m7, name: "Lemon Lime", color: "from-lime-400 to-emerald-500" },
  { img: m6, name: "Mango Burst", color: "from-amber-400 to-orange-500" },
  { img: m3, name: "Strawberry", color: "from-rose-400 to-pink-500" },
  { img: m4, name: "Mixed Berry", color: "from-fuchsia-400 to-purple-500" },
  { img: m5, name: "Pineapple", color: "from-yellow-300 to-amber-400" },
];

const sodas = [
  { img: m8, name: "Super Cola", tagline: "Original" },
  { img: sd2, name: "Super Lemon", tagline: "Citrus rush" },
  { img: sd3, name: "Super Mint", tagline: "Cool & crisp" },
];

const malts = [
  { img: m1, name: "V7 Malt Classic", tagline: "Smooth & bold" },
  { img: m2, name: "V7 Malt Dark", tagline: "Rich variant" },
];

function Products() {
  return (
    <>
      {/* HEADER */}
      <section className="relative pt-20 pb-10 px-6 lg:px-10 max-w-7xl mx-auto text-center">
        <Reveal>
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Our Lineup</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold">
            Crafted for <span className="text-gradient-primary">every moment</span>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Three signature ranges. One promise — refreshment, flavor and quality you can taste.
          </p>
        </Reveal>
      </section>

      {/* SPARKLING — GREEN */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-emerald-100/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="inline-block rounded-full bg-primary/15 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider">01 — Sparkling</span>
                <h2 className="mt-3 text-4xl md:text-5xl font-bold">Vitamin Sparkling Drinks</h2>
              </div>
              <p className="md:max-w-md text-muted-foreground">
                Vitamin Sparkling Drinks combine fruity flavor with refreshing sparkling energy and essential vitamins.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {sparkling.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 80}>
                <div className="group relative rounded-3xl bg-card border border-border p-5 shadow-soft hover:shadow-glow hover:-translate-y-2 transition-all overflow-hidden">
                  <div className={`absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-secondary to-background">
                    <img src={p.img} alt={p.name} loading="lazy" className="size-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{p.name}</h3>
                  <p className="text-xs text-muted-foreground">Sparkling · 330ml</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUPER SODA — BLUE */}
      <section className="relative py-20 overflow-hidden gradient-soda text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="inline-block rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider">02 — Soda</span>
                <h2 className="mt-3 text-4xl md:text-5xl font-bold">Super Soda</h2>
              </div>
              <p className="md:max-w-md text-white/85">
                Super Soda delivers bold sparkling refreshment with smooth taste and modern flavor.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sodas.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 100}>
                <div className="group glass rounded-3xl p-6 hover:-translate-y-2 transition-all">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white/5">
                    <img src={p.img} alt={p.name} loading="lazy" className="size-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h3 className="mt-5 font-semibold text-xl">{p.name}</h3>
                  <p className="text-sm text-white/70">{p.tagline}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MALT — BLACK + ORANGE */}
      <section className="relative py-20 overflow-hidden gradient-malt text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,oklch(0.7_0.19_55_/_0.25),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="inline-block rounded-full bg-malt-glow/20 border border-malt-glow/40 text-malt-glow px-3 py-1 text-xs font-semibold uppercase tracking-wider">03 — Malt</span>
                <h2 className="mt-3 text-4xl md:text-5xl font-bold">V7 Malt</h2>
              </div>
              <p className="md:max-w-md text-white/75">
                V7 Malt offers a smooth rich malt experience crafted for bold taste lovers.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {malts.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 120}>
                <div className="group rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 hover:shadow-malt-glow hover:-translate-y-2 transition-all">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-black/40">
                    <img src={p.img} alt={p.name} loading="lazy" className="size-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <h3 className="mt-5 font-semibold text-xl">{p.name}</h3>
                  <p className="text-sm text-white/70">{p.tagline}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}