import UploadImage from "@/components/sections/UploadImage";
import H1 from "@/components/text/H1";
import React from "react";

const Create = () => {
  return (
    <section>
      <H1 title="Create Image" />
      <section className="py-10">
        <UploadImage />
      </section>
    </section>
  );
};

export default Create;
