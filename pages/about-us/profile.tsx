import Image from "next/image"

import { Header } from "@/components/header"
import { Layout } from "@/components/layout"
import { LazisLogo } from "@/components/ui/lazis-logo"

export default function ProfilePage() {
  return (
    <Layout>
      <Header title="Profil" />
      <section
        id="profile"
        className="container grid items-center gap-6 pt-6 pb-8 md:py-10"
      >
        <h2 className="gradient-title py-1 text-2xl font-extrabold sm:text-2xl md:text-4xl lg:text-5xl">
          Profil
        </h2>
        <div className="flex flex-col items-center space-y-6 py-6 md:flex-row md:justify-evenly md:space-y-0">
          <Image
            src="/favicon.ico"
            alt="Lazis"
            width={175}
            height={175}
            priority
            className="transition-all duration-300 ease-in-out hover:scale-105"
          />
          <Image
            src="/img/logo/yatim-mandiri-logo.jpg"
            alt="Yatim Mandiri"
            width={280}
            height={280}
            priority
            className="rounded-md transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <article className="space-y-2 text-lg tracking-wide">
          <p>
            Lembaga Amil Zakat, Infaq dan Shodaqoh (LAZIS) Baitul Karim berdiri
            pada hari Sabtu, 5 Februari 2022, ba&apos;da ashar di masjid Baitul
            Karim, jalan Kebon Kacang 14-16 Tanah Abang Jakarta Pusat.
          </p>
          <p>
            Lahir dari sebuah ide remaja dan pemuda Masjid Baitul Karim untuk
            membangun kemandirian umat, khususnya yatim dan dhu&apos;afa.
          </p>
          <p>
            LAZIS Baitul Karim berdiri atas kerjasama dengan Lembaga Amil Zakat,
            infaq dan Shodaqoh Nasional (LAZNAS) Yatim Mandiri yang berkantor
            pusat di Surabaya.
          </p>
        </article>
        <article className="space-y-2 text-lg tracking-wide">
          <p>
            Yatim Mandiri terdaftar di{" "}
            <strong>
              Departemen Hukum dan Hak Asasi Manusia Republik Indonesia
            </strong>{" "}
            dengan
            <strong> Nomor : Ahu-2413.ah.01.02.2008</strong>. Yatim Mandiri juga
            telah resmi terdaftar menjadi Lembaga Amil Zakat, Infaq dan Shodaqoh
            Nasional berdasarkan
            <strong> SK. Kemenag RI no 185 tahun 2016</strong>.
          </p>
          <p>
            Yatim Mandiri memiliki <em>52 kantor</em> layanan di{" "}
            <em>14 propinsi</em> di Indonesia.
          </p>
        </article>
      </section>
    </Layout>
  )
}
