import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export const CreativeDigital = () => {
  const [data] = useState([
    { id: 1, name: "Ariandi Setiawan, S.Kom", nickname: "ari" },
  ])
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col items-center justify-start p-2"
    >
      <CollapsibleTrigger asChild>
        <Button variant="custom" size="sm">
          <Avatar className="z-10 size-16 shrink-0 rounded-full shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20">
            <AvatarImage src="/img/leader/andri.jpg" className="object-cover" />
            <AvatarFallback>Andri</AvatarFallback>
          </Avatar>
          <div className="-ml-3 h-16 w-60 rounded-r-full bg-slate-50 shadow md:w-64">
            <div className="flex flex-col items-center justify-between pt-2">
              <h3 className="text-md font-semibold text-slate-900">
                Andriansyah
              </h3>
              <h4 className="md:text-md text-sm font-bold uppercase text-sky-700">
                it & creative digital
              </h4>
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-9 flex flex-col space-y-5 px-4 lg:mt-12">
        {data.map((d) => (
          <section className="flex items-center" key={d.id}>
            <Avatar className="z-10 h-12 w-12 shrink-0 rounded-full shadow ring-2 ring-teal-600 ring-offset-4 md:h-16 md:w-16">
              <AvatarImage
                src={`/img/leader/${d.nickname}.jpg`}
                className="object-cover"
              />
              <AvatarFallback>{d.nickname}</AvatarFallback>
            </Avatar>
            <div className="-ml-2 h-12 w-56 rounded-r-full bg-slate-50 shadow md:h-14">
              <div className="flex flex-col items-center justify-between pt-2">
                <h3 className="text-sm font-semibold text-slate-900 md:text-base">
                  {d.name}
                </h3>
                <h4 className="text-xs font-bold uppercase text-sky-700">
                  staff program
                </h4>
              </div>
            </div>
          </section>
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
