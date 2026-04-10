import laptopImage from '../../../laptop 2.png'
import { heroStats } from '../../data/siteContent'

function Hero({ company }) {
  return (
    <section className="relative isolate overflow-hidden" id="top">
      <div className="hero-grid absolute inset-0 -z-20 opacity-70" />
      <div className="hero-glow absolute -top-16 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-8">
        <div className="relative z-10">
          <h1 className="max-w-3xl text-balance font-heading text-5xl leading-none font-bold tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
            Broken device? We&apos;ll fix it fast.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Fast repairs. Transparent pricing. No repair stress.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {company.trustPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item, index) => (
              <div
                key={item.label}
                className="stagger-rise rounded-3xl border border-white/70 bg-white/80 p-5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.28)] backdrop-blur"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <p className="text-3xl font-bold text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[18rem] items-center justify-center py-4 md:min-h-[28rem] lg:py-8">
          <div className="absolute inset-x-[10%] top-[14%] -z-10 h-[58%] rounded-full bg-linear-to-r from-sky-200/75 via-cyan-100/65 to-orange-200/70 blur-3xl md:inset-x-[8%] md:top-[18%] md:h-[54%]" />

          <div className="absolute inset-x-[20%] bottom-[6%] -z-10 h-8 rounded-full bg-slate-900/18 blur-2xl md:bottom-[10%] md:h-10" />

          <div className="flex items-center justify-center">
            <img
              alt="Repairly laptop repair hero visual"
              className="relative z-0 w-[125%] max-w-none object-contain drop-shadow-[0_36px_60px_rgba(15,23,42,0.18)] sm:w-[118%] md:w-[122%] lg:w-[132%]"
              src={laptopImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
