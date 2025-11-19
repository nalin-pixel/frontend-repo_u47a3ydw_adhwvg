import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LinksGrid from './components/LinksGrid'
import Footer from './components/Footer'

function App() {
  // If user provides a logo file in public/logo.png it will show up automatically.
  const logoUrl = '/logo.png'

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero logoUrl={logoUrl} />
        <LinksGrid />
      </main>
      <Footer logoUrl={logoUrl} />
    </div>
  )
}

export default App
