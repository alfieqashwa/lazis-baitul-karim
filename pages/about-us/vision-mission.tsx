import { Header } from "@/components/header"
import { Layout } from "@/components/layout"

export default function VissionPage() {
  return (
    <Layout>
      <Header title="Visi & Misi" />
      <section
        id="vission-mission"
        className="container grid items-center gap-6 pt-6 pb-8 md:py-10"
      >
        <h2 className="gradient-title py-1 text-2xl font-extrabold sm:text-2xl md:text-4xl lg:text-5xl">
          Visi dan Misi
        </h2>
        <section className="mt-4 space-y-8 px-4 text-lg tracking-wide">
          <article className="space-y-2">
            <h3 className="text-xl font-bold">Visi</h3>
            <p>
              Menjadi Lembaga Amil Zakat, Infaq dan Shodaqoh (LAZIS) yang amanah
              dan profesional dalam membangun kemandirian umat, khususnya yatim
              dan dhu’afa
            </p>
          </article>
          <article className="space-y-2">
            <h3 className="text-xl font-bold">Misi</h3>
            <ol className="list-outside list-decimal pl-5">
              <li>
                Membangun kemandirian umat, khususnya yatim dan dhu&apos;afa.
              </li>
              <li>
                Meningkatkan sinergi dengan masyarakat dan sumber daya lainnya
                untuk kemandirian umat, anak-anak yatim dan dhu&apos;afa.
              </li>
              <li>
                Meningkatkan sinergi, jaringan dan profesionalitas organisasi.
              </li>
            </ol>
          </article>
        </section>
      </section>
    </Layout>
  )
}
