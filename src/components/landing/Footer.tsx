import { Leaf, Linkedin, Instagram, Facebook, Award } from "lucide-react";

export function Footer() {
  const cols = [
    { title: "Services", links: ["Environmental Licensing", "ESG Reports", "Waste Management", "Carbon Credits"] },
    { title: "Company", links: ["About", "Team", "Careers", "Press"] },
    { title: "Resources", links: ["Insights", "Case Studies", "FAQ", "Contact"] },
  ];
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 font-display font-bold text-xl">
              <span className="grid place-items-center w-8 h-8 rounded-md bg-primary-foreground text-primary">
                <Leaf className="w-4 h-4" />
              </span>
              Ambiental HUB
            </a>
            <p className="mt-4 text-sm text-primary-foreground/75 max-w-sm">
              Environmental intelligence for industries that take sustainability seriously.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3">
              <Award className="w-5 h-5" />
              <div className="text-xs">
                <p className="font-semibold">Member of ABES</p>
                <p className="text-primary-foreground/70">Brazilian Sanitary & Environmental Engineering Assoc.</p>
              </div>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider">{c.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-primary-foreground transition">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/70">
            © {new Date().getFullYear()} Ambiental HUB. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid place-items-center w-9 h-9 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
