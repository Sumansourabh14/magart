import Image from "next/image";
import Link from "next/link";

type Template = {
  id: string;
  name: string;
  preview: string;
};

const templates: Template[] = [
  {
    id: "vogue",
    name: "Vogue Style",
    preview:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "bold",
    name: "Bold Minimal",
    preview:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "aesthetic",
    name: "Aesthetic Mood",
    preview:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function TemplatesLandingSection() {
  return (
    <section className="py-40">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Choose a Template</h2>
        <p className="text-muted-foreground mb-10">
          Pick a design that suits your story — personalize it with text, style,
          and images.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Link
              href={`/editor?template=${template.id}`}
              key={template.id}
              className="group bg-background rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative h-80">
                <Image
                  src={template.preview}
                  alt={template.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{template.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
