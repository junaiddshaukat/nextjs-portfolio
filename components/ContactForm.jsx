'use client'

import { useState } from 'react'
import { sendEmail } from '../actions/send-email'
import toast, { Toaster } from 'react-hot-toast'

export default function ContactForm() {
  const [pending, setPending] = useState(false)

  async function handleSubmit(formData) {
    setPending(true)

    const result = await sendEmail(formData)

    setPending(false)
    if (result.success) {
      toast.success('Message sent successfully! We\'ll get back to you soon.', {
        duration: 5000,
        position: 'bottom-center',
      })
      document.getElementById('contact-form').reset()
    } else {
      toast.error('Failed to send message. Please try again.', {
        duration: 5000,
        position: 'bottom-center',
      })
    }
  }

  return (
    <div className="min-h-screen text-white p-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-[50rem] space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl sm:text-6xl lg:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-white to-zinc-600 text-transparent bg-clip-text">
            Let&apos;s Work Together
          </h2>
        </div>

        <form id="contact-form" action={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm text-neutral-400">
              Name
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-neutral-600 placeholder-neutral-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-sm text-neutral-400">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-neutral-600 placeholder-neutral-500"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-sm text-neutral-400">
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows={4}
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-neutral-600 placeholder-neutral-500"
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full py-3 px-4 bg-white hover:bg-white/90 text-black disabled:opacity-50 disabled:hover:bg-white rounded-lg transition-colors"
          >
            {pending ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  )
}

