import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Clients } from "@/components/landing/Clients";
import { Services } from "@/components/landing/Services";
import { About } from "@/components/landing/About";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ambiental HUB — Environmental Consultancy for Industry" },
      {
        name: "description",
        content:
          "Expert consultancy in environmental licensing, ESG strategy, waste management and carbon credits. Turn compliance into competitive advantage.",
      },
      { property: "og:title", content: "Ambiental HUB — Environmental Consultancy" },
      {
        property: "og:description",
        content: "Transforming environmental challenges into sustainable value for industries.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <About />
      <ContactForm />
      <Footer />
    </main>
  );
}
