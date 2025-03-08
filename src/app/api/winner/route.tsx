import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { FigureName } from '@/types/BingoFigure.types'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const {
    idcarton,
    figura,
    premio
  } = await req.json()

  try {
    const saved = await saveWinner(idcarton, figura, premio)

    return NextResponse.json({ 
      response: saved ? "Saved!" : "Not saved, winner already exists" 
    }, { 
      status: saved ? 201 : 200 
    })
  } catch (error) {
    return NextResponse.json({ 
      error: (error as Error).message 
    }, { 
      status: 500 
    })
  }
}

async function saveWinner(
  idcarton: number,
  figura: FigureName,
  premio: number
) {
  const winner = await prisma.ganadores.findFirst({
    where: {
      idcarton,
      figura
    }
  })
  if(!winner) {
    await prisma.ganadores.create({
      data: {
        idcarton,
        figura,
        premio
      }
    })
    return true
  }
  return false
}