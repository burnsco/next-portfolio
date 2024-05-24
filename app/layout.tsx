"use client"

import { lato, raleway } from "fonts"
import Provider from "./provider"

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <head />
      <body className={`${raleway} ${lato} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
