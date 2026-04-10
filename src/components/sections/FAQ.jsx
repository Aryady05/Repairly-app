import { useState } from 'react'
import SectionIntro from '../ui/SectionIntro'

const faqs = [
  {
    question: 'How long does a typical repair take?',
    answer:
      'Most common repairs — like screen replacements, battery swaps, and charging port fixes — are completed within 90 minutes to a few hours. More complex jobs such as motherboard-level fixes or water damage recovery may take 1–2 business days. We always give you a time estimate upfront before work begins.',
  },
  {
    question: 'Do you offer a warranty on repairs?',
    answer:
      'Yes. Every repair comes with a 90-day workmanship warranty. If the same issue recurs within that period, we will fix it at no extra charge. This covers labour and any parts we supplied — it does not cover new physical damage or unrelated faults.',
  },
  {
    question: 'How much does a repair cost?',
    answer:
      'Costs vary based on the device, issue, and parts required. We offer free initial diagnostics on most jobs, and you receive a clear, itemised quote before we start any paid work. There are no hidden charges.',
  },
  {
    question: 'Can you pick up and deliver my device?',
    answer:
      'Yes, pickup and drop-off service is available in our service area. You can request this through the contact form or by calling us directly. Our team will schedule a convenient time window for you.',
  },
  {
    question: 'Do you use genuine parts?',
    answer:
      'We use either genuine OEM parts or high-grade compatible alternatives, depending on availability and your preference. We will always tell you which type of part is being used and why before we order it.',
  },
  {
    question: 'What happens if my device cannot be repaired?',
    answer:
      'If we determine that a repair is not feasible or is not economically worth it compared to the device value, we will tell you honestly. In that case, we charge only a minimal diagnosis fee (or nothing at all for straightforward assessments) — not the full repair cost.',
  },
  {
    question: 'Is my data safe during the repair?',
    answer:
      "We handle your device with care and do not access personal data unless it is directly required for diagnosing a software issue (e.g. testing a lock-screen fault). We strongly recommend backing up your device before dropping it off, and we can help with that if needed.",
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8" id="faq">
      <div className="mx-auto max-w-3xl">
        <SectionIntro
          align="center"
          eyebrow="FAQ"
          title="Common questions, answered"
          description="Everything you need to know before handing over your device."
        />

        <div className="mt-12 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white/80 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.1)] backdrop-blur overflow-hidden">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.question}>
                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-sky-500 focus-visible:outline-offset-[-2px]"
                >
                  <span className="text-base font-semibold text-slate-900 md:text-[17px]">
                    {faq.question}
                  </span>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition-all duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    aria-hidden
                  >
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-slate-500">
                      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                    </svg>
                  </span>
                </button>

                <section
                  id={`faq-answer-${i}`}
                  aria-labelledby={`faq-btn-${i}`}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '400px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <p className="px-6 pb-6 text-sm leading-7 text-slate-600 md:text-base">
                    {faq.answer}
                  </p>
                </section>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
