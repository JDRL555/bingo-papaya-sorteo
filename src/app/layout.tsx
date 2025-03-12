import BingoContextProvider from "@/context/BingoContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bingo Papaya - Sorteo",
  description: "Sorteo del juego Bingo papaya",
  icons: {
    icon: "/bingo_icon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BingoContextProvider>
          {children}
        </BingoContextProvider>
      </body>
    </html>
  );
}
