import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Target, Eye, Heart, Users, Sparkles, Shield } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — V7 Kenya" },
      { name: "description", content: "Learn about V7 Kenya — our mission, vision, and the values behind every can." },
    ],
  }),
});

function About() {
  return (
    <>
      <section className="relative py-24 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">About V7 Kenya</span>
            <h1 className="mt-3 text-5xl md:text-6xl font-bold">
              We bottle <span className="text-gradient-primary">refreshment</span>, not compromise.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              V7 Kenya is a youthful beverage company building a new generation of premium drinks
              for modern Kenya — innovative, customer-focused, and uncompromising on quality.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Users, title: "Who We Are", text: "A Kenyan beverage brand crafting world-class drinks with local heart." },
            { icon: Target, title: "Our Mission", text: "Deliver premium refreshment that fuels modern lifestyles every single day." },
            { icon: Eye, title: "Our Vision", text: "To become V7 Kenya's most loved next-generation beverage company." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="h-full rounded-3xl bg-card border border-border p-8 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all">
                <div className="size-12 rounded-2xl gradient-primary text-primary-foreground grid place-items-center mb-5">
                  <c.icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-primary uppercase">Why V7</span>
            <h2 className="mt-3 text-4xl font-bold">Why choose V7 Kenya</h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Heart, t: "Customer first", d: "We design every product around how you actually live." },
            { icon: Sparkles, t: "Bold innovation", d: "From flavor to packaging — fresh thinking, every launch." },
            { icon: Shield, t: "Safe & certified", d: "Strict quality control on every batch we bottle." },
            { icon: Target, t: "Made for Kenya", d: "Crafted and bottled with the local taste in mind." },
            { icon: Users, t: "Youthful spirit", d: "Built by a young team passionate about modern brands." },
            { icon: Eye, t: "Forward-looking", d: "Sustainable practices guiding our roadmap." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 80}>
              <div className="h-full rounded-2xl bg-card border border-border p-6 hover:border-primary/40 hover:-translate-y-1 transition-all">
                <v.icon className="text-primary mb-4" size={22} />
                <h4 className="font-semibold">{v.t}</h4>
                <p className="text-sm text-muted-foreground mt-1">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}