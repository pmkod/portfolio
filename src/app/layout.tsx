import "./globals.css";
import Footer from "@/components/partials/footer";
import Header from "@/components/partials/header";

import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </head>
      <body className={robotoSlab.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
