function Footer({ company, navLinks }) {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:px-8">
        <div>
          <p className="font-heading text-2xl font-bold text-white">{company.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
            Reliable laptop and mobile repair with fast diagnostics, transparent pricing, and a repair process
            that keeps customers informed.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Navigate</p>
          <div className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.href} className="text-sm text-slate-300 transition hover:text-white" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>{company.phone}</p>
            <p>{company.email}</p>
            {company.workingHours.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
