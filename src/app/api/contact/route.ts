import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  console.log('🔍 API contact called')
  
  try {
    const body = await request.json()
    console.log('📨 Datos recibidos:', body)
    
    // Extraer variables del body
    const { name, email, company, website, message } = body

    // Validaciones
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 }
      )
    }

    console.log('🔌 Conectando a MongoDB...')
    const client = await clientPromise
    console.log('✅ MongoDB conectado')
    
    const db = client.db('uxrescue')
    console.log('📊 Usando base de datos: uxrescue')
    
    const result = await db.collection('leads').insertOne({
      name,
      email,
      company: company || '',
      website: website || '',
      message,
      status: 'new',
      source: 'website',
      createdAt: new Date(),
    })

    console.log('✅ Lead guardado en MongoDB. ID:', result.insertedId)

    return NextResponse.json({ 
      success: true, 
      message: 'Solicitud recibida correctamente',
      id: result.insertedId 
    })

  } catch (error: unknown) {
    console.error('❌ Error MongoDB:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: 'Error interno del servidor: ' + errorMessage },
      { status: 500 }
    )
  }
}