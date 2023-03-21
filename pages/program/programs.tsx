import { Header } from "@/components/header"
import { Layout } from "@/components/layout"
import {
  PrincipleListCard,
  ProgramListAccordion,
} from "@/components/programs-principles.tsx"

export default function ProgramsPage() {
  return (
    <Layout>
      <Header title="Program" />
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <h2 className="gradient-title py-1 text-2xl font-extrabold sm:text-2xl md:text-4xl lg:text-5xl">
          Prinsip
        </h2>
        <PrincipleListCard />
      </section>
      <section className="container mt-4 grid items-center gap-6">
        <h2 className="gradient-title py-1 text-2xl font-extrabold sm:text-2xl md:text-4xl lg:text-5xl">
          Program
        </h2>
        <ProgramListAccordion />
      </section>
    </Layout>
  )
}
