import { templates } from "@/data/templates";
import TemplateRenderer from "../render/TemplateRenderer";
import { Card } from "../ui/card";

const DisplayTemplate = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {templates.map((template) => (
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
  );
};

export default DisplayTemplate;
