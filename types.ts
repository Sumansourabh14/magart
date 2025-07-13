export type TemplateProps = {
  image: string;
  title: string;
  subtitle: string;
  name: string;
};

export type TemplateContentKey = "title" | "name";

export type TemplateDefinition = {
  id: string; // unique identifier like "vogue", "bold"
  name: string; // human-readable name like "Vogue Style"
  preview: string; // path to the preview image (for landing page/cards)
  contentKey: TemplateContentKey; // field to be edited by user
  defaultValue: string; // default text shown before editing
  font?: string; // optional font family
  style: React.CSSProperties; // CSS to position & style the text block
  dimensions: {
    width: number;
    height: number;
  };
};
