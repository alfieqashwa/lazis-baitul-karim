import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const PROGRAMS = [
  {
    title: "jangka pendek",
    descriptions: [
      { id: 1, description: "Belanja Sandang Bayar dengan Doa." },
      { id: 2, description: "Raihlah Yatim Dhu'afa." },
      { id: 3, description: "Sunatan Massal." },
    ],
  },
  {
    title: "jangka panjang",
    descriptions: [
      { id: 1, description: "Jum'at Berkah." },
      { id: 2, description: "Beasiswa Pendidikan Yatim dan Dhu'afa." },
      { id: 3, description: "Sembako untuk keluarga Yatim dan Dhu'afa." },
      {
        id: 4,
        description: "Pembiayaan UMKM untuk memandirikan Yatim Dan Dhu'afa.",
      },
      {
        id: 5,
        description:
          "Bantuan untuk kaum muslimin yg terkena penyakit berat tapi tdk mampu berobat.",
      },
      { id: 6, description: "Rumah Tahfidz untuk Yatim & Dhu'afa." },
    ],
  },
]

export function ProgramListAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full px-4">
      {PROGRAMS?.map((p, i) => (
        <AccordionItem value={p.title} key={i}>
          <AccordionTrigger className="space-y-2 text-xl font-bold tracking-wide">
            <h3 className="capitalize">{p.title}</h3>
          </AccordionTrigger>
          {p.descriptions.map((d) => (
            <AccordionContent key={d.id} className="pl-2 text-lg">
              <article className="flex space-x-2">
                <h4>{d.id}.</h4>
                <p>{d.description}</p>
              </article>
            </AccordionContent>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  )
}
