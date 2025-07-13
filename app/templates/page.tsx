import DisplayTemplate from "@/components/sections/DisplayTemplate";
import H1 from "@/components/text/H1";

export default function Templates() {
  return (
    <div className="px-8 font-[family-name:var(--font-geist-sans)]">
      <H1 title="Templates" />
      <section className="py-10">
        <section className="max-w-[1400px] mx-auto">
          <DisplayTemplate />
        </section>
      </section>
    </div>
  );
}
