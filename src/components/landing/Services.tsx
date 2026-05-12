import { FileCheck2, BarChart3, Recycle, Trees } from "lucide-react";

const services = [
  {
    icon: FileCheck2,
    title: "Environmental Licensing",
    desc: "Complete management of LP, LI, LO and renewals across federal, state and municipal agencies.",
  },
  {
    icon: BarChart3,
    title: "ESG & Sustainability Reports",
    desc: "GRI, SASB and TCFD-aligned reporting that satisfies investors, regulators and stakeholders.",
  },
  {
    icon: Recycle,
    title: "Waste Management",
    desc: "PGRS plans, reverse logistics and circular-economy programs that reduce cost and risk.",
  },
  {
    icon: Trees,
    title: "Carbon Credits",
    desc: "GHG inventories, project certification and access to voluntary and regulated carbon markets.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">What we do</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Full-spectrum environmental expertise.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Four integrated practice areas that move your operation from compliance to competitive advantage.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative rounded-xl border border-border bg-card p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="grid place-items-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-card-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
