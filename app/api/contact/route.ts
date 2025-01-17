import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, message } = body

  // Here you would typically send an email or save to a database
  // For this example, we'll just log the data
  console.log('Received message:', { name, email, message })

  // In a real application, you might use a service like SendGrid to send emails
  // const sgMail = require('@sendgrid/mail')
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  // const msg = {
  //   to: 'your-email@example.com',
  //   from: 'contact-form@yourwebsite.com',
  //   subject: 'New Contact Form Submission',
  //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  // }
  // await sgMail.send(msg)

  return NextResponse.json({ message: 'Message sent successfully!' })
}

