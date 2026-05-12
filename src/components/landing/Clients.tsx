const logos = ["EcoIndustries", "GreenSteel", "BioPetro", "TerraMine", "AgroVida", "HydroPower"];

export function Clients() {
  return (
    <section className="py-20 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
          Trusted by Industry Leaders
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center">
          {logos.map((name) => (
            <div
              key={name}
              className="font-display font-bold text-xl text-muted-foreground/70 text-center hover:text-primary transition-colors"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
