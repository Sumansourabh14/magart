import React from "react";

const Features = () => {
  return (
    <section className="py-40 ">
      <h2 className="text-3xl font-bold mb-6">Features</h2>
      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full mx-auto">
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="font-semibold text-xl mb-2">📸 Upload & Go</h3>
          <p className="text-muted-foreground">
            Upload a photo and instantly preview it on a professional magazine
            layout.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="font-semibold text-xl mb-2">🎨 Stylish Templates</h3>
          <p className="text-muted-foreground">
            Choose from Vogue, TIME, Indie zine styles and more — with just one
            click.
          </p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="font-semibold text-xl mb-2">⬇️ Instant Download</h3>
          <p className="text-muted-foreground">
            No sign-up needed. Just create and download your poster-ready cover.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Features;
