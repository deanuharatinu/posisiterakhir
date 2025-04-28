import React from "react";
import { roboto } from "../ui/fonts";

export default function AdminRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className={`${roboto.className} antialiased relative flex flex-col min-h-screen`}>
      {children}
    </main>
  )
}