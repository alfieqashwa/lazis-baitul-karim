import { useState } from "react"
import Head from "next/head"
import { ChevronsUpDown } from "lucide-react"

import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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
          <PembinaDanDewan />
          <div className="mt-4">
            {/* STARTS DIRECTOR */}
            <article className="-mx-4 flex justify-center py-4 sm:-mx-0">
              <section className="flex items-center justify-start p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  src="/img/leader/mul.jpg"
                  alt="Sri Mulyani"
                  className="z-10 h-16 w-16 shrink-0 rounded-full object-cover shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20"
                />
                <div className="-ml-3 h-16 w-60 rounded-r-full bg-slate-50 shadow md:w-64">
                  <div className="flex flex-col items-center justify-between pt-2">
                    <h3 className="text-md font-semibold text-slate-900">
                      Sri Mulyani
                    </h3>
                    <h4 className="md:text-md text-sm font-bold uppercase text-sky-700">
                      direktur
                    </h4>
                  </div>
                </div>
              </section>
            </article>
            {/* ENDS DIRECTOR */}
            {/* STARTS SUB-DIRECTORAL */}
            <article className="-mx-4 flex flex-col items-center justify-start py-4 sm:-mx-0 sm:flex-row sm:justify-between sm:px-4 md:px-12">
              <section className="flex items-center justify-start p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  loading="lazy"
                  src="/img/leader/nandi.jpg"
                  alt="Sunardi Sofjan"
                  className="z-10 h-16 w-16 shrink-0 rounded-full object-cover shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20"
                />
                <div className="-ml-3 h-16 w-60 rounded-r-full bg-slate-50 shadow md:w-64">
                  <div className="flex flex-col items-center justify-between pt-2">
                    <h3 className="text-md font-semibold text-slate-900">
                      Sunardi Sofjan, SE
                    </h3>
                    <h4 className="md:text-md text-sm font-bold uppercase text-sky-700">
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
                  className="z-10 h-16 w-16 shrink-0 rounded-full object-cover shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20"
                />
                <div className="-ml-3 h-16 w-60 rounded-r-full bg-slate-50 shadow md:w-64">
                  <div className="flex flex-col items-center justify-between pt-2">
                    <h3 className="text-md font-semibold text-slate-900">
                      Juita Suar, S.Pd
                    </h3>
                    <h4 className="md:text-md text-sm font-bold uppercase text-sky-700">
                      sekretaris
                    </h4>
                  </div>
                </div>
              </section>
            </article>
            {/* ENDS SUB-DIRECTORAL */}
            {/* STARTS MANAGERS */}
            <article className="-mx-4 flex flex-col items-center justify-start space-y-12 py-8 md:-mx-0 md:space-y-16 lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:px-12">
              <ManagerKeuangan />
              <ManagerFundRaising />
              <ManagerProgram />
            </article>
            {/* ENDS MANAGERS */}
          </div>
        </div>
      </section>
    </Layout>
  )
}

