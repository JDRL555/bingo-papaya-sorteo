import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  const {
    idcarton,
    idsorteo,
    premio
  } = await req.json()

  try {
    const saved = await saveWinner(idcarton, idsorteo, premio)

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
  idsorteo: number,
  premio: number
) {
  const winner = await prisma.ganadores.findFirst({
    where: {
      idcarton,
      idsorteo
    }
  })
  if(!winner) {
    await prisma.ganadores.create({
      data: {
        idcarton,
        idsorteo,
        premioreferencia: premio
      }
    })

    await prisma.sorteo.update({
      data: {
        gano: true
      },
      where: {
        idsorteo
      }
    })
    return true
  }
  return false
}