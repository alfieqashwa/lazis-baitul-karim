import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    facebook: string
    instagram: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Lazis Baitul Karim",
  description:
    "Lembaga Amil Zakat Infaq dan Sodaqoh.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    facebook: "https://facebook.com/lazisbaitulkarim",
    instagram: "https://instagram.com/lazisbaitulkarim",
    docs: "https://drive.google.com/file/d/1mvOM3arrZjBDJBYvQoet4TVbVYNuiBXS/view?usp=share_link",
  },
}
