import BingoContextProvider from "@/context/BingoContext";
import Image from "next/image";
import { Suspense } from 'react'
import bingoIcon from '../assets/bingo_icon.jpg'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Suspense fallback={
          <div className="loading-cointainer">
            <Image src={bingoIcon} alt="bingo icono" />
            <h1>¡Bienvenido a BingoPapaya!</h1>
            <h2>El juego está cargando, sé paciente...</h2>
          </div>
        }>
          <BingoContextProvider>
            {children}
          </BingoContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
