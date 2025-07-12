import DisplayTemplate from "@/components/sections/DisplayTemplate";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

export default function Templates() {
  return (
    <div className="min-h-screen py-8 px-8 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="py-20">
        <section className="max-w-[1400px] mx-auto">
          <DisplayTemplate />
        </section>
      </main>
      <Footer />
    </div>
  );
}
