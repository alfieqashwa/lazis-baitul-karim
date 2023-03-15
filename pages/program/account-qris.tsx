import { useState } from "react"
import Head from "next/head"
import Image from "next/image"

import { Header } from "@/components/header"
import { Layout } from "@/components/layout"

export default function AccountQrisPage() {
  let [data] = useState([
    {
      phone: "718-910-5201",
      an: "a.n LAZIS Baitul Karim Infaq & Shodaqoh",
      qris: "qris-lazis",
    },
    {
      phone: "718-910-4857",
      an: "a.n LAZIS Baitul Karim Zakat",
      qris: "qris-lbk-zakat",
    },
  ])
  return (
    <Layout>
      <Header title="QRIS" />
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <h2 className="gradient-title py-1 text-2xl font-extrabold sm:text-2xl md:text-4xl lg:text-5xl">
          Rekening & QRIS
        </h2>
        <div className="mt-8 space-y-2 text-lg tracking-wide">
          <h3 className="pb-4 text-center text-xl font-bold capitalize md:text-2xl lg:text-3xl">
            rekening donasi LAZIS baitul karim
          </h3>
          <section className="flex flex-col space-y-6">
            {data.map((d, i) => (
              <section key={i}>
                <div className="mx-auto mt-8 flex w-full max-w-md flex-col items-center justify-center space-y-4 space-x-4 rounded-3xl border-4 border-teal-500 p-4 shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-auto w-44 lg:w-52"
                    src="/img/bsi.png"
                    alt="Bank Syariah Indonesia"
                  />
                  <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                    {d.phone}
                  </h2>
                  <p className="text-sm font-semibold text-teal-500 lg:text-base">
                    {d.an}
                  </p>
                </div>
                <div className="mt-8 flex justify-center">
                  <Image
                    className="rounded-md object-cover"
                    src={`/img/qris/${d.qris}.jpg`}
                    alt={d.qris}
                    width={600}
                    height={600}
                  />
                </div>
                <hr className="mt-12" />
              </section>
            ))}
          </section>
        </div>
      </section>
    </Layout>
  )
}
