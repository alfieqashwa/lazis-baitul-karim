import { useState } from "react"

import { Header } from "@/components/header"
import { Layout } from "@/components/layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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
          {/* STARTS DIRECTOR */}
          <article className="-mx-4 flex justify-center py-4 sm:-mx-0">
            <section className="flex items-center justify-start p-2">
              <Avatar className="z-10 h-16 w-16 shrink-0 rounded-full shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20">
                <AvatarImage
                  src="/img/leader/mul.jpg"
                  className="object-cover"
                />
                <AvatarFallback>Sri Mulyani</AvatarFallback>
              </Avatar>
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
              <Avatar className="z-10 h-16 w-16 shrink-0 rounded-full shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20">
                <AvatarImage
                  src="/img/leader/nandi.jpg"
                  className="object-cover"
                />
                <AvatarFallback>Sunardi Sofjan</AvatarFallback>
              </Avatar>
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
              <Avatar className="z-10 h-16 w-16 shrink-0 rounded-full shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20">
                <AvatarImage
                  src="/img/leader/juita.jpg"
                  className="object-cover"
                />
                <AvatarFallback>Juita Suar</AvatarFallback>
              </Avatar>
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
          <article className="-mx-4 flex flex-col items-center justify-start space-y-8 py-8 md:-mx-0 md:space-y-16 lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:px-12">
            <ManagerKeuangan />
            <ManagerFundRaising />
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

const PembinaDanDewan = () => {
  const [data] = useState([
    { id: 1, name: "H. Agus Piliang" },
    { id: 2, name: "H. Abdul Hakim" },
    { id: 3, name: "Tri Waskito Adjie" },
    { id: 4, name: "H. Ir. M. Rachmat Widayana, SE, MM" },
    { id: 5, name: "H. Arlendri" },
  ])

  return (
    <article className="mt-4 flex w-full flex-col items-center space-y-6 md:flex-row md:items-start md:justify-between md:space-y-0 md:space-x-8 md:px-4">
      <section className="w-full rounded-2xl border-4 border-slate-500 p-6 shadow-md dark:border-slate-200 dark:bg-slate-800 md:w-1/2">
        <h3 className="text-lg font-extrabold leading-tight tracking-tighter sm:text-xl md:text-2xl lg:text-3xl">
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
      <section className="w-full rounded-2xl border-4 border-slate-500 p-6 shadow-md dark:border-slate-200 dark:bg-slate-800 md:w-1/2">
        <h3 className="text-lg font-extrabold leading-tight tracking-tighter sm:text-xl md:text-2xl lg:text-3xl">
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
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col items-center justify-start p-2"
    >
      <CollapsibleTrigger asChild>
        <Button variant="custom" size="sm">
          <Avatar className="z-10 h-16 w-16 shrink-0 rounded-full shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20">
            <AvatarImage src="/img/leader/nina.jpg" className="object-cover" />
            <AvatarFallback>Alpha</AvatarFallback>
          </Avatar>
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
  ])
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col items-center justify-start p-2"
    >
      <CollapsibleTrigger asChild>
        <Button variant="custom" size="sm">
          <Avatar className="z-10 h-16 w-16 shrink-0 rounded-full shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20">
            <AvatarImage src="/img/leader/refi.jpg" className="object-cover" />
            <AvatarFallback>Refi Murzaki</AvatarFallback>
          </Avatar>
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
            <Avatar className="z-10 h-12 w-12 shrink-0 rounded-full shadow ring-2 ring-teal-600 ring-offset-4 md:h-16 md:w-16">
              <AvatarImage
                src={`/img/leader/${d.nickname}.jpg`}
                className="object-cover"
              />
              <AvatarFallback>{d.nickname}</AvatarFallback>
            </Avatar>
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
    { id: 3, name: "Erza Afsari", nickname: "ersa" },
  ])
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col items-center justify-start p-2"
    >
      <CollapsibleTrigger asChild>
        <Button variant="custom" size="sm">
          <Avatar className="z-10 h-16 w-16 shrink-0 rounded-full shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20">
            <AvatarImage src="/img/leader/rizal.jpg" className="object-cover" />
            <AvatarFallback>Rizal Aburusman</AvatarFallback>
          </Avatar>
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
            <Avatar className="z-10 h-12 w-12 shrink-0 rounded-full shadow ring-2 ring-teal-600 ring-offset-4 md:h-16 md:w-16">
              <AvatarImage
                src={`/img/leader/${d.nickname}.jpg`}
                className="object-cover"
              />
              <AvatarFallback>{d.nickname}</AvatarFallback>
            </Avatar>
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

const CreativeDigital = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col items-center justify-start p-2"
    >
      <CollapsibleTrigger asChild>
        <Button variant="custom" size="sm">
          <Avatar className="z-10 h-16 w-16 shrink-0 rounded-full shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20">
            <AvatarImage src="/img/leader/andri.jpg" className="object-cover" />
            <AvatarFallback>Andri</AvatarFallback>
          </Avatar>
          <div className="-ml-3 h-16 w-60 rounded-r-full bg-slate-50 shadow md:w-64">
            <div className="flex flex-col items-center justify-between pt-2">
              <h3 className="text-md font-semibold text-slate-900">
                Andriansyah
              </h3>
              <h4 className="md:text-md text-sm font-bold uppercase text-sky-700">
                it & creative digital
              </h4>
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  )
}
