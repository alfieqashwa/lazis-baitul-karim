"use client"

import { useState } from "react"

import { ImagesModal } from "./images-modal"

export const BerasGallery = () => {
  const [datas] = useState([
    { title: "beras-001" },
    { title: "beras-002" },
    { title: "beras-003" },
    { title: "beras-004" },
    { title: "beras-005" },
    { title: "beras-006" },
    { title: "beras-007" },
  ])

  return (
    <article>
      <div className="space-y-2 text-lg tracking-wide">
        <h3 className="pt-4 text-xl font-bold">
          PENGAJIAN BULANAN & SEDEKAH BERAS
        </h3>
        <p>
          Kajian rutin bulanan <strong>LAZIS Baitul Karim</strong> berbarengan
          dengan dilaksanakannya pembagian beras kepada Yatim & Dhuafa{" "}
          <em>pada Hari Sabtu, 6 Agustus 2022 di Masjid Baitul Karim.</em>
        </p>
      </div>
      <div className="mx-auto mt-8 w-full max-w-7xl columns-2 gap-1 px-4 md:columns-3 lg:columns-5 xl:px-0">
        {datas?.map((d) => (
          <ImagesModal title={d.title} folder="beras" key={d.title} />
        ))}
      </div>
    </article>
  )
}
