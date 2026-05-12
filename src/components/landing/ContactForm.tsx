import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().min(2, "Company is required").max(120),
  email: z.string().trim().email("Invalid email").max(255),
  service: z.string().min(1, "Select a service"),
});

const services = [
  "Environmental Licensing",
  "ESG & Sustainability Reports",
  "Waste Management",
  "Carbon Credits",
];

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const out: Record<string, string> = {};
      for (const issue of result.error.issues) out[String(issue.path[0])] = issue.message;
      setErrors(out);
      return;
    }
    setErrors({});
    setSent(true);
  };

  const field = "w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition";

  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Free assessment</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Get a Free Environmental Audit.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tell us about your operation. Within two business days, a senior consultant will deliver a
            no-obligation diagnostic of your top compliance and ESG opportunities.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li>• 30-minute strategy call with a senior partner</li>
            <li>• Risk and opportunity heat-map for your site</li>
            <li>• Action roadmap with prioritised quick wins</li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="bg-card rounded-2xl p-8 md:p-10 shadow-elegant border border-border"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="mx-auto grid place-items-center w-14 h-14 rounded-full bg-primary text-primary-foreground">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Request received</h3>
              <p className="mt-2 text-muted-foreground">A consultant will reach out shortly.</p>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full name</label>
                <input id="name" name="name" maxLength={100} className={field} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                <input id="company" name="company" maxLength={120} className={field} />
                {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Corporate email</label>
                <input id="email" name="email" type="email" maxLength={255} className={field} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">Service of interest</label>
                <select id="service" name="service" className={field} defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:bg-primary/90 transition-colors shadow-card"
              >
                Request Free Audit <Send className="w-4 h-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
