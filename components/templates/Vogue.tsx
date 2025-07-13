// src/templates/VogueTemplate.jsx
// import "./fonts/vogue.css"; // use @font-face or Google Fonts

import { TemplateProps } from "@/types";
import Image from "next/image";

export default function VogueTemplate({
  image,
  title,
  subtitle,
  name,
}: TemplateProps) {
  return (
    <section
      className="relative w-[600px] h-[800px] overflow-hidden"
      style={{ fontFamily: "Didot, serif" }}
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt="cover background"
          className="absolute inset-0 w-full h-full object-cover"
          fill
        />
      </div>

      <div className="absolute top-8 left-6 text-[72px] font-bold tracking-wide">
        VOGUE
      </div>

      <div className="absolute bottom-24 left-6 right-6">
        <div className="text-3xl font-bold">{title}</div>
        <div className="text-lg italic mt-2">{subtitle}</div>
      </div>

      <div className="absolute bottom-6 left-6 text-sm tracking-wider uppercase">
        {name}
      </div>
    </section>
  );
}
