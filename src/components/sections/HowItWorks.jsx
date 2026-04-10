import SectionIntro from '../ui/SectionIntro'
import { processSteps } from '../../data/siteContent'

function HowItWorks() {
  return (
    <section className="scroll-mt-28 bg-white px-4 py-20 sm:px-6 lg:px-8" id="how-it-works">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="How It Works"
          title="A simple three-step flow that removes booking hesitation"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-[2rem] border border-slate-200 bg-[var(--color-cream)] p-6 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.15)]"
            >
              <p className="text-sm font-semibold tracking-[0.28em] text-sky-700">{step.number}</p>
              <h3 className="mt-5 font-heading text-2xl font-bold text-slate-950">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
