import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  const month = new Date().getMonth() + 1
  const currenDate = `${new Date().getFullYear()}-${month <= 10 ? "0" + month : month}-${new Date().getDate()}`
  
  try {
    const draws = await prisma.sorteo.findMany({
      where: {
        fecha: currenDate,
        gano: false
      }
    })

    return NextResponse.json({ 
      error: draws.length === 0 ? "No se encontró ningún sorteo el día de hoy" : "",
      draws: draws.map(draw => { 
        return { 
          idsorteo: draw.idsorteo, 
          figura: draw.figura,
          premio: draw.premio,
        } 
      })
    }, { 
      status: draws.length !== 0 ? 200 : 404 
    })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message, draw: {} }, { status: 500 })
  }
}