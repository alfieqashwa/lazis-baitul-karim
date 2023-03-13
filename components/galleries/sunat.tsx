"use client"

import { useState } from "react"
import Image from "next/image"
import { DialogClose } from "@radix-ui/react-dialog"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export const SunatGallery = () => {
  const [data] = useState([
    { title: "sunat-001" },
    { title: "sunat-002" },
    { title: "sunat-003" },
    { title: "sunat-004" },
    { title: "sunat-005" },
    { title: "sunat-006" },
    { title: "sunat-007" },
    { title: "sunat-008" },
    { title: "sunat-009" },
    { title: "sunat-010" },
    { title: "sunat-011" },
    { title: "sunat-012" },
    { title: "sunat-013" },
    { title: "sunat-014" },
    { title: "sunat-015" },
    { title: "sunat-016" },
    { title: "sunat-017" },
    { title: "sunat-018" },
    { title: "sunat-019" },
    { title: "sunat-020" },
    { title: "sunat-021" },
    { title: "sunat-022" },
    { title: "sunat-023" },
    { title: "sunat-024" },
    { title: "sunat-025" },
    { title: "sunat-026" },
    { title: "sunat-027" },
    { title: "sunat-028" },
    { title: "sunat-029" },
    { title: "sunat-030" },
  ])

  return (
    <article>
      <div className="space-y-2 text-lg tracking-wide">
        <h3 className="pt-4 text-xl font-bold">
          SUNATAN MASSAL UNTUK YATIM & DHUAFA
        </h3>
        <p>
          Merupakan sebuah kegiatan dari LAZIS Baitul Karim yang bekerja-sama
          dengan <strong>Rumah Sunat Dr. Mahdian</strong> melaksanakan sunatan
          massal kepada 41 orang anak Yatim & Dhuafa. Pelaksanaan tersebut
          dilaksanakan pada <em>Hari Sabtu, 27 Agustus 2022</em> di{" "}
          <strong>Masjid Baitul Karim</strong>.
        </p>
      </div>
      <div className="mx-auto mt-12 w-full max-w-7xl columns-2 gap-1 px-4 md:columns-3 lg:columns-5 xl:px-0">
        {data?.map((d) => (
          <Dialog key={d.title}>
            <DialogTrigger asChild className="cursor-pointer">
              <Image
                className="w-full object-cover ring-4 ring-slate-100 dark:ring-fuchsia-100"
                src={`/img/sunat/${d.title}.JPG`}
                alt={d.title}
                width="200"
                height="100"
                priority
              />
            </DialogTrigger>
            <DialogContent className="grid min-h-screen min-w-full place-items-center">
              <DialogClose>
                <Image
                  className="-mx-6 max-w-sm object-cover sm:max-w-md lg:max-w-xl xl:max-w-2xl"
                  src={`/img/sunat/${d.title}.JPG`}
                  alt={d.title}
                  width="800"
                  height="800"
                  priority
                  key={d.title}
                />
              </DialogClose>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </article>
  )
}
