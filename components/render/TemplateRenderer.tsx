import { templates } from "@/data/templates";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  templateId: string;
  text: string;
  textColor: string;
};

const TemplateRenderer = React.memo(
  ({ image, templateId, text, textColor }: Props) => {
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

        <div style={{ ...template.style, color: textColor }}>
          {text || template.defaultValue}
        </div>
      </div>
    );
  }
);

TemplateRenderer.displayName = "TemplateRenderer";

export default TemplateRenderer;
