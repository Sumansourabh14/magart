"use client";
import { Button } from "@/components/ui/button";
import { updateDownloadCount } from "@/services/downloadCount";
import { toPng } from "html-to-image";
import { DownloadIcon } from "lucide-react";
import React, { useRef } from "react";

type TemplateDownloaderProps = {
  id: string;
} & React.PropsWithChildren;

const TemplateDownloader = ({ id, children }: TemplateDownloaderProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleDownload = async () => {
    if (!ref.current) return;

    try {
      const dataUrl = await toPng(ref.current);
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "cover.png";
      link.click();

      await updateDownloadCount(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="space-y-4">
      <section
        ref={ref}
        className="w-[600px] h-[800px] overflow-hidden relative shadow-lg"
      >
        {children}
      </section>
      <Button onClick={handleDownload} className="cursor-pointer">
        <DownloadIcon /> Download
      </Button>
    </section>
  );
};

export default TemplateDownloader;
