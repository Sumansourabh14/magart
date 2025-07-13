"use client";
import ChooseTemplatePreview from "@/components/sections/ChooseTemplatePreview";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import TemplateRenderer from "../render/TemplateRenderer";
import TemplateDownloader from "../utils/TemplateDownloader";

const ImageUploader = () => {
  const [image, setImage] = useState<string | null>(null);
  const [templateId, setTemplateId] = useState<string | null>(null);
  const [text, setText] = useState<string>("");

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
      <section className="py-20">
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
      </section>

      <Separator />

      {image && (
        <section>
          <ChooseTemplatePreview
            imageUrl={image}
            setTemplateId={setTemplateId}
          />
        </section>
      )}

      <Separator />

      {image && templateId && (
        <section className="space-y-4 max-w-[800px] mx-auto">
          <section className="space-y-2">
            <Label>Enter text</Label>
            <Input
              placeholder="Enter text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </section>
          <TemplateDownloader>
            <TemplateRenderer
              image={image}
              templateId={templateId}
              text={text}
            />
          </TemplateDownloader>
        </section>
      )}
    </>
  );
};

export default ImageUploader;
