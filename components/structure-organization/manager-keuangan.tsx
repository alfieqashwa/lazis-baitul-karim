import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible"

export const ManagerKeuangan = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col items-center justify-start p-2"
    >
      <CollapsibleTrigger asChild>
        <Button variant="custom" size="sm">
          <Avatar className="z-10 h-16 w-16 shrink-0 rounded-full shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20">
            <AvatarImage src="/img/leader/nina.jpg" className="object-cover" />
            <AvatarFallback>Alpha</AvatarFallback>
          </Avatar>
          <div className="-ml-3 h-16 w-60 rounded-r-full bg-slate-50 shadow md:w-64">
            <div className="flex flex-col items-center justify-between pt-2">
              <h3 className="text-md font-semibold text-slate-900 md:text-base">
                Alpha G.K. S.Kom, S.Pd
              </h3>
              <h4 className="md:text-md text-sm font-bold uppercase text-sky-700">
                manajer keuangan
              </h4>
            </div>
          </div>
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  )
}
