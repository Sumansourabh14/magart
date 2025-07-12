import Link from "next/link";
import { Separator } from "../ui/separator";
import { SITE_METADATA } from "@/utils/constants";

const Navbar = () => {
  return (
    <nav className="row-start-3 flex gap-[24px] flex-wrap items-center justify-between max-w-[1400px] mx-auto">
      <section>
        <Link href={`/`}>{SITE_METADATA.title}</Link>
      </section>
      <section>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/templates"
        >
          Templates
        </Link>
      </section>
      <Separator />
    </nav>
  );
};

export default Navbar;
