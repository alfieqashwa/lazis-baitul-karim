import Image from "next/image"
import { motion } from "framer-motion"

const PHONE = "6282211275656"
const SPACE = "%20"
const CONTACT = `https://wa.me/${PHONE}?text=Assalaamu${SPACE}'alaikum.${SPACE}Saya${SPACE}hendak${SPACE}berzakat${SPACE}atau${SPACE}berinfaq${SPACE}dan${SPACE}bershodaqoh${SPACE}di${SPACE}LAZIS${SPACE}Baitul${SPACE}Karim.${SPACE}Bagaimana${SPACE}prosesnya?${SPACE}Terima${SPACE}Kasih.`

export const Whatsapp = (): JSX.Element => (
  <motion.div
    className="fixed bottom-6 right-0.5 z-50"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.3 }}
  >
    <div className="animate-pulse">
      <a href={CONTACT} target="_blank" rel="noopener noreferrer">
        <Image
          src="/img/icon-whatsapp.svg"
          alt="whatsapp-logo"
          width={50}
          height={50}
        />
      </a>
    </div>
  </motion.div>
)
