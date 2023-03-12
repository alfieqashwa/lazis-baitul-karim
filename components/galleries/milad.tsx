import { useState } from "react"
import Image from "next/image"

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
    <>
      {milad?.map((m) => (
        <Image
          className="w-full object-cover ring-4 ring-fuchsia-100"
          src={`/img/milad/${m.title}.jpg`}
          alt={m.title}
          width="200"
          height="100"
          priority
        />
      ))}
    </>
  )
}
