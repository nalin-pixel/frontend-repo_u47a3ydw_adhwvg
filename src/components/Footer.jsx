import React from 'react'

export default function Footer({ logoUrl }) {
  return (
    <footer className="bg-blue-50 border-t border-blue-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          {logoUrl && (
            <img src={logoUrl} alt="Techbitrage" className="h-10 w-10 rounded-md object-contain bg-white ring-1 ring-blue-200 p-1" />
          )}
          <div>
            <div className="font-semibold text-slate-900">Techbitrage</div>
            <div className="text-xs uppercase tracking-widest text-blue-700">Where AI meets Tech</div>
          </div>
        </div>
        <div className="text-right text-sm text-slate-700">
          <div>CEO, Founder: Mehul K Purohit</div>
          <div>Contact: <a href="mailto:contact@techbitrage.com" className="text-blue-700 hover:underline">contact@techbitrage.com</a></div>
          <div>Location: Mumbai, Maharashtra, India</div>
        </div>
      </div>
    </footer>
  )
}
