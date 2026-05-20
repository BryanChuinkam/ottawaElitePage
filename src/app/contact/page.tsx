import type { Metadata } from 'next'
import ContactContent from '@/components/contact/ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Ottawa Elite Basketball — tryout info, sponsorship, and general inquiries.',
}

export default function ContactPage() {
  return <ContactContent />
}
