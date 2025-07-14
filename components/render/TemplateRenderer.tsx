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

    const { width, height } = template.dimensions;
    const aspectRatio = (height / width) * 100;

    return (
      <div
        className="relative"
        style={{
          fontFamily: template.font,
        }}
      >
        <div
          className="relative w-full h-full"
          style={{ paddingBottom: `${aspectRatio}%` }}
        >
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
