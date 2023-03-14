"use client"

import { useState } from "react"

import { ImagesModal } from "./images-modal"

export const DongengGallery = () => {
  const [datas] = useState([
    { title: "dongeng-001" },
    { title: "dongeng-002" },
    { title: "dongeng-003" },
    { title: "dongeng-004" },
    { title: "dongeng-005" },
    { title: "dongeng-006" },
    { title: "dongeng-007" },
    { title: "dongeng-008" },
    { title: "dongeng-009" },
  ])

  return (
    <article>
      <div className="space-y-2 text-lg tracking-wide">
        <h3 className="pt-4 text-xl font-bold">KEGIATAN DONGENG ISLAMI</h3>
        <p>
          Dongeng Islami Bersama <strong>Kak Danang</strong> dengan tema
          &quot;Menumbuhkan Jiwa Kepedulian Sosial Kepada Yatim dan
          Dhu&apos;afa&quot; yang dihadiri oleh{" "}
          <strong>TPQ Baitul Karim, RA. Ar-Rahman</strong>,{" "}
          <strong>TPQ Baitul Huda</strong> dan <strong>TPQ Said Naum</strong>.
          Acara dilaksanakan pada{" "}
          <em>23 Maret 2022 di Lapangan Masjid Baitul Karim.</em>
        </p>
      </div>
      <div className="gallery-wrapper">
        {datas?.map((d) => (
          <ImagesModal title={d.title} folder="dongeng" key={d.title} />
        ))}
      </div>
    </article>
  )
}
