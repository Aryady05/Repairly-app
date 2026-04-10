import { useState, useRef, useEffect } from 'react'
import ButtonLink from '../ui/ButtonLink'
import BookingModal from '../ui/BookingModal'
import { company as siteCompany } from '../../data/siteContent'

function Navbar({ navLinks, phoneHref }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close contact dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setContactOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Filter out 'Contact' from nav links — we replace it with the dropdown
  const filteredLinks = navLinks.filter((l) => l.label !== 'Contact')

  const openBooking = () => {
    setContactOpen(false)
    setMobileOpen(false)
    setBookingOpen(true)
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/60 bg-[rgba(247,247,242,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a className="flex items-center" href="#top" onClick={() => setMobileOpen(false)}>
            <p className="font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Repairly
            </p>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {filteredLinks.map((link) => (
              <a
                key={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
                href={link.href}
              >
                {link.label}
              </a>
            ))}

            {/* Contact dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                id="contact-menu-btn"
                aria-expanded={contactOpen}
                aria-haspopup="true"
                onClick={() => setContactOpen((v) => !v)}
                className="flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-slate-950"
              >
                Contact
                <svg
                  viewBox="0 0 16 16"
                  className="h-3.5 w-3.5 fill-current transition-transform duration-200"
                  style={{ transform: contactOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  aria-hidden
                >
                  <path d="M8 10.5L2.5 5h11L8 10.5z" />
                </svg>
              </button>

              {contactOpen && (
                <div
                  role="menu"
                  aria-labelledby="contact-menu-btn"
                  className="absolute right-0 top-full mt-3 w-64 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.22)] backdrop-blur-xl"
                  style={{ animation: 'dropIn 0.15s ease both' }}
                >
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Call</p>
                      <a
                        href={phoneHref}
                        className="mt-1 block font-semibold text-slate-900 hover:text-sky-600 transition-colors"
                        role="menuitem"
                      >
                        {siteCompany.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Email</p>
                      <a
                        href={`mailto:${siteCompany.email}`}
                        className="mt-1 block font-semibold text-slate-900 hover:text-sky-600 transition-colors"
                        role="menuitem"
                      >
                        {siteCompany.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Hours</p>
                      {siteCompany.workingHours.map((h) => (
                        <p key={h} className="mt-1 text-slate-600">{h}</p>
                      ))}
                    </div>

                    <hr className="border-slate-100" />

                    <button
                      role="menuitem"
                      onClick={openBooking}
                      className="button-shine w-full rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
                    >
                      Book a Repair →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <ButtonLink href={phoneHref} variant="accent">
              Call Now
            </ButtonLink>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-950 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            type="button"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-slate-950" />
              <span className="block h-0.5 w-5 rounded-full bg-slate-950" />
              <span className="block h-0.5 w-5 rounded-full bg-slate-950" />
            </span>
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white/95 px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {filteredLinks.map((link) => (
                <a
                  key={link.href}
                  className="text-sm font-medium text-slate-700"
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile contact details */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm">
                <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Call</p>
                <a href={phoneHref} className="font-semibold text-slate-900">{siteCompany.phone}</a>
                <p className="mt-3 mb-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Email</p>
                <a href={`mailto:${siteCompany.email}`} className="font-semibold text-slate-900">
                  {siteCompany.email}
                </a>
                <p className="mt-3 mb-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">Hours</p>
                {siteCompany.workingHours.map((h) => (
                  <p key={h} className="text-slate-600">{h}</p>
                ))}
              </div>

              <button
                onClick={openBooking}
                className="button-shine rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
              >
                Book a Repair
              </button>

              <ButtonLink href={phoneHref} variant="accent" className="mt-1 w-full">
                Call Now
              </ButtonLink>
            </nav>
          </div>
        )}
      </header>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        company={siteCompany}
      />
    </>
  )
}

export default Navbar
