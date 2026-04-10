function MobileStickyCTA({ phoneHref }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
          href="#contact"
        >
          Book Repair
        </a>
        <a
          className="inline-flex flex-1 items-center justify-center rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-white"
          href={phoneHref}
        >
          Call Now
        </a>
      </div>
    </div>
  )
}

export default MobileStickyCTA
