import heroImg from "@/assets/hero-forest.jpg";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-16">
      <img
        src={heroImg}
        alt="Aerial view of preserved rainforest meeting sustainable industry"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-overlay opacity-95" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 text-primary-foreground">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium border border-white/15">
            <ShieldCheck className="w-3.5 h-3.5" /> ISO 14001 · Certified Consultancy
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Transforming Environmental Challenges into Sustainable Value.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl">
            Expert consultancy in licensing, ESG strategies, and environmental compliance for industries.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-primary-foreground text-primary px-6 py-3.5 font-semibold shadow-elegant hover:bg-primary-foreground/90 transition-all"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-md border border-white/30 px-6 py-3.5 font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Services
            </a>
          </div>
          <dl className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
            {[
              { k: "150+", v: "Industrial clients" },
              { k: "20yr", v: "Field experience" },
              { k: "98%", v: "Compliance rate" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-3xl md:text-4xl font-display font-bold">{s.k}</dt>
                <dd className="text-xs uppercase tracking-wider text-primary-foreground/70 mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
