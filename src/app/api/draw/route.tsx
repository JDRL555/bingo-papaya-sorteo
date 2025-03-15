import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  const month = new Date().getMonth() + 1
  const currenDate = `${new Date().getFullYear()}-${month <= 10 ? "0" + month : month}-${new Date().getDate()}`

  console.log(currenDate);
  
  try {
    const draws = await prisma.sorteo.findMany({
      where: {
        fecha: currenDate,
        gano: false
      }
    })

  console.log(draws);

    return NextResponse.json({ 
      error: draws.length === 0 ? "No se encontró ningún sorteo el día de hoy" : "",
      draws
    }, { 
      status: draws.length !== 0 ? 200 : 404 
    })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message, draw: {} }, { status: 500 })
  }
}
export const dynamic = 'force-dynamic';
export const revalidate = 0;