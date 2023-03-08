import Head from "next/head"
import Image from "next/image"

import { Layout } from "@/components/layout"

export default function OrganizationPage() {
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
            Struktur Organisasi
          </h2>
          <div className="thom mt-8">
            <article className="thom flex justify-center py-4">
              <section className="flex items-center justify-start p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  src="/img/leader/mul.jpg"
                  alt="Sri Mulyani"
                  className="z-10 h-20 w-20 shrink-0 rounded-full object-cover shadow ring-2 ring-teal-600 ring-offset-4 sm:h-24 sm:w-24"
                />
                <div className="relative -ml-1 h-16 w-48 rounded-r-full bg-slate-50 shadow sm:w-52">
                  <div className="flex flex-col items-center justify-between pt-2">
                    <h3 className="text-md font-semibold text-slate-900 sm:text-lg">
                      Sri Mulyani
                    </h3>
                    <h4 className="sm:text-md text-sm font-bold uppercase text-sky-700">
                      direktur
                    </h4>
                  </div>
                </div>
              </section>
            </article>
            <article className="thom justift-start flex flex-col items-center py-4 sm:flex-row sm:justify-between sm:px-4 md:px-12">
              <section className="flex items-center justify-start p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  src="/img/leader/nandi.jpg"
                  alt="Sunardi Sofjan"
                  className="z-10 h-20 w-20 shrink-0 rounded-full object-cover shadow ring-2 ring-teal-600 ring-offset-4 sm:h-24 sm:w-24"
                />
                <div className="relative -ml-1 h-16 w-48 rounded-r-full bg-slate-50 shadow sm:w-52">
                  <div className="flex flex-col items-center justify-between pt-2">
                    <h3 className="text-md font-semibold text-slate-900 sm:text-lg">
                      Sunardi Sofjan, SE
                    </h3>
                    <h4 className="sm:text-md text-sm font-bold uppercase text-sky-700">
                      wakil direktur
                    </h4>
                  </div>
                </div>
              </section>
              <section className="flex items-center justify-start p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  src="/img/leader/juita.jpg"
                  alt="Juita Suar"
                  className="z-10 h-20 w-20 shrink-0 rounded-full object-cover shadow ring-2 ring-teal-600 ring-offset-4 sm:h-24 sm:w-24"
                />
                <div className="relative -ml-1 h-16 w-48 rounded-r-full bg-slate-50 shadow sm:w-52">
                  <div className="flex flex-col items-center justify-between pt-2">
                    <h3 className="text-md font-semibold text-slate-900 sm:text-lg">
                      Juita Suar, S.PD
                    </h3>
                    <h4 className="sm:text-md text-sm font-bold uppercase text-sky-700">
                      sekretaris
                    </h4>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  )
}
