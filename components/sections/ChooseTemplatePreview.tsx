import { Card } from "../ui/card";
import TemplateRenderer from "../render/TemplateRenderer";
import { templates } from "@/data/templates";

const ChooseTemplatePreview = ({
  imageUrl,
  setTemplateId,
  setTemplateName,
}: {
  imageUrl: string;
  setTemplateId: (id: string) => void;
  setTemplateName: (id: string) => void;
}) => {
  return (
    <section className="py-20">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Choose a Template</h2>
        <p className="text-muted-foreground mb-10">
          Pick a design that suits your story — personalize it with text, style,
          and images.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card
              onClick={() => {
                setTemplateId(template.id);
                setTemplateName(template.name);
              }}
              key={template.id}
              className="group bg-background rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="relative h-80">
                <TemplateRenderer
                  image={imageUrl}
                  templateId={template.id}
                  text={template.name}
                  textColor={template.style.color || ""}
                />
              </div>
              <div className="px-4 mt-52">
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
