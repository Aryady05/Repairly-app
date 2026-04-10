import SectionIntro from '../ui/SectionIntro'
import { reasons } from '../../data/siteContent'

function WhyChooseUs() {
  return (
    <section className="scroll-mt-28 bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8" id="why-us">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionIntro
          eyebrow="Why Choose Repairly"
          title="Built to turn repair stress into clear next steps"
          theme="dark"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-sky-400 to-orange-400" />
              <h3 className="mt-6 font-heading text-2xl font-bold">{reason.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
