import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message, company, website } = await request.json()
    
    const accountSid = process.env.TWILIO_ACCOUNT_SID!
    const authToken = process.env.TWILIO_AUTH_TOKEN!
    
    const whatsappMessage = `
🚨 *NUEVO LEAD - UXRescue*

👤 *Nombre:* ${name}
📧 *Email:* ${email}
🏢 *Empresa:* ${company || 'No especificada'}
🌐 *Web:* ${website || 'No especificada'}

💬 *Mensaje:*
${message}

⏰ *Hora:* ${new Date().toLocaleString('es-ES')}
──────────────
*¡Contacta dentro de 24h!*
    `.trim()

    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
      {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          From: 'whatsapp:+14155238886',
          To: 'whatsapp:+34659680602', // REEMPLAZA CON TU NÚMERO
          Body: whatsappMessage
        })
      }
    )

    const result = await response.json()
    
    if (response.ok) {
      console.log('✅ WhatsApp enviado:', result.sid)
      return NextResponse.json({ success: true })
    } else {
      console.error('❌ Error Twilio:', result)
      return NextResponse.json({ success: false, error: result.message }, { status: 500 })
    }

  } catch (error) {
    console.error('❌ Error WhatsApp:', error)
    return NextResponse.json({ success: false, error: 'Error interno' }, { status: 500 })
  }
}