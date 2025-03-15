import BingoContextProvider from "@/context/BingoContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <BingoContextProvider>
          {children}
        </BingoContextProvider>
      </body>
    </html>
  );
}
