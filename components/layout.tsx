import { SiteHeader } from "@/components/site-header"
import { Whatsapp } from "./whatsapp"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="min-w-[320px]">{children}</main>
      <footer className="absolute bottom-0 w-full py-3">
        <div className="py-1 text-center text-xs font-medium text-slate-600 dark:text-slate-400">
          Copyright © {new Date().getFullYear()} by{" "}
          <a
            className="tracking-wider text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-slate-100"
            href="https://github.com/alfieqashwa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alfie Qashwa
          </a>
        </div>
      </footer>
      <Whatsapp />
    </>
  )
}
