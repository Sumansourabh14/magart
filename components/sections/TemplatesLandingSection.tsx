import { templates } from "@/data/templates";
import TemplateRenderer from "../render/TemplateRenderer";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export function TemplatesLandingSection() {
  return (
    <section className="py-30">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Choose a Template</h2>
        <p className="text-muted-foreground mb-10">
          Pick a design that suits your story — personalize it with text, style,
          and images.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {templates.slice(0, 6).map((template) => (
            <Card
              key={template.id}
              className="group bg-background rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative group-hover:scale-105 transition-transform">
                <TemplateRenderer
                  image={template.preview}
                  templateId={template.id}
                  text={template.name}
                  textColor={template.style.color || ""}
                />
              </div>
              <div className="px-4">
                <h3 className="text-lg font-semibold">{template.name}</h3>
              </div>
            </Card>
          ))}
        </div>

        <section className="flex justify-center">
          <Button asChild className="py-8 px-16 mt-10">
            <Link href="/templates" className="text-xl">
              See all templates
            </Link>
          </Button>
        </section>
      </div>
    </section>
  );
}
