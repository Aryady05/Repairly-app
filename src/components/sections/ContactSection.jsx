import { useState } from 'react'
import ButtonLink from '../ui/ButtonLink'
import SectionIntro from '../ui/SectionIntro'

const initialForm = {
  name: '',
  phone: '',
  device: '',
  issue: '',
}

function ContactSection({ company }) {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <section className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8" id="contact">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_30px_100px_-45px_rgba(15,23,42,0.8)]">
          <SectionIntro
            eyebrow="Book Repair"
            title="Capture leads while the repair need is urgent"
            description="This form is intentionally short so visitors can submit quickly on mobile. Hook it up to email, WhatsApp, or a CRM later without changing the UI."
            theme="dark"
          />

          <div className="mt-8 space-y-5 text-sm text-slate-300">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-sky-200">Call</p>
              <p className="mt-2 text-lg font-semibold text-white">{company.phone}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-sky-200">Email</p>
              <p className="mt-2 text-lg font-semibold text-white">{company.email}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-sky-200">Working hours</p>
              <div className="mt-2 space-y-2">
                {company.workingHours.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </div>

          <ButtonLink href={company.phoneHref} variant="accent" className="mt-8">
            Speak To A Technician
          </ButtonLink>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_28px_80px_-45px_rgba(15,23,42,0.25)] md:p-8">
          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  required
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your name"
                  type="text"
                  value={formData.name}
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Phone
                <input
                  required
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white"
                  name="phone"
                  onChange={handleChange}
                  placeholder="Phone number"
                  type="tel"
                  value={formData.phone}
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Device
              <input
                required
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white"
                name="device"
                onChange={handleChange}
                placeholder="Laptop, iPhone, Android, tablet..."
                type="text"
                value={formData.device}
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Issue
              <textarea
                required
                className="min-h-36 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:bg-white"
                name="issue"
                onChange={handleChange}
                placeholder="Describe the issue briefly"
                value={formData.issue}
              />
            </label>

            <button
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-600"
              type="submit"
            >
              Book Repair
            </button>

            {submitted ? (
              <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                Thanks! Your repair request has been captured in the frontend flow. Connect this form to your preferred
                backend endpoint to receive real submissions.
              </p>
            ) : (
              <p className="text-sm leading-6 text-slate-500">
                By submitting, customers indicate they are ready to be contacted about their repair request.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
