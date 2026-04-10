const brands = [
  {
    name: 'Apple',
    svg: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    name: 'Samsung',
    svg: (
      <svg viewBox="0 0 24 24" className="h-6 w-auto fill-current" aria-hidden style={{ width: 88 }}>
        <text x="0" y="17" fontSize="12" fontWeight="700" fontFamily="sans-serif">SAMSUNG</text>
      </svg>
    ),
  },
  {
    name: 'Dell',
    svg: (
      <svg viewBox="0 0 50 24" className="h-6 w-auto fill-current" aria-hidden>
        <text x="0" y="17" fontSize="14" fontWeight="700" fontFamily="sans-serif">Dell</text>
      </svg>
    ),
  },
  {
    name: 'HP',
    svg: (
      <svg viewBox="0 0 30 24" className="h-6 w-auto fill-current" aria-hidden>
        <text x="0" y="17" fontSize="14" fontWeight="700" fontFamily="sans-serif">HP</text>
      </svg>
    ),
  },
  {
    name: 'Lenovo',
    svg: (
      <svg viewBox="0 0 80 24" className="h-6 w-auto fill-current" aria-hidden>
        <text x="0" y="17" fontSize="13" fontWeight="700" fontFamily="sans-serif">Lenovo</text>
      </svg>
    ),
  },
  {
    name: 'Asus',
    svg: (
      <svg viewBox="0 0 50 24" className="h-6 w-auto fill-current" aria-hidden>
        <text x="0" y="17" fontSize="14" fontWeight="700" fontFamily="sans-serif">ASUS</text>
      </svg>
    ),
  },
  {
    name: 'Acer',
    svg: (
      <svg viewBox="0 0 50 24" className="h-6 w-auto fill-current" aria-hidden>
        <text x="0" y="17" fontSize="14" fontWeight="700" fontFamily="sans-serif">Acer</text>
      </svg>
    ),
  },
  {
    name: 'OnePlus',
    svg: (
      <svg viewBox="0 0 72 24" className="h-6 w-auto fill-current" aria-hidden>
        <text x="0" y="17" fontSize="13" fontWeight="700" fontFamily="sans-serif">OnePlus</text>
      </svg>
    ),
  },
  {
    name: 'Xiaomi',
    svg: (
      <svg viewBox="0 0 60 24" className="h-6 w-auto fill-current" aria-hidden>
        <text x="0" y="17" fontSize="13" fontWeight="700" fontFamily="sans-serif">Xiaomi</text>
      </svg>
    ),
  },
  {
    name: 'Sony',
    svg: (
      <svg viewBox="0 0 50 24" className="h-6 w-auto fill-current" aria-hidden>
        <text x="0" y="17" fontSize="13" fontWeight="700" fontFamily="sans-serif">SONY</text>
      </svg>
    ),
  },
]

// Duplicate list so the marquee can loop seamlessly
const track = [...brands, ...brands]

function Brands() {
  return (
    <section className="overflow-hidden border-y border-slate-200/80 bg-white/60 py-10 backdrop-blur-sm">
      <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
        We repair all major brands
      </p>

      <div className="brands-track flex gap-16 will-change-transform">
        {track.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex shrink-0 items-center text-slate-400 transition-colors duration-200 hover:text-slate-700"
            title={brand.name}
          >
            {brand.svg}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Brands
