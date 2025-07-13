import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-8 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="py-8">
        <Hero />
        <Separator />
        <section className="max-w-[1400px] mx-auto">
          {/* <DisplayTemplate /> */}
          <section className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full px-4 mx-auto">
            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">📸 Upload & Go</h3>
              <p className="text-muted-foreground">
                Upload a photo and instantly preview it on a professional
                magazine layout.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">
                🎨 Stylish Templates
              </h3>
              <p className="text-muted-foreground">
                Choose from Vogue, TIME, Indie zine styles and more — with just
                one click.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-2">
                ⬇️ Instant Download
              </h3>
              <p className="text-muted-foreground">
                No sign-up needed. Just create and download your poster-ready
                cover.
              </p>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
