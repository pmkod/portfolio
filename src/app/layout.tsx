import "./globals.css";
import Footer from "@/components/partials/footer";
import Header from "@/components/partials/header";
import { Metadata } from "next";

import { Roboto_Slab } from "next/font/google";
import Script from "next/script";

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
        <Script
					async
          src="https://analytics.4ml3f81l4vtbdgwuldhdcqwbq7reg4oiffr3xdbi.kodossou.com/script.js" data-website-id="15f04d96-53eb-47ff-aef5-33fa93bc5b42"
          />
      </body>
    </html>
  );
}
