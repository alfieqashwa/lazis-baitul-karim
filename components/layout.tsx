import { SiteHeader } from "@/components/site-header"
import { Copyright } from "./footer"
import { Whatsapp } from "./whatsapp"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="mb-14 min-w-[320px]">{children}</main>
      <Whatsapp />
      <Copyright />
    </>
  )
}
