"use client"

import { useEffect, useState, useContext } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { BingoContext, BingoContextProps } from "@/context/BingoContext"
import Main from "@/components/Main"
import bingoIcon from "../../public/bingo_icon-removebg.png"

import "./App.css"

export default function App() {
  const { 
    bingo, 
    setBingo,
    generateFigure 
  } = useContext(BingoContext) as BingoContextProps

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const searchParams = useSearchParams()
  const linkdirecto = searchParams.get("linkdirecto")

  useEffect(() => {
    async function loadDraw() {
      try {
        setLoading(true) 
        const response = await fetch(`/api/draw`)
        const data = await response.json()

        setBingo({
          ...bingo,
          draws: data.draws,
          selectedDraw: {
            ...data.draws[0],
            premio: data.draws[0].premio * 0.60
          },
        })
        setError(null) 
        // if (data.draws?.length > 0) {
        // } else {
        //   setError("No se encontró ningún sorteo para hoy.")
        //   setBingo({
        //     ...bingo,
        //     draws: [],
        //     selectedDraw: {
        //       idsorteo: 0,
        //       fecha: "",
        //       figura: "carton_lleno",
        //       gano: false,
        //       premio: 0
        //     }, 
        //   })
        // }
      } catch (err) {
        console.error("Error al cargar los sorteos:", err)
        setError("Ocurrió un error al cargar los sorteos.")
      } finally {
        setLoading(false) 
      }
    }

    loadDraw()
  }, [])

  useEffect(() => {
    console.log("Fuera");
    if (bingo.selectedDraw?.figura) {
      console.log("Dentro");
      generateFigure(bingo.selectedDraw.figura)
      console.log(bingo.selectedDraw.figura);
    }
  }, [bingo.selectedDraw])

  if (!linkdirecto) {
    return (
      <div className="loading-cointainer">
        <Image src={bingoIcon} alt="bingo icono" />
        <h1>¡Parece que hubo un problema!</h1>
        <h2>El enlace es incorrecto. Solicítalo nuevamente.</h2>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="loading-cointainer">
        <Image src={bingoIcon} alt="bingo icono" />
        <h1>¡Bienvenido a BingoPapaya!</h1>
        <h2>El juego está cargando, sé paciente...</h2>
      </div>
    )
  }

  if (error) {
    return (
      <div className="loading-cointainer">
        <Image src={bingoIcon} alt="bingo icono" />
        <h1>¡Parece que hubo un problema!</h1>
        <h2>{error}</h2>
      </div>
    )
  }

  return (
    <>
      <h1>Sorteo número: {bingo.selectedDraw?.idsorteo}</h1>
      <Main />
    </>
  )
}
