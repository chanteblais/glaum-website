import Link from 'next/link'
import { Mail, Heart } from 'lucide-react'
import { BadgeButton } from './BadgeButton'

export function Footer() {
  return (
    <footer className="bg-glaum-ink text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-glaum-pink to-glaum-lavender rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="text-xl font-bold">Glåüm</span>
            </div>
            <p className="text-glaum-cream/80 text-sm max-w-xs">
              {/* TODO: Replace with Glåüm mission statement */}
              Building community through shared values and collective action.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-glaum-cream">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-glaum-cream/80 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/tenets" className="text-glaum-cream/80 hover:text-white transition-colors text-sm">
                Tenets
              </Link>
              <Link href="/policies" className="text-glaum-cream/80 hover:text-white transition-colors text-sm">
                Policies
              </Link>
              <Link href="#contact" className="text-glaum-cream/80 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-glaum-cream">Stay Connected</h3>
            <p className="text-glaum-cream/80 text-sm">
              {/* TODO: Replace with newsletter description */}
              Get updates on events and community initiatives.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-2xl bg-glaum-cream/10 border border-glaum-cream/20 text-white placeholder-glaum-cream/60 focus:outline-none focus:ring-2 focus:ring-glaum-pink text-sm"
              />
              <BadgeButton variant="primary" size="sm">
                <Mail className="h-4 w-4" />
              </BadgeButton>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glaum-cream/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-glaum-cream/60 text-sm">
            © 2024 Glåüm. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-glaum-cream/60 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-glaum-pink" />
            <span>for community</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
