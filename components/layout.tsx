import { SiteHeader } from "@/components/site-header"
import { Whatsapp } from "./whatsapp"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="mb-14 min-w-[320px]">{children}</main>
      <footer className="fixed bottom-0 z-20 w-full bg-slate-100 py-1 dark:bg-slate-800">
        <div className="text-center text-xs font-medium text-slate-600 dark:text-slate-400">
          Copyright © {new Date().getFullYear()} by{" "}
          <a
            className="tracking-wider text-slate-700 transition hover:text-slate-800 dark:text-slate-200 dark:hover:text-slate-100"
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
