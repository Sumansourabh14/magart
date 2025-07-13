"use client";
import React, { useState } from "react";
import VogueTemplate from "../templates/Vogue";
import { Input } from "../ui/input";
import TemplateDownloader from "../utils/TemplateDownloader";

const ImageUploader = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string); // base64 data URL
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <form>
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
      </form>

      {image && (
        <TemplateDownloader>
          <VogueTemplate
            image={image}
            name="John Doe"
            title="Vogue"
            subtitle="Vogue subtitle"
          />
        </TemplateDownloader>
      )}
    </>
  );
};

export default ImageUploader;
