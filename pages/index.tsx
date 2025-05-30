import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Header } from "@/components/header"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <Layout>
      <Header title="Home" />
      <div
        className="-mb-14 min-h-screen bg-cover bg-fixed bg-center bg-no-repeat opacity-90 dark:opacity-80 md:bg-top"
        style={{ backgroundImage: "url('/img/orphan.avif')" }}
      >
        <section className="container grid items-center gap-6">
          <div className="mt-20 flex max-w-[980px] flex-col items-start md:mt-28">
            <h1 className="gradient-title relative text-3xl font-extrabold sm:text-3xl md:text-5xl lg:text-6xl">
              LAZIS Baitul Karim <br className="hidden sm:inline" />
              Cinta Yatim di Cinta Nabi.
            </h1>
            <p className="max-w-[700px] text-lg text-slate-100 dark:text-slate-100 sm:text-xl md:text-2xl">
              Lembaga Amil Zakat, Infaq dan Shodaqoh.
            </p>
          </div>
          <div className="mt-8 text-2xl font-extrabold uppercase text-slate-100 md:text-4xl lg:text-5xl">
            <h2>
              Di dalam <strong className="gradient-title">harta</strong> kita
            </h2>
            <h2>
              ada <strong className="gradient-title">hak</strong> mereka
            </h2>
          </div>
          <div className="flex gap-4">
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "lg" })}
            >
              Documentation
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.instagram}
              className={buttonVariants({
                variant: "customOutline",
                size: "lg",
              })}
            >
              Instagram
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}
