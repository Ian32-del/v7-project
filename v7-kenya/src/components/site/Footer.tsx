import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="size-9 rounded-xl gradient-primary grid place-items-center text-primary-foreground font-display font-bold">V7</span>
            <span className="font-display font-bold text-lg">V7 Kenya</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Premium beverages crafted for modern lifestyles. Refreshment, flavor, and energy — bottled in Kenya.
          </p>
          <div className="flex gap-2 mt-5">
            {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="size-10 grid place-items-center rounded-full bg-background border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-sm">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Nairobi, Kenya</li>
            <li>+254 700 000 000</li>
            <li>info@v7kenya.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} V7 Kenya. All rights reserved.
      </div>
    </footer>
  );
}
