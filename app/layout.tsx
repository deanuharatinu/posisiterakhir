import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./ui/fonts";
import Header from "./ui/header";
import Footer from "./ui/footer";
import { InnerContainer, OuterContainer } from "./ui/container";

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
      <body className={`${roboto.className} antialiased relative flex flex-col min-h-screen`}>
        <main>
          <OuterContainer className="fixed inset-0 -z-10">
            <div className="border-l-1 border-r-1 border-zinc-700 w-full bg-zinc-900 " />
          </OuterContainer>
          <Header className="pt-6" />
          <Content>
            {children}
          </Content>
          <Footer />
        </main>
      </body>
    </html >
  );
}

function Content({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex-1 pt-32">
      <InnerContainer >
        {children}
      </InnerContainer>
    </div>
  )
}
