import Image from "next/image"

type TLazisLogo = {
  className?: string
}

export const LazisLogo = ({ className }: TLazisLogo) => (
  <div className={className}>
    <Image
      src="/favicon.ico"
      alt="Lazis Baitul Karim"
      width={40}
      height={40}
      className="rounded-full shadow"
    />
  </div>
)
