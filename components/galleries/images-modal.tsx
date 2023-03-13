import Image from "next/image"
import { DialogClose } from "@radix-ui/react-dialog"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

type Props = {
  title: string
  folder: string
}

export const ImagesModal = (props: Props) => (
  <Dialog>
    <DialogTrigger asChild className="cursor-pointer">
      <Image
        className="w-full object-cover ring-4 ring-slate-100 dark:ring-fuchsia-100"
        src={`/img/${props.folder}/${props.title}.jpg`}
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
          src={`/img/${props.folder}/${props.title}.jpg`}
          alt={props.title}
          width="800"
          height="800"
          priority
        />
      </DialogClose>
    </DialogContent>
  </Dialog>
)
