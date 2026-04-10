import SectionIntro from '../ui/SectionIntro'
import { services } from '../../data/siteContent'

function Services() {
  return (
    <section className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8" id="services">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Services"
          title="Repair coverage for the issues customers need solved most"
          description="From broken screens to motherboard faults, Repairly is designed to move visitors from uncertainty to action with clear service categories and immediate booking paths."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group stagger-rise rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_35px_90px_-35px_rgba(14,165,233,0.3)]"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold tracking-[0.18em] text-white">
                {service.badge}
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold text-slate-950">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
