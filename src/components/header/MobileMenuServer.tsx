import { getLinks } from "@/services/cmsService";
import MobileMenu from "./MobileMenu";
import { navItems } from "./navItems";

export default async function MobileMenuServer() {
  const links = await getLinks();
  return (
    <MobileMenu
      navItems={navItems}
      socialLinks={links?.socials ?? []}
      email={links?.email ?? ""}
    />
  );
}
