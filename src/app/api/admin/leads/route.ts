import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db('uxrescue')
    
    const leads = await db.collection('leads')
      .find({})
      .sort({ createdAt: -1 }) // Más recientes primero
      .toArray()

    // Convertir _id de ObjectId a string para JSON
    const serializedLeads = leads.map(lead => ({
      ...lead,
      _id: lead._id.toString(),
      createdAt: lead.createdAt.toISOString()
    }))

    return NextResponse.json({
      success: true,
      leads: serializedLeads
    })

  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}