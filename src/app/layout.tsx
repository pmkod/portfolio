import "./globals.css";
import Footer from "@/components/partials/footer";
import Header from "@/components/partials/header";
import { Metadata } from "next";

import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Kodossou Kouassi",
    default: "Kodossou Kouassi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
