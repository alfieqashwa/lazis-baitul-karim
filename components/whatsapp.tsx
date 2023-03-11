import Image from "next/image"
import { motion } from "framer-motion"

const PHONE = "6282211275656"
const SPACE = "%20"
const CONTACT = `https://wa.me/${PHONE}?text=Assalaamu${SPACE}'alaikum!${SPACE}Saya${SPACE}hendak${SPACE}berinfaq${SPACE}melalui${SPACE}LAZIS${SPACE}Baitul${SPACE}Karim.${SPACE}Bagaimana${SPACE}prosesnya${SPACE}?${SPACE}Syukran!`

export const Whatsapp = (): JSX.Element => (
  <motion.div
    className="fixed right-3.5 bottom-4 z-50 md:right-4"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.3 }}
  >
    <div className="animate-pulse">
      <a href={CONTACT} target="_blank" rel="noopener noreferrer">
        <Image
          src="/img/icon-whatsapp.svg"
          alt="whatsapp-logo"
          width={55}
          height={55}
        />
      </a>
    </div>
  </motion.div>
)
