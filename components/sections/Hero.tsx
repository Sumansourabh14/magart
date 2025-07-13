import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="py-20 2xl:py-40 px-8">
      <section className="max-w-[780px] mx-auto space-y-8 text-center">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extralight tracking-tight text-balance">
          Generate beautiful cover images
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Turn any photo into a stunning magazine-style poster. Pick a template,
          enter text, and download instantly.
        </p>
        <Button asChild className="py-8 px-16">
          <Link href="/create/image" className="text-xl">
            Get Started
          </Link>
        </Button>
        <div className="my-[-16px]">
          <Link href="/templates" className="underline">
            Or browse templates
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Hero;
