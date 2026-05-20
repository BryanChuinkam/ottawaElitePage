import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, CONTACT_ADDRESS, CONTACT_EMAIL, SOCIAL, REGISTRATION_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-jet-100 border-t border-jet-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="Ottawa Elite" width={40} height={40} className="object-contain" />
              <span className="font-display text-xl text-white tracking-wider">OTTAWA ELITE</span>
            </Link>
            <p className="text-white/50 text-sm font-body leading-relaxed">
              Identifying and developing the top basketball talent in Eastern Ontario and the Outaouais Region.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 pt-2">
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors" aria-label="Twitter/X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg uppercase tracking-wider text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-gold text-sm font-body transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display text-lg uppercase tracking-wider text-white mb-4">Programs</h3>
            <ul className="space-y-2 text-sm font-body text-white/50">
              {['U13 / Grade 7', 'U14 / Grade 8', 'U15 / Grade 9', 'U16 / Grade 10', 'Elite Prep U17', 'Elite Prep U19', 'EVO Boys AAU', 'EVO Girls AAU'].map((p) => (
                <li key={p}>
                  <Link href="/teams" className="hover:text-gold transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg uppercase tracking-wider text-white mb-4">Contact</h3>
            <address className="not-italic space-y-3 text-sm font-body text-white/50">
              <p className="leading-relaxed">{CONTACT_ADDRESS}</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="block hover:text-gold transition-colors">
                {CONTACT_EMAIL}
              </a>
            </address>
            <Link
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-gold text-jet text-sm font-body font-bold px-5 py-2.5 rounded-card hover:bg-gold-light transition-all"
            >
              Register for Tryouts
            </Link>
          </div>
        </div>

        <div className="border-t border-jet-300 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body">
            &copy; {new Date().getFullYear()} Ottawa Elite Basketball. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-body">
            Elite Talent. Elite Training. Elite Results.
          </p>
        </div>
      </div>
    </footer>
  )
}
