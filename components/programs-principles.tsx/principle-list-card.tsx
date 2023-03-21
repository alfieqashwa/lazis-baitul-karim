import Image from "next/image"

const PRINCIPLES = [
  {
    title: "profesional",
    icon: "shield",
    description:
      "Karakter seseorang dalam bekerja dengan kemampuan yang tinggi sesuai bidang keahliannya dan berpegang kepada moral yang baik.",
  },
  {
    title: "religius",
    icon: "praying",
    description:
      "Karakter seseorang yang fikiran, hati dan akhlaknya didasari dengan syariat islam dan merealisasikannya atas dasar iman yang tinggi.",
  },
  {
    title: "integritas",
    icon: "badge",
    description:
      "Karakter seseorang yang menunjukkan kecerdasan tidak saja intelektual, tapi juga kecerdasan emosional dan spiritual dengan melahirkan pribadi yang berakhlak.",
  },
  {
    title: "melayani",
    icon: "giving",
    description:
      "Karakter seseorang yang berjuang dan berkorban untuk kemaslahatan orang lain dan melayani dengan hati.",
  },
  {
    title: "amanah",
    icon: "handshake",
    description:
      "Karakter seseorang yang benar-benar bisa dipercaya, bertanggung jawab dan melakukan pekerjaannya atas dasar iman, islam dan ihsan.",
  },
]

export const PrincipleListCard = () => (
  <div className="mx-2 mt-4 flex flex-col space-y-8">
    {PRINCIPLES?.map((d) => (
      <div
        className="flex flex-col items-center space-y-4 rounded-lg border-4 border-amber-500 p-6 shadow-lg dark:border-amber-100 md:flex-row md:space-y-0 md:space-x-8"
        key={d.icon}
      >
        <Image
          className="h-32 w-32 rounded-lg bg-gradient-to-bl from-amber-100 via-amber-300 to-amber-500 p-3 shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
          src={`/img/principle/${d.icon}.png`}
          alt={d.icon}
          width={100}
          height={100}
          priority
        />
        <article className="flex w-full flex-col space-y-4 text-center">
          <h3 className="gradient-title text-2xl font-bold uppercase">
            {d.title}
          </h3>
          <p className="text-center text-sm md:text-left md:text-lg">
            {d.description}
          </p>
        </article>
      </div>
    ))}
  </div>
)
