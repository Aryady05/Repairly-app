import { useState, useEffect, useRef } from 'react'

const initialForm = { name: '', phone: '', device: '', issue: '' }

function BookingModal({ isOpen, onClose, company }) {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const dialogRef = useRef(null)
  const firstInputRef = useRef(null)

  // Use native <dialog> show/hide
  useEffect(() => {
    const el = dialogRef.current
    if (!el) return
    if (isOpen) {
      if (!el.open) el.showModal()
      document.body.style.overflow = 'hidden'
      setTimeout(() => firstInputRef.current?.focus(), 60)
    } else {
      if (el.open) el.close()
      document.body.style.overflow = ''
      setSubmitted(false)
      setFormData(initialForm)
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on native cancel (Escape)
  const handleCancel = (e) => {
    e.preventDefault()
    onClose()
  }

  // Close when clicking the backdrop (dialog::backdrop area)
  const handleDialogClick = (e) => {
    const rect = dialogRef.current?.getBoundingClientRect()
    if (!rect) return
    const isOutside =
      e.clientX < rect.left || e.clientX > rect.right ||
      e.clientY < rect.top  || e.clientY > rect.bottom
    if (isOutside) onClose()
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData(initialForm)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleDialogClick}
      onKeyDown={(e) => { if (e.key === 'Escape') onClose() }}
      aria-labelledby="booking-modal-title"
      className="m-auto w-full max-w-lg rounded-[2rem] border-0 bg-transparent p-4 backdrop:bg-slate-950/55 backdrop:backdrop-blur-[6px]"
      style={{ animation: isOpen ? 'modalIn 0.22s cubic-bezier(0.34,1.56,0.64,1) both' : 'none' }}
    >
      <div className="w-full rounded-[2rem] bg-white shadow-[0_40px_100px_-30px_rgba(15,23,42,0.45)]">
        {/* Header */}
        <div className="rounded-t-[2rem] bg-slate-950 px-8 py-7 text-white">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
            Book a Repair
          </p>
          <h2 id="booking-modal-title" className="font-heading text-2xl font-bold">
            Tell us about your device
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            We&apos;ll get back to you within the hour.
          </p>

          <button
            onClick={onClose}
            type="button"
            aria-label="Close booking form"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round]">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-7">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                <svg viewBox="0 0 20 20" className="h-7 w-7 fill-emerald-600">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-heading text-xl font-bold text-slate-950">Request received!</p>
                <p className="mt-1 text-sm text-slate-500">
                  We&apos;ll reach out to {company.phone} or by email shortly.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-2 rounded-full bg-slate-950 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
              >
                Close
              </button>
            </div>
          ) : (
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                  Name
                  <input
                    ref={firstInputRef}
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white"
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                  Phone
                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white"
                  />
                </label>
              </div>

              <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                Device
                <input
                  required
                  name="device"
                  type="text"
                  placeholder="Laptop, iPhone, Android, tablet…"
                  value={formData.device}
                  onChange={handleChange}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white"
                />
              </label>

              <label className="grid gap-1.5 text-sm font-medium text-slate-700">
                Issue
                <textarea
                  required
                  name="issue"
                  placeholder="Describe the issue briefly"
                  value={formData.issue}
                  onChange={handleChange}
                  className="min-h-28 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white"
                />
              </label>

              <button
                type="submit"
                className="button-shine mt-1 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-600"
              >
                Book Repair
              </button>

              <p className="text-center text-xs leading-6 text-slate-400">
                By submitting you agree to be contacted about your repair request.
              </p>
            </form>
          )}
        </div>
      </div>
    </dialog>
  )
}

export default BookingModal
