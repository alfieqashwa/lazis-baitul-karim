"use client"

import { ImagesModal } from "./images-modal"

const DATAS = [
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
]

export const MiladGallery = () => {
  return (
    <article>
      <div className="space-y-2 text-lg tracking-wide">
        <h3 className="pt-4 text-xl font-bold">
          MILAD KE &#45; 1 LAZIS BAITUL KARIM
        </h3>
        <p>
          Pada tanggal <em>5 Februari 2023</em> telah diadakan program Belanja
          Pangan Bayar Dengan Doa, bersamaan dengan kegiatan tasyakuran Milad
          ke-1 LAZIS Baitul Karim di Lapangan Masjid Baitul Karim. Acara ini
          dihadiri oleh
          <em> 130 orang Yatim & Dhuafa</em>. Selain itu, kegiatan tersebut juga
          dihadiri oleh{" "}
          <strong>
            Ibu Hj. Kurniasih Mufidayati - Anggota Komisi IX DPR RI
          </strong>
          .
        </p>
        <p>
          <strong>Pak Anies Baswedan</strong> yang sedianya hadir,{" "}
          <em>Alhamdulillah</em> mengirimkan video ucapan selamat atas
          terselenggaranya acara ini.
        </p>
      </div>
      <div className="mx-auto mt-8 w-full max-w-7xl columns-2 gap-1 px-4 md:columns-3 lg:columns-5 xl:px-0">
        {DATAS?.map((d) => (
          <ImagesModal title={d.title} folder="milad" key={d.title} />
        ))}
      </div>
    </article>
  )
}
