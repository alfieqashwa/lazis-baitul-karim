import Head from "next/head"

import { Layout } from "@/components/layout"

export default function VissionPage() {
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
            Visi dan Misi
          </h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
          vitae, pariatur odit eligendi itaque voluptas tenetur adipisci
          corrupti amet. Voluptatibus libero dolore quia id ipsa perspiciatis
          nulla fuga quaerat recusandae.
        </div>
      </section>
    </Layout>
  )
}
