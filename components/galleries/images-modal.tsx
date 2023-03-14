import Image from "next/image"
import { DialogClose } from "@radix-ui/react-dialog"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

type Props = {
  title: string
  folder: string
}

export const ImagesModal = (props: Props) => {
  const src = `/img/${props.folder}/${props.title}.jpg`

  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <Image
          className="aspect-auto w-full ring-2 ring-slate-100 dark:ring-slate-100 lg:ring-4"
          src={src}
          alt={props.title}
          width="200"
          height="100"
          priority
        />
      </DialogTrigger>
      <DialogContent className="grid min-h-screen min-w-full place-items-center">
        <DialogClose>
          <Image
            className="-mx-6 max-w-sm object-cover sm:max-w-md lg:max-w-xl xl:max-w-2xl"
            src={src}
            alt={props.title}
            width="800"
            height="800"
            priority
          />
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
