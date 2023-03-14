"use client"

import { ImagesModal } from "./images-modal"

const DATAS = [
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
]

export const SunatGallery = () => {
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
      <div className="gallery-wrapper">
        {DATAS?.map((d) => (
          <ImagesModal title={d.title} folder="sunat" key={d.title} />
        ))}
      </div>
    </article>
  )
}
