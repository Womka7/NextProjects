import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";


export const metadata: Metadata = {
  title: "Jobs Portal Riwi",
  description: "Una page de vacantes y compañias riwi",
};
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700","900"], })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
