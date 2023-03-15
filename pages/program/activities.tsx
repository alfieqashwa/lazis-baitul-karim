import {
  BerasGallery,
  DongengGallery,
  MiladGallery,
  SunatGallery,
} from "@/components/galleries"
import { Header } from "@/components/header"
import { Layout } from "@/components/layout"

export default function ActivitiesPage() {
  return (
    <Layout>
      <Header title="Aktivitas" />
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <h2 className="gradient-title py-1 text-2xl font-extrabold sm:text-2xl md:text-4xl lg:text-5xl">
          Aktifitas
        </h2>
        <div className="space-y-16">
          <MiladGallery />
          <SunatGallery />
          <BerasGallery />
          <DongengGallery />
        </div>
      </section>
    </Layout>
  )
}
