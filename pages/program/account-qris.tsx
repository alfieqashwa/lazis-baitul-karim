import Head from "next/head"

import { Layout } from "@/components/layout"

export default function AccountQrisPage() {
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
        <div className="min-h-screen">
          <h2 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl">
            Rekening & Qris
          </h2>
          <div className="mt-8 space-y-2 text-lg tracking-wide">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos a reiciendis amet, et nam sequi provident voluptates
              iste voluptatem facilis nulla incidunt deserunt molestias,
              asperiores, possimus quidem non qui sunt?
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
