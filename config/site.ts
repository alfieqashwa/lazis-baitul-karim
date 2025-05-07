import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  mobileNav: NavItem[]
  links: {
    facebook: string
    instagram: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Lazis Baitul Karim",
  description: "Lembaga Amil Zakat Infaq dan Sodaqoh.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  mobileNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Profil",
      href: "/about-us/profile",
    },
    {
      title: "Visi & Misi",
      href: "/about-us/vision-mission",
    },
    {
      title: "Organisasi",
      href: "/about-us/organization",
    },
    {
      title: "Prinsip & Program",
      href: "/program/programs",
    },
    {
      title: "Aktivitas",
      href: "/program/activities",
    },
    {
      title: "Rekening & QRIS",
      href: "/program/account-qris",
    },
    {
      title: "Kontak Kami",
      href: "/program/our-contact",
    },
  ],
  links: {
    facebook: "https://facebook.com/lazisbaitulkarim",
    instagram: "https://instagram.com/lazisbaitulkarim",
    // docs: "https://drive.google.com/file/d/1HGaz0DWKrc4H23nZ6BBKYMm3CgQvCCFa/view?usp=sharing"
    docs: "https://drive.google.com/file/d/1ugKBKLuyJa-waqfGV3eKfNDKK8u8nV1l/view?usp=sharing",
  },
}
