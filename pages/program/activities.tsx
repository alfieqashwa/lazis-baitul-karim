import Head from "next/head"

import { MiladGallery } from "@/components/galleries/milad"
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
        <h2 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl">
          Kegiatan-kegiatan
        </h2>
        <div className="mt-4 space-y-2 text-lg tracking-wide">
          <h3 className="pt-4 text-xl font-bold">
            MILAD KE – 1 LAZIS BAITUL KARIM
          </h3>
          <p>
            Pada tanggal 5 Februari 2023 telah diadakan program Belanja Pangan
            Bayar Dengan Doa. Dimana acara tersebut bersamaan dengan kegiatan
            tasyakuran Milad ke-1 LAZIS Baitul Karim.
          </p>
          <p>
            Acara ini dihadiri oleh
            <em> 130 orang Yatim & Dhuafa</em>. Selain itu, kegiatan tersebut
            juga dihadiri oleh{" "}
            <strong>
              Ibu Hj. Kurniasih Mufidayati - Anggota Komisi IX DPR RI
            </strong>
            . <strong>Pak Anies Baswedan</strong> yang sedianya hadir,
            Alhamdulillah mengirimkan video ucapan selamat atas terselenggaranya
            acara ini.
            <p>
              Kegiatan tersebut brlangsung pada Hari Ahad, tanggal 5 Februari
              2023 di Lapangan Masjid Baitul Karim.
            </p>
          </p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl columns-2 gap-1 px-4 md:columns-3 lg:columns-5 xl:px-0">
        <MiladGallery />
      </section>
    </Layout>
  )
}
