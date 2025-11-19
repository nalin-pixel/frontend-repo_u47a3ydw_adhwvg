import React, { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Freelance', href: '/freelance' },
  { name: 'Socials', href: '/socials' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'bg-blue-50/70 backdrop-blur border-b border-blue-200/50 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Techbitrage logo"
              className="h-10 w-10 rounded-md object-contain bg-white/70 ring-1 ring-blue-200/60 p-1 shadow-sm"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <div>
              <div className="text-lg font-semibold tracking-tight text-slate-900">Techbitrage</div>
              <div className="text-[10px] uppercase tracking-widest text-blue-600">Where AI meets Tech</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-sm text-slate-700 hover:text-blue-700 transition-colors"
              >
                {l.name}
              </a>
            ))}
          </div>

          {/* Mobile */}
          <button className="md:hidden p-2 rounded-md hover:bg-blue-100" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6 text-slate-800" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 grid grid-cols-2 gap-2">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="px-3 py-2 text-sm rounded-md bg-white/80 hover:bg-blue-50 text-slate-800 ring-1 ring-blue-100">
                {l.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
