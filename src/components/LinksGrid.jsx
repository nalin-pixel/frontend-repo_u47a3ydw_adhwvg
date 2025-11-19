import React from 'react'

const items = [
  { title: 'Services', href: '/services', desc: 'Custom AI, cloud, and automation solutions' },
  { title: 'Products', href: '/products', desc: 'Tooling and SaaS built by Techbitrage' },
  { title: 'Freelance', href: '/freelance', desc: 'Hire elite engineers and designers on-demand' },
  { title: 'Socials', href: '/socials', desc: 'Follow our updates and community' },
  { title: 'Portfolio', href: '/portfolio', desc: 'See our recent work and case studies' },
  { title: 'About Us', href: '/about', desc: 'Our story, mission, and team' },
  { title: 'Contact Us', href: '/contact', desc: 'Get in touch for projects and support' },
]

export default function LinksGrid() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Explore</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <a
              key={it.title}
              href={it.href}
              className="group rounded-2xl ring-1 ring-blue-100 bg-white/80 backdrop-blur hover:bg-white transition-all p-5 shadow-sm hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
                <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
