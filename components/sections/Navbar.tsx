import Link from "next/link";
import { Separator } from "../ui/separator";
import { SITE_METADATA } from "@/utils/constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

const options = [
  {
    title: "Templates",
    destination: "/templates",
  },
  {
    title: "Create Image",
    destination: "/create/image",
  },
];

const Navbar = () => {
  return (
    <NavigationMenu className="row-start-3 flex gap-[24px] flex-wrap items-center justify-between max-w-[1400px] mx-auto">
      <section>
        <Link href={`/`}>{SITE_METADATA.title}</Link>
      </section>
      <NavigationMenuList>
        {options.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild>
              <Link href={item.destination}>{item.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <Separator />
    </NavigationMenu>
  );
};

export default Navbar;
