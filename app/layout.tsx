import type { Metadata } from "next";
import "./globals.css";
import ModalProvider from "./utils/providers";

export const metadata: Metadata = {
  title: "Posisi Terakhir - Deanu Haratinu's Personal Website",
  description: "Personal insights, curiosity-driven writing, and creative explorations from Deanu Haratinu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html >
  );
}
