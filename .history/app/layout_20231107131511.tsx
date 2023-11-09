"use client"

import { lato, raleway } from "fonts"
import Provider from "./provider"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light" className={`${raleway} ${lato}`}>
      <head />
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
