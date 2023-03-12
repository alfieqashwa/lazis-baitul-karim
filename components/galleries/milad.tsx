"use client"

import { useState } from "react"
import Image from "next/image"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export const MiladGallery = () => {
  const [milad] = useState([
    { title: "milad001" },
    { title: "milad002" },
    { title: "milad003" },
    { title: "milad004" },
    { title: "milad005" },
    { title: "milad006" },
    { title: "milad007" },
    { title: "milad008" },
    { title: "milad009" },
    { title: "milad010" },
    { title: "milad011" },
    { title: "milad012" },
    { title: "milad013" },
    { title: "milad014" },
    { title: "milad015" },
    { title: "milad016" },
    { title: "milad017" },
    { title: "milad018" },
    { title: "milad019" },
    { title: "milad020" },
  ])

  return (
    <div className="relative mx-auto w-full max-w-7xl columns-2 gap-1 px-4 md:columns-3 lg:columns-5 xl:px-0">
      {milad?.map((m) => (
        <Dialog key={m.title}>
          <DialogTrigger asChild className="cursor-pointer">
            <Image
              className="w-full object-cover ring-4 ring-slate-100 dark:ring-fuchsia-100"
              src={`/img/milad/${m.title}.jpg`}
              alt={m.title}
              width="200"
              height="100"
              priority
            />
          </DialogTrigger>
          <DialogContent className="grid min-h-screen min-w-full place-items-center">
            <Image
              className="-mx-6 max-w-sm object-cover sm:max-w-md lg:max-w-xl xl:max-w-2xl"
              src={`/img/milad/${m.title}.jpg`}
              alt={m.title}
              width="800"
              height="800"
              priority
              key={m.title}
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
