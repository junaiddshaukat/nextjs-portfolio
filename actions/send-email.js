'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData) {
  try {
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
    to: 'junaidshaukat546@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
    
        Message: ${message}
      `,
    })

    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to send email' }
  }
}
