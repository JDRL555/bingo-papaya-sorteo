import { NextRequest, NextResponse } from 'next/server'
import { Carton, PrismaClient } from '@prisma/client'
import { FigurePattern } from '@/types/BingoFigure.types'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const { selectedNumbers, figure } = await req.json()

  try {
    const winners = await searchWinners(selectedNumbers, figure)
    return NextResponse.json({ winners }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

const searchWinners = async (selectedNumbers: number[], figure: FigurePattern) => {
  const cartones = await prisma.carton.findMany({
    where: {
      verificado: {
        not: 0
      }
    },
  })

  const figuraPosiciones = generateFigurePositions(figure)

  const ganadores = cartones.filter((carton) => {
    const cartonNumbers = getCartonNumbers(carton)
    const matchingNumbers = figuraPosiciones.map((pos) => cartonNumbers[pos])

    const interseccion = matchingNumbers.filter((num) => selectedNumbers.includes(num))
    return interseccion.length >= figuraPosiciones.length
  })

  return ganadores.map((g) => g.nombre)
}

const generateFigurePositions = (figure: FigurePattern): number[] => {
  const positions: number[] = []
  Object.keys(figure).forEach((key, index) => {
    if (figure[key as keyof FigurePattern] && key !== 'n3') {
      positions.push(index)
    }
  })
  
  return positions
}

const getCartonNumbers = (carton: Carton): number[] => {
  const numbers = [
    carton.b1 || 0, carton.i1 || 0, carton.n1 || 0, carton.g1 || 0, carton.o1 || 0,
    carton.b2 || 0, carton.i2 || 0, carton.n2 || 0, carton.g2 || 0, carton.o2 || 0,
    carton.b3 || 0, carton.i3 || 0, carton.n3 || 0, carton.g3 || 0, carton.o3 || 0,
    carton.b4 || 0, carton.i4 || 0, carton.n4 || 0, carton.g4 || 0, carton.o4 || 0,
    carton.b5 || 0, carton.i5 || 0, carton.n5 || 0, carton.g5 || 0, carton.o5 || 0,
  ]

  return numbers
}
