import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html >
  );
}
