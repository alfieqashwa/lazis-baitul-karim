import Head from "next/head"

import { Layout } from "@/components/layout"

export default function ProgramsPage() {
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
            Prinsip
          </h2>
          <div className="mt-8 space-y-2 text-lg tracking-wide">
            <h3 className="text-xl font-bold">PROFESIONAL</h3>
            <p>
              Karakter seseorang dalam bekerja dengan kemampuan yang tinggi
              sesuai bidang keahliannya dan berpegang kepada moral yang baik.
            </p>
            <h3 className="pt-4 text-xl font-bold">RELIGIUS</h3>
            <p>
              Karakter seseorang yang fikiran, hati dan akhlaknya didasari
              dengan syariat islam dan merealisasikannya atas dasar iman yang
              tinggi. INTEGRITAS Karakter seseorang yang menunjukkan kecerdasan
              tidak saja intelektual, tapi juga kecerdasan emosional dan
              spiritual dengan melahirkan pribadi yang berakhlak.
            </p>
            <h3 className="pt-4 text-xl font-bold">MELAYANI</h3>
            <p>
              Karakter seseorang yang berjuang dan berkorban untuk kemaslahatan
              orang lain dan melayani dengan hati.
            </p>
            <h3 className="pt-4 text-xl font-bold">AMANAH</h3>
            <p>
              Karakter seseorang yang benar-benar bisa dipercaya, bertanggung
              jawab dan melakukan pekerjaannya atas dasar iman, islam dan ihsan.
            </p>
          </div>
        </div>
      </section>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-4xl lg:text-5xl">
            Program-program
          </h2>
          <div className="mt-8 space-y-2 text-lg tracking-wide">
            <h3 className="text-xl font-bold">Jangka Pendek</h3>
            <ul className="list-outside list-disc pl-4">
              <li>Belanja Sandang Bayar dengan Doa</li>
              <li>Raihlah Yatim Dhu&apos;afa</li>
              <li>Sunatan Massal</li>
            </ul>
          </div>
          <div className="mt-8 space-y-2 text-lg tracking-wide">
            <h3 className="text-xl font-bold">Jangka Panjang</h3>
            <ul className="list-outside list-disc pl-4">
              <li>Jum&apos;at Berkah</li>
              <li>Beasiswa Pendidikan Yatim dan Dhuafa</li>
              <li>Sembako untuk keluarga Yatim dan Dhu’afa</li>
              <li>Pembiayaan UMKM untuk memandirikan Yatim Dan Dhu’afa</li>
              <li>
                Bantuan untuk kaum muslimin yg terkena penyakit berat tapi tdk
                mampu berobat
              </li>
              <li>Rumah Tahfidz untuk Yatim & Dhuafa</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}
