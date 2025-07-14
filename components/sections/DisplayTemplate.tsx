import { templates } from "@/data/templates";
import Image from "next/image";
import { Card } from "../ui/card";

const DisplayTemplate = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {templates.map((template) => (
        <Card
          key={template.id}
          className="group bg-background rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
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
        </Card>
      ))}
    </section>
  );
};

export default DisplayTemplate;
