import teamImg from "@/assets/team-field.jpg";
import { Check } from "lucide-react";

const points = [
  "Multidisciplinary team of biologists, engineers and ESG specialists",
  "Field-driven methodology backed by data analytics",
  "Partnership approach — your goals become our KPIs",
];

export function About() {
  return (
    <section id="about" className="py-28 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img
            src={teamImg}
            alt="Ambiental HUB consultants conducting a field assessment"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-2xl shadow-elegant w-full h-auto object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block bg-primary text-primary-foreground rounded-xl p-6 shadow-elegant max-w-[220px]">
            <p className="text-3xl font-display font-bold">20+</p>
            <p className="text-xs uppercase tracking-wider mt-1 text-primary-foreground/80">
              Years protecting ecosystems
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">About Ambiental HUB</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Engineering a future where industry and nature thrive together.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We help mid-to-large industrial operations decode environmental regulation, embed ESG into
            strategy and turn sustainability obligations into measurable business value. Our consultants
            work where it matters — on site, in the data, and at the boardroom table.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="grid place-items-center w-6 h-6 rounded-full bg-primary text-primary-foreground shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-foreground/90">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
