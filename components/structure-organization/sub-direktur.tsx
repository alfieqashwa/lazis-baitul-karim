import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const SubDirektur = () => (
  <article className="-mx-4 flex flex-col items-center justify-start py-4 sm:-mx-0 sm:flex-row sm:justify-between sm:px-4 md:px-12">
    <section className="flex items-center justify-start p-2">
      <Avatar className="z-10 h-16 w-16 shrink-0 rounded-full shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20">
        <AvatarImage src="/img/leader/nandi.jpg" className="object-cover" />
        <AvatarFallback>Sunardi Sofjan</AvatarFallback>
      </Avatar>
      <div className="-ml-3 h-16 w-60 rounded-r-full bg-slate-50 shadow md:w-64">
        <div className="flex flex-col items-center justify-between pt-2">
          <h3 className="text-md font-semibold text-slate-900">
            Sunardi Sofjan, SE
          </h3>
          <h4 className="md:text-md text-sm font-bold uppercase text-sky-700">
            wakil direktur
          </h4>
        </div>
      </div>
    </section>
    <section className="flex items-center justify-start p-2">
      <Avatar className="z-10 h-16 w-16 shrink-0 rounded-full shadow ring-2 ring-teal-600 ring-offset-4 md:h-20 md:w-20">
        <AvatarImage src="/img/leader/juita.jpg" className="object-cover" />
        <AvatarFallback>Juita Suar</AvatarFallback>
      </Avatar>
      <div className="-ml-3 h-16 w-60 rounded-r-full bg-slate-50 shadow md:w-64">
        <div className="flex flex-col items-center justify-between pt-2">
          <h3 className="text-md font-semibold text-slate-900">
            Juita Suar, S.Pd
          </h3>
          <h4 className="md:text-md text-sm font-bold uppercase text-sky-700">
            sekretaris
          </h4>
        </div>
      </div>
    </section>
  </article>
)
