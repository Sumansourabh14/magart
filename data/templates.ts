import { TemplateDefinition } from "@/types";

export const templates: TemplateDefinition[] = [
  {
    id: "vogue",
    name: "VOGUE",
    preview: "/previews/vogue.jpg",
    contentKey: "title",
    defaultValue: "VOGUE",
    font: "Didot",
    style: {
      position: "absolute",
      top: "40px",
      left: "50%",
      transform: "translateX(-50%)",
      fontSize: "92px",
      fontWeight: "bold",
      color: "white",
    },
    dimensions: {
      width: 600,
      height: 800,
    },
  },
];
