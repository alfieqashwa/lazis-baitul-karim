import { useState } from "react"
import Head from "next/head"

import { Layout } from "@/components/layout"

export default function AccountQrisPage() {
  let [data] = useState([
    {
      phone: "718-910-5201",
      an: "a.n LAZIS Baitul Karim Infaq & Shodaqoh",
    },
    {
      phone: "718-910-4857",
      an: "a.n LAZIS Baitul Karim Zakat",
    },
  ])
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
        <h2 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl">
          Rekening & QRIS
        </h2>
        <div className="mt-4 space-y-2 text-lg tracking-wide">
          <h3 className="pb-4 text-center text-xl font-bold capitalize md:text-2xl">
            rekening donasi LAZIS baitul karim
          </h3>
          <section className="flex flex-col space-y-6">
            {data.map((d, i) => (
              <div
                key={i}
                className="mx-auto flex w-full max-w-md flex-col items-center justify-center space-y-4 space-x-4 rounded-3xl border-4 border-teal-500 p-4 shadow-lg"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-auto w-44"
                  src="/img/bsi.png"
                  alt="Bank Syariah Indonesia"
                />
                <h2 className="text-2xl font-bold md:text-3xl">{d.phone}</h2>
                <p className="text-sm font-semibold text-teal-500">{d.an}</p>
              </div>
            ))}
          </section>
        </div>
      </section>
    </Layout>
  )
}
