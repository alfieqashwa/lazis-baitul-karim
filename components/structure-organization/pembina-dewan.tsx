import { useState } from "react"

export const PembinaDanDewan = () => {
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