const PembinaDanDewan = () => {
  const [data] = useState([
    { id: 1, name: "H. Agus Piliang" },
    { id: 2, name: "H. Abdul Hakim" },
    { id: 3, name: "Tri Waskito Adjie" },
    { id: 4, name: "H. Ir. M. Rachmat Widayana, SE, MM" },
    { id: 5, name: "H. Arlendri" },
  ])

  return (
    <article className="p-4">
      <section>
        <h3 className="text-lg font-extrabold leading-tight tracking-tighter sm:text-xl md:text-2xl lg:text-4xl">
          Pembina
        </h3>
        <ul className="mt-2">
          {data.map((d) => (
            <li
              className="md:text-md pl-2 text-sm font-semibold sm:text-base lg:text-lg"
              key={d.id}
            >
              {d.name}
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-4">
        <h3 className="text-lg font-extrabold leading-tight tracking-tighter sm:text-xl md:text-2xl lg:text-4xl">
          Dewan Pengawas Syari&apos;ah
        </h3>
        <p className="md:text-md mt-2 pl-2 text-sm font-semibold sm:text-base lg:text-lg">
          Ustadz H. Hariri Suhairi
        </p>
      </section>
    </article>
  )
}

const ManagerKeuangan = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col items-center justify-start p-2"
    >
      <CollapsibleTrigger asChild>
        <Button variant="custom" size="sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            loading="lazy"
            src="/img/leader/nina.jpg"
            alt="Alpha"
            className="z-10 h-16 w-16 shrink-0 rounded-full object-cover shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20"
          />
          <div className="-ml-3 h-16 w-60 rounded-r-full bg-slate-50 shadow md:w-64">
            <div className="flex flex-col items-center justify-between pt-2">
              <h3 className="text-md font-semibold text-slate-900">
                Alpha G.K. S.Kom, S.Pd
              </h3>
              <h4 className="md:text-md text-sm font-bold uppercase text-sky-700">
                manajer keuangan
              </h4>
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  )
}

const ManagerFundRaising = () => {
  const [data] = useState([
    { id: 1, name: "Irwan Thoib", nickname: "thoib" },
    { id: 2, name: "Muhammad Andri", nickname: "andi" },
    { id: 3, name: "Tasya Amalia", nickname: "tasya" },
    { id: 4, name: "Andriansyah", nickname: "andri" },
  ])
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col items-center justify-start p-2"
    >
      <CollapsibleTrigger asChild>
        <Button variant="custom" size="sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            loading="lazy"
            src="/img/leader/refi.jpg"
            alt="Refi Murzaki"
            className="z-10 h-16 w-16 shrink-0 rounded-full object-cover shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20"
          />
          <div className="-ml-3 h-16 w-60 rounded-r-full bg-slate-50 shadow md:w-64">
            <div className="flex flex-col items-center justify-between pt-2">
              <h3 className="text-md font-semibold text-slate-900">
                Refi Murzaki
              </h3>
              <h4 className="md:text-md text-sm font-bold uppercase text-sky-700">
                manajer fundraising
              </h4>
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-9 flex flex-col space-y-5 px-4 lg:mt-12">
        {data.map((d) => (
          <section className="flex items-center" key={d.id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              src={`/img/leader/${d.nickname}.jpg`}
              alt={d.nickname}
              className="z-10 h-12 w-12 shrink-0 rounded-full object-cover shadow ring-2 ring-teal-600 ring-offset-4 md:h-16 md:w-16"
            />
            <div className="-ml-2 h-12 w-56 rounded-r-full bg-slate-50 shadow md:h-14">
              <div className="flex flex-col items-center justify-between pt-2">
                <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                  {d.name}
                </h3>
                <h4 className="text-xs font-bold uppercase text-sky-700">
                  staff fundraising
                </h4>
              </div>
            </div>
          </section>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
const ManagerProgram = () => {
  const [data] = useState([
    { id: 1, name: "Sunarto Sofjan, SE", nickname: "nanto" },
    { id: 2, name: "Ariandi Setiawan, S.Kom", nickname: "ari" },
  ])
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col items-center justify-start p-2"
    >
      <CollapsibleTrigger asChild>
        <Button variant="custom" size="sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            loading="lazy"
            src="/img/leader/rizal.jpg"
            alt="Rizal Aburusman"
            className="z-10 h-16 w-16 shrink-0 rounded-full object-cover shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20"
          />
          <div className="-ml-3 h-16 w-60 rounded-r-full bg-slate-50 shadow md:w-64">
            <div className="flex flex-col items-center justify-between pt-2">
              <h3 className="text-md font-semibold text-slate-900">
                Rizal Aburusman
              </h3>
              <h4 className="md:text-md text-sm font-bold uppercase text-sky-700">
                manajer program
              </h4>
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-9 flex flex-col space-y-5 px-4 lg:mt-12">
        {data.map((d) => (
          <section className="flex items-center" key={d.id}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              loading="lazy"
              src={`/img/leader/${d.nickname}.jpg`}
              alt={d.nickname}
              className="z-10 h-12 w-12 shrink-0 rounded-full object-cover shadow ring-2 ring-teal-600 ring-offset-4 md:h-16 md:w-16"
            />
            <div className="-ml-2 h-12 w-56 rounded-r-full bg-slate-50 shadow md:h-14">
              <div className="flex flex-col items-center justify-between pt-2">
                <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                  {d.name}
                </h3>
                <h4 className="text-xs font-bold uppercase text-sky-700">
                  staff program
                </h4>
              </div>
            </div>
          </section>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
