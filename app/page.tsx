import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-8 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="py-20">
        <Hero />
        <section className="max-w-[1400px] mx-auto">
          {/* <DisplayTemplate /> */}
        </section>
      </main>
      <Footer />
    </div>
  );
}
