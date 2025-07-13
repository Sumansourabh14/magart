import { TemplateDefinition } from "@/types";

export const templates: TemplateDefinition[] = [
  {
    id: "vogue",
    name: "Vogue Style",
    preview: "/previews/vogue.jpg",
    contentKey: "title",
    defaultValue: "Vogue",
    font: "Didot",
    style: {
      position: "absolute",
      top: "40px",
      left: "30px",
      fontSize: "120px",
      fontWeight: "bold",
      color: "white",
    },
    dimensions: {
      width: 600,
      height: 800,
    },
  },
];
