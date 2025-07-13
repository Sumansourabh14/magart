import { templates } from "@/data/templates";
import Image from "next/image";

type Props = {
  image: string;
  templateId: string;
  text: string;
};

const TemplateRenderer = ({ image, templateId, text }: Props) => {
  const template = templates.find((t) => t.id === templateId);
  if (!template) return null;

  return (
    <div
      className="relative"
      style={{
        width: template.dimensions.width,
        height: template.dimensions.height,
        fontFamily: template.font,
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt="cover background"
          className="absolute inset-0 w-full h-full object-cover"
          fill
        />
      </div>
      <div style={template.style}>{text || template.defaultValue}</div>
    </div>
  );
};

export default TemplateRenderer;
