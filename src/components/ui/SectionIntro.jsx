function SectionIntro({ eyebrow, title, description, align = 'left', theme = 'light' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
  const eyebrowClass = theme === 'dark' ? 'text-sky-200' : 'text-sky-700'
  const titleClass = theme === 'dark' ? 'text-white' : 'text-slate-950'
  const descriptionClass = theme === 'dark' ? 'text-slate-300' : 'text-slate-600'

  return (
    <div className={alignment}>
      <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.22em] ${eyebrowClass}`}>{eyebrow}</p>
      <h2 className={`text-balance font-heading text-3xl leading-tight font-bold md:text-4xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 md:text-lg ${descriptionClass}`}>{description}</p>
    </div>
  )
}

export default SectionIntro
