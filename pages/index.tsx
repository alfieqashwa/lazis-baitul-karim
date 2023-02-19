import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Lazis Baitul Karim</title>
        <meta
          name="description"
          content="Lembaga Amil Zakat Infaq dan Sodaqoh"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight  tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Lazis Baitul Karim <br className="hidden sm:inline" />
            Cinta Yatim di Cinta Nabi.
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Lembaga Amil Zakat, Infaq dan Sodaqoh.
          </p>
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
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Instagram
          </Link>
        </div>
      </section>
    </Layout>
  )
}
