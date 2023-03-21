import Image from "next/image"

type TLazisLogo = {
  className?: string
}

export const YatimMandiriLogo = ({ className }: TLazisLogo) => (
  <div className={className}>
    <Image
      src="/img/logo/yatim-mandiri-logo.jpg"
      alt="Lazis Baitul Karim"
      width={50}
      height={50}
      className="rounded-sm shadow"
    />
  </div>
)
