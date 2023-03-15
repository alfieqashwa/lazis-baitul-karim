import Head from "next/head"

export const Header = ({ title }: { title: string }) => (
  <Head>
    <title>{title} | LAZIS Baitul Karim</title>
    <meta name="description" content="Lembaga Amil Zakat Infaq dan Shodaqoh" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
)
