import { Header } from "@/components/header"
import { Icons } from "@/components/icons"
import { Layout } from "@/components/layout"

export default function OurContactPage() {
  return (
    <Layout>
      <Header title="Kontak" />
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <h2 className="gradient-title py-1 text-2xl font-extrabold sm:text-2xl md:text-4xl lg:text-5xl">
          Kontak Kami
        </h2>
        <div className="mx-4 space-y-2 text-lg tracking-wide">
          <h3 className="text-xl font-bold uppercase">alamat</h3>
          <p>
            Baitul Karim. Jl. Kebon Kacang 14-16, Tanah Abang – Jakarta Pusat
          </p>
          <h3 className="pt-4 text-xl font-bold uppercase">telepon</h3>
          <ul className="pl-2">
            <li className="flex items-center space-x-2">
              <Icons.message className="h-5 w-5 shrink-0" />
              <span>0822-1127-5656 (LAZIS Whatsapp)</span>
            </li>
            <li className="flex items-center space-x-2">
              <Icons.phone className="h-5 w-5 shrink-0" />
              <span>0853-1234-7030 (Nandi)</span>
            </li>
            <li className="flex items-center space-x-2">
              <Icons.phone className="h-5 w-5 shrink-0" />
              <span>0818-0689-9520 (Nanto)</span>
            </li>
            <li className="flex items-center space-x-2">
              <Icons.phone className="h-5 w-5 shrink-0" />
              <span>0878-8685-7806 (Refi)</span>
            </li>
          </ul>
          <h3 className="pt-4 text-xl font-bold uppercase">social media</h3>
          <ul className="space-y-1 pl-2">
            <li className="flex items-center space-x-2">
              <Icons.instagram className="h-6 w-6" />
              <span>lazisbaitulkarim</span>
            </li>
            <li className="flex items-center space-x-2">
              <Icons.facebook className="h-6 w-6" />
              <span>lazisbaitulkarim</span>
            </li>
          </ul>
          <h3 className="pt-4 text-xl font-bold uppercase">email</h3>
          <ul className="pl-2">
            <li className="flex items-center space-x-2">
              <Icons.mail className="h-6 w-6" />
              <span>lazis.mbk@gmail.com</span>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
