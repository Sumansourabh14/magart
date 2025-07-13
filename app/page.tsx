import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import { TemplatesLandingSection } from "@/components/sections/TemplatesLandingSection";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-8 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="py-8">
        <Hero />
        <section className="max-w-[1400px] mx-auto">
          <Separator />
          {/* <DisplayTemplate /> */}
          <TemplatesLandingSection />
          <Separator />
          <Features />
        </section>
      </main>
      <Footer />
    </div>
  );
}
