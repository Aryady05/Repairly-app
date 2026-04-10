import SectionIntro from '../ui/SectionIntro'
import { testimonials, trustMetrics } from '../../data/siteContent'

function Testimonials() {
  return (
    <section className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8" id="reviews">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Trust & Testimonials"
          title="Proof points that make contacting the business feel safe"
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.18)]"
              >
                <p className="text-base leading-8 text-slate-700">"{item.quote}"</p>
                <div className="mt-5">
                  <p className="font-semibold text-slate-950">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-[2rem] bg-linear-to-br from-sky-500 via-cyan-400 to-orange-300 p-[1px]">
            <div className="h-full rounded-[calc(2rem-1px)] bg-[var(--color-cream)] p-8">
              <div className="rounded-[1.75rem] bg-slate-950 p-8 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-sky-200">Customer confidence</p>
                <p className="mt-4 font-heading text-5xl font-bold">4.9/5</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Average satisfaction score across repeat laptop and mobile repair customers.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {trustMetrics.map((metric) => (
                  <div
                    key={metric}
                    className="rounded-3xl border border-slate-200 bg-white px-5 py-5 text-sm font-medium text-slate-700"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
