import Head from "next/head"

import { Layout } from "@/components/layout"

export default function OurContactPage() {
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
        <div>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl">
            Kontak Kami
          </h2>
          <div className="mx-4 mt-12 space-y-2 text-lg tracking-wide">
            <h3 className="text-xl font-bold uppercase">alamat</h3>
            <p>
              Baitul Karim. Jl. Kebon Kacang 14-16, Tanah Abang – Jakarta Pusat
            </p>
            <h3 className="pt-4 text-xl font-bold uppercase">telepon</h3>
            <ul className="list-outside list-disc pl-6">
              <li>0822-1127-5656 (LAZIS Whatsapp)</li>
              <li>0853-1234-7030 (Nandi)</li>
              <li>0818-0689-9520 (Nanto)</li>
              <li>0878-8685-7806 (Refi)</li>
            </ul>
            <h3 className="pt-4 text-xl font-bold uppercase">social media</h3>
            <ul className="list-outside list-disc pl-6">
              <li>Instagram: lazisbaitulkarim</li>
              <li> Facebook: lazisbaitulkarim</li>
            </ul>
            <h3 className="pt-4 text-xl font-bold uppercase">email</h3>
            <p>lazis.mbk@gmail.com</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
