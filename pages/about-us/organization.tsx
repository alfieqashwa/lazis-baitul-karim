import { Header } from "@/components/header"
import { Layout } from "@/components/layout"
import {
  CreativeDigital,
  Direktur,
  ManagerFundraising,
  ManagerKeuangan,
  ManagerProgram,
  PembinaDanDewan,
  SubDirektur,
} from "@/components/structure-organization"

export default function OrganizationPage() {
  return (
    <Layout>
      <Header title="Organisasi" />
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <h2 className="gradient-title py-1 text-2xl font-extrabold sm:text-2xl md:text-4xl lg:text-5xl">
          Struktur Organisasi
        </h2>
        <PembinaDanDewan />
        <div className="mt-4">
          <Direktur />
          <SubDirektur />
          {/* STARTS MANAGERS */}
          <article className="-mx-4 flex flex-col items-center justify-start space-y-8 py-8 md:-mx-0 md:space-y-16 lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:px-12">
            <ManagerKeuangan />
            <ManagerFundraising />
            <ManagerProgram />
          </article>
          {/* ENDS MANAGERS */}
        </div>
        <article className="-mx-4 flex flex-col items-center justify-start pb-8 sm:-mx-0 sm:flex-row sm:justify-between sm:px-4 md:px-12">
          <CreativeDigital />
        </article>
      </section>
    </Layout>
  )
}
