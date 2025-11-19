import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ logoUrl }) {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-amber-50 via-white to-blue-50">
      {/* Background 3D scene */}
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/70 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              {logoUrl && (
                <motion.img
                  src={logoUrl}
                  alt="Techbitrage Logo"
                  className="h-20 w-20 rounded-xl object-contain ring-2 ring-amber-300/50 shadow-lg bg-white/80 p-2"
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 10 }}
                />
              )}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                  Techbitrage
                </h1>
                <p className="mt-2 text-lg sm:text-xl text-slate-700">
                  Where AI meets Tech
                </p>
              </div>
            </motion.div>

            {/* Tagline block with handshake + desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 bg-white/80 backdrop-blur rounded-2xl ring-1 ring-blue-100 p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">🤝</span>
                <span className="text-3xl">🤖</span>
                <span className="ml-auto text-3xl">🖥️</span>
              </div>
              <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-800 text-center">
                "Where AI meets Tech"
              </p>
            </motion.div>
          </div>

          {/* Empty right side keeps 3D visible */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative mt-10 flex justify-center">
        <div className="h-10 w-6 rounded-full border-2 border-blue-300 flex items-start justify-center p-1">
          <motion.div
            className="h-2 w-2 rounded-full bg-blue-400"
            animate={{ y: [0, 16, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  )
}
