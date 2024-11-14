import type { Metadata } from "next";
import "./globals.scss";
import { Open_Sans } from "next/font/google";
import { AuthProvider } from "./auth-provider";


const opensans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "700","800"], });

export const metadata: Metadata = {
  title: "Community Volunteering",
  description: "Application Community Volunteering in riwi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={opensans.className}
      >
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
