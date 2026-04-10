import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Brands from './components/sections/Brands'
import Services from './components/sections/Services'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Testimonials from './components/sections/Testimonials'
import HowItWorks from './components/sections/HowItWorks'
import FAQ from './components/sections/FAQ'

import MobileStickyCTA from './components/sections/MobileStickyCTA'
import { company, navLinks } from './data/siteContent'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-slate-950">
      <Navbar navLinks={navLinks} phoneHref={company.phoneHref} />
      <main className="overflow-x-clip pb-24 md:pb-0">
        <Hero company={company} />
        <Brands />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <HowItWorks />
        <FAQ />

      </main>
      <Footer company={company} navLinks={navLinks} />
      <MobileStickyCTA phoneHref={company.phoneHref} />
    </div>
  )
}

export default App
