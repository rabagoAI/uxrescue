import { NextResponse } from 'next/server'
import { ObjectId } from 'mongodb'
import clientPromise from '@/lib/mongodb'

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    console.log('🔄 Actualizando lead:', id)
    
    const body = await request.json()
    const { status } = body

    if (!status || !['new', 'contacted', 'closed'].includes(status)) {
      return NextResponse.json(
        { error: 'Estado inválido' },
        { status: 400 }
      )
    }

    // Validar que el ID es un ObjectId válido
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'ID de lead inválido' },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db('uxrescue')
    
    const result = await db.collection('leads').updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: { 
          status,
          updatedAt: new Date()
        } 
      }
    )

    console.log('📊 Resultado de actualización:', result)

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Lead no encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Estado actualizado correctamente'
    })

  } catch (error) {
    console.error('❌ Error updating lead:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor: ' + (error as Error).message },
      { status: 500 }
    )
  }
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    console.log('📥 Obteniendo lead:', id)

    // Validar que el ID es un ObjectId válido
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'ID de lead inválido' },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db('uxrescue')
    
    const lead = await db.collection('leads').findOne({
      _id: new ObjectId(id)
    })

    if (!lead) {
      return NextResponse.json(
        { error: 'Lead no encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      lead: {
        ...lead,
        _id: lead._id.toString(),
        createdAt: lead.createdAt.toISOString()
      }
    })

  } catch (error) {
    console.error('❌ Error fetching lead:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor: ' + (error as Error).message },
      { status: 500 }
    )
  }
}