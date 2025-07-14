"use client";

import ChooseTemplatePreview from "@/components/sections/ChooseTemplatePreview";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowBigDown, UploadCloud } from "lucide-react";
import Image from "next/image";
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
      <section className="pb-20">
        <section className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <section className="flex flex-col items-center gap-4">
            <UploadCloud className="w-12 h-12 text-muted-foreground" />
            <Label htmlFor="upload" className="text-sm text-muted-foreground">
              Choose an image from your device
            </Label>
            <Input
              id="upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="cursor-pointer"
            />
            <p className="text-xs text-muted-foreground">
              PNG, JPG, JPEG, and WebP formats are supported
            </p>
          </section>
          <section className="relative w-full max-w-sm aspect-video border-2 border-dashed rounded-md overflow-hidden">
            {image && (
              <Image alt="preview" src={image} fill className="object-cover" />
            )}
          </section>
        </section>
        {image && (
          <section className="flex justify-center mt-16">
            <section className="flex flex-col items-center">
              <h2 className="text-3xl">Great! Now choose a template</h2>
              <ArrowBigDown size={60} />
            </section>
          </section>
        )}
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
        <section className="space-y-4 max-w-[800px] mx-auto mt-20">
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
