import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { Phone, Mail, MapPin, Send, Instagram, Music2 } from "lucide-react";
import { useRef, useState } from "react";

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
const [loading, setLoading] = useState(false);

const formRef = useRef<HTMLFormElement>(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);

  try {
    const formData = new FormData(formRef.current!);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      setSent(true);
      formRef.current?.reset();
    } else {
      alert("Something went wrong.");
    }
  } catch (error) {
    alert("Network error. Please try again.");
  }

  setLoading(false);
};
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
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+254 791 302 007",
                  href: "tel:+254791302007",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "V7beveragesltd@gmail.com",
                  href: "mailto:V7beveragesltd@gmail.com",
                },
                {
                  icon: MapPin,
                  label: "Office",
                  value: "Nairobi, Kenya",
                },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="size-11 grid place-items-center rounded-xl bg-white/15 backdrop-blur">
                    <c.icon size={18} />
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wider opacity-70">
                      {c.label}
                    </div>

                    {c.href ? (
                      <a
                        href={c.href}
                        className="font-semibold hover:underline transition-all"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="font-semibold">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="text-xs uppercase tracking-wider opacity-70 mb-3">Follow us</div>
              <div className="flex gap-2">
                {[
                  {
                    icon: Instagram,
                    href: "https://www.instagram.com/v7kenya?igsh=MTN5OHMycTlxY2JoYg==",
                  },
                  {
                    icon: Music2,
                    href: "https://www.tiktok.com/@v7.kenya",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-10 grid place-items-center rounded-full bg-white/15 hover:bg-white/25 transition-colors"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3" delay={100}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-3xl bg-card border border-border p-8 shadow-soft h-full"
          >
          <input
            type="hidden"
            name="access_key"
            value="4f484a1e-90e4-472e-9976-a2026359d1dd"
          />

          <input
            type="hidden"
            name="subject"
            value="New Contact Message from V7 Kenya"
          />

          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
          />
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <p className="text-sm text-muted-foreground mt-1">We typically respond within 24 hours.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your full name" />
              <Field label="Email" type="email" name="email" placeholder="you@email.com" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea name="message" required rows={5} placeholder="Tell us what's on your mind..." className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none" />
            </div>

            <button type="submit"
                disabled={loading}
                className="mt-6 inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all disabled:opacity-50"
              >
                {loading
                  ? "Sending..."
                  : sent
                  ? "Message sent ✓"
                  : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
            </button>
          </form>
        </Reveal>
      </section>

      {/* <section className="pb-24 max-w-7xl mx-auto px-6 lg:px-10">
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
      </section> */}
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