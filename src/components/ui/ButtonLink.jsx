function ButtonLink({ href, children, variant = 'primary', className = '' }) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'

  const variants = {
    primary:
      'bg-slate-950 text-white shadow-[0_20px_50px_-20px_rgba(2,132,199,0.55)] hover:-translate-y-0.5 hover:bg-sky-600',
    secondary:
      'border border-slate-300 bg-white/80 text-slate-900 backdrop-blur hover:-translate-y-0.5 hover:border-slate-950 hover:bg-white',
    accent:
      'bg-orange-500 text-white shadow-[0_20px_50px_-20px_rgba(249,115,22,0.7)] hover:-translate-y-0.5 hover:bg-orange-600',
  }

  return (
    <a className={`${baseClasses} ${variants[variant]} ${className}`} href={href}>
      {children}
    </a>
  )
}

export default ButtonLink
