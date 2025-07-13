import Image from "next/image";
import { Card } from "../ui/card";

type Template = {
  id: string;
  name: string;
};

const templates: Template[] = [
  {
    id: "vogue",
    name: "Vogue Style",
  },
  {
    id: "bold",
    name: "Bold Minimal",
  },
  {
    id: "aesthetic",
    name: "Aesthetic Mood",
  },
];

const ChooseTemplatePreview = ({
  imageUrl,
  setTemplateId,
}: {
  imageUrl: string;
  setTemplateId: (id: string) => void;
}) => {
  return (
    <section className="py-20">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Choose a Template</h2>
        <p className="text-muted-foreground mb-10">
          Pick a design that suits your story — personalize it with text, style,
          and images.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card
              onClick={() => setTemplateId(template.id)}
              key={template.id}
              className="group bg-background rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative h-80">
                <Image
                  src={imageUrl}
                  alt={template.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{template.name}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseTemplatePreview;
