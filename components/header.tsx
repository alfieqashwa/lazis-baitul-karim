import Head from "next/head"

type HeaderProps = { title?: string }

export const Header = ({ title }: HeaderProps) => {
  const headTitle = `${title} | LAZIS Baitul Karim`
  return (
    <Head>
      <title>{headTitle}</title>
      <meta
        name="description"
        content="Lembaga Amil Zakat Infaq dan Shodaqoh"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
