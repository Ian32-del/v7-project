import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — V7 Kenya" },
      { name: "description", content: "Get in touch with V7 Kenya. We'd love to hear from you." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="py-20 px-6 lg:px-10 max-w-7xl mx-auto text-center">
        <Reveal>
          <span className="text-xs font-semibold tracking-widest text-primary uppercase">Contact</span>
          <h1 className="mt-3 text-5xl md:text-6xl font-bold">
            Let's <span className="text-gradient-primary">talk refreshment</span>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
            Questions, partnerships, or distribution? Drop us a line — we'll get back to you fast.
          </p>
        </Reveal>
      </section>

      <section className="pb-20 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-8">
        <Reveal className="lg:col-span-2">
          <div className="rounded-3xl gradient-primary text-primary-foreground p-8 shadow-glow h-full flex flex-col">
            <h2 className="text-2xl font-bold">Reach us directly</h2>
            <p className="mt-2 opacity-90 text-sm">Our team is available Mon — Fri, 9am to 6pm EAT.</p>
            <div className="mt-8 space-y-5 flex-1">
              {[
                { icon: Phone, label: "Phone", value: "+254 700 000 000" },
                { icon: Mail, label: "Email", value: "info@v7kenya.com" },
                { icon: MapPin, label: "Office", value: "Nairobi, Kenya" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="size-11 grid place-items-center rounded-xl bg-white/15 backdrop-blur">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider opacity-70">{c.label}</div>
                    <div className="font-semibold">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="text-xs uppercase tracking-wider opacity-70 mb-3">Follow us</div>
              <div className="flex gap-2">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="size-10 grid place-items-center rounded-full bg-white/15 hover:bg-white/25 transition-colors">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3" delay={100}>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl bg-card border border-border p-8 shadow-soft h-full"
          >
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="text-sm text-muted-foreground mt-1">We typically respond within 24 hours.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your full name" />
              <Field label="Email" type="email" name="email" placeholder="you@email.com" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea required rows={5} placeholder="Tell us what's on your mind..." className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none" />
            </div>

            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all">
              {sent ? "Message sent ✓" : (<>Send Message <Send size={16} /></>)}
            </button>
          </form>
        </Reveal>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="rounded-3xl overflow-hidden border border-border shadow-soft aspect-[16/7] bg-secondary">
            <iframe
              title="V7 Kenya location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=36.7820%2C-1.3030%2C36.8470%2C-1.2580&layer=mapnik"
              className="size-full"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
      />
    </div>
  );
}