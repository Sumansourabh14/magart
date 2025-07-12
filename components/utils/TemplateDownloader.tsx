"use client";
import { Button } from "@/components/ui/button";
import { toPng } from "html-to-image";
import { DownloadIcon } from "lucide-react";
import React, { useRef } from "react";

const TemplateDownloader = ({ children }: React.PropsWithChildren) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleDownload = async () => {
    if (!ref.current) return;

    try {
      const dataUrl = await toPng(ref.current);
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "cover.png";
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="space-y-4">
      <section ref={ref}>{children}</section>
      <Button onClick={handleDownload}>
        <DownloadIcon /> Download
      </Button>
    </section>
  );
};

export default TemplateDownloader;
