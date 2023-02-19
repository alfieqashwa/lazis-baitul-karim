import Document, { Head, Html, Main, NextScript } from "next/document"
import { createGetInitialProps } from "@mantine/next"

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
