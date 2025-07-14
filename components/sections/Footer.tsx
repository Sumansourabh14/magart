import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import { SITE_METADATA } from "@/utils/constants";

const footerLinks = [
  {
    title: "Templates",
    destination: "/templates",
  },
  {
    title: "Create Image",
    destination: "/upload/image",
  },
];

const Footer = () => {
  return (
    <footer className="border-t py-6">
      <NavigationMenu className="flex flex-col md:flex-row gap-[24px] flex-wrap items-center justify-between max-w-[1400px] mx-auto px-4">
        <section className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {SITE_METADATA.title}. All rights
          reserved.
        </section>
        <NavigationMenuList>
          {footerLinks.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink asChild>
                <Link href={item.destination}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Separator className="mt-6" />
    </footer>
  );
};

export default Footer;
