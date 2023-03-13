import Head from "next/head"

import {
  BerasGallery,
  DongengGallery,
  MiladGallery,
  SunatGallery,
} from "@/components/galleries"
import { Layout } from "@/components/layout"

export default function ActivitiesPage() {
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
        <h2 className="gradient-title py-1 text-2xl font-extrabold sm:text-2xl md:text-4xl lg:text-5xl">
          Kegiatan-kegiatan
        </h2>
        <div className="mt-8 space-y-16">
          <MiladGallery />
          <SunatGallery />
          <BerasGallery />
          <DongengGallery />
        </div>
      </section>
    </Layout>
  )
}
