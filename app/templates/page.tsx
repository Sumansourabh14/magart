import DisplayTemplate from "@/components/sections/DisplayTemplate";

export default function Templates() {
  return (
    <div className="min-h-screen py-8 px-8 font-[family-name:var(--font-geist-sans)]">
      <main className="py-20">
        <section className="max-w-[1400px] mx-auto">
          <DisplayTemplate />
        </section>
      </main>
    </div>
  );
}
