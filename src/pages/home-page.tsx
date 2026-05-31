import { Link } from '@tanstack/react-router'
import sandyBryantsLogo from '@/assets/brand/sandy-bryants-mixtures-logo.png'
import nutrienLogo from '@/assets/partners/nutrien-ag-solutions-logo.png'
import crtLogo from '@/assets/partners/crt-logo.png'
import { useEffect } from 'react'

const productCards = [
  {
    title: 'Sheep & Cattle',
    text: 'Balanced copper formulation suitable for cattle and sheep.',
    variantText: '6.5 copper variant',
    labelClass: 'label-blue',
  },
  {
    title: 'Cattle Only',
    text: 'Higher copper formulation designed for cattle-only systems.',
    variantText: '8.5 copper variant',
    labelClass: 'label-green',
     },
  {
    title: 'Hard Country Cattle, Travel & Yard',
    text: 'Elevated copper formulation suited to transport, yarding, and hard-country cattle.',
    variantText: '9.5 copper variant',
    labelClass: 'label-maroon',
     },
]

export function HomePage() {
  useEffect(() => {
  document.title =
    "Sandy Bryant’s Mixtures® | Livestock Mineral Supplementation"

  const description =
    "Australian livestock mineral supplementation for cattle and sheep, including practical water-based delivery through the Floater~Doser® system."

  let meta = document.querySelector('meta[name="description"]')

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'description')
    document.head.appendChild(meta)
  }

  meta.setAttribute('content', description)
}, [])
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 space-y-14">
      {/* Hero */}
      <section className="text-center space-y-6">
        <img
          src={sandyBryantsLogo}
          alt="Sandy Bryant’s Mixtures logo"
          className="mx-auto w-full max-w-[260px] sm:max-w-[320px]"
        />
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#2b1a12]">
  Sandy Bryant’s Mixtures<span className="align-super text-[0.45em]">®</span>
</h1>

        <p className="text-xl text-[#2b1a12]/80 max-w-3xl mx-auto">
          Practical livestock mineral supplementation, grounded in heritage and designed for Australian conditions.
        </p>

        <p className="text-lg text-[#2b1a12]/75 max-w-3xl mx-auto">
          Explore the product range, plan your ration using the calculator, and locate your nearest <br /> <a
  href="https://www.nutrienagsolutions.com.au/find-a-branch?"
  target="_blank"
  rel="noopener noreferrer"
  className="underline decoration-black/20 underline-offset-4 hover:decoration-black"
>
  Nutrien Ag Solutions
</a>{' '}
or{' '}
<a
  href="https://crt.com.au/stores/"
  target="_blank"
  rel="noopener noreferrer"
  className="underline decoration-black/20 underline-offset-4 hover:decoration-black"
>
  CRT store
</a>.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            to="/products"
            className="rounded-md border border-black/10 bg-white/75 px-6 py-3 font-medium text-[#2b1a12] shadow-sm transition hover:bg-white hover:shadow"
          >
            Choose a formulation
          </Link>
          <Link
            to="/calculator"
            className="rounded-md border border-black/10 bg-white/75 px-6 py-3 font-medium text-[#2b1a12] shadow-sm transition hover:bg-white hover:shadow"
          >
            Calculate a ration
          </Link>
          <Link
            to="/where-to-buy"
            className="rounded-md border border-black/10 bg-white/75 px-6 py-3 font-medium text-[#2b1a12] shadow-sm transition hover:bg-white hover:shadow"
          >
            Find a store
          </Link>
        </div>
      </section>

      
      {/* Product overview gateway */}
<section className="rounded-2xl border border-black/10 bg-white/50 p-6 sm:p-8">
  <div className="text-center">
    <h2 className="text-3xl font-semibold text-[#2b1a12]">The range at a glance</h2>
    <p className="mt-3 mx-auto max-w-2xl text-lg text-[#2b1a12]/75">
      Three related formulations built around a practical livestock supplementation foundation.
      The Products page provides the full formulation notes and usage detail.
    </p>
  </div>

 <div className="mt-8 grid gap-4 md:grid-cols-3">
  {productCards.map((card) => (
    <Link
      key={card.title}
      to="/products"
      className="block"
    >
      <article
        className={`rounded-xl border border-black/10 border-t-4 p-5 text-center transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-black/20 ${
  card.labelClass === 'label-blue'
    ? 'bg-[rgba(75,134,199,0.10)] border-t-[#4b86c7]'
    : card.labelClass === 'label-green'
      ? 'bg-[rgba(58,141,79,0.10)] border-t-[#3a8d4f]'
      : 'bg-[rgba(123,30,43,0.10)] border-t-[#7b1e2b]'
}`}
      >
        <p className="text-sm font-semibold text-[#2b1a12]/55">
          {card.variantText}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-[#2b1a12]">
          {card.title}
        </h3>

        <p className="mt-2 mx-auto max-w-[280px] text-sm leading-[1.6] text-[#2b1a12]/70">
          {card.text}
        </p>
      </article>
    </Link>
  ))}
</div>

</section>

      {/* Next steps */}
      <section className="rounded-2xl border bg-white/70 p-6 sm:p-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#2b1a12]">Next steps</h2>
          <p className="mt-3 text-lg text-[#2b1a12]/75 max-w-3xl mx-auto">
            A practical pathway from product selection, to ration planning, to purchase through your local store network.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {/* Our Story */}
          <article className="rounded-xl border bg-white p-6 text-center">
            <h3 className="text-xl font-semibold text-[#2b1a12]">Our Story</h3>
            <p className="mt-2 text-left text-[#2b1a12]/75">
  Learn how Sandy Bryant’s Mixtures<span className="align-super text-[0.6em]">®</span> evolved through generations of practical farming experience.
</p>
            <div className="mt-6 flex justify-center">
              <Link
                to="/our-story"
                className="inline-flex min-w-[180px] justify-center rounded-xl border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#2b1a12] shadow-sm hover:shadow transition"
              >
                Read the story
              </Link>
            </div>
          </article>

          {/* Livestock Ration Calculator (elevated) */}
          <article className="rounded-xl border bg-white p-6 text-center ring-1 ring-black/5 shadow-sm md:-translate-y-2">
            <h3 className="text-xl font-semibold text-[#2b1a12]">Livestock Ration Calculator</h3>
            <p className="mt-2 text-left text-[#2b1a12]/75">
              Estimate supplement volumes using animal numbers, liveweight, and your chosen variant.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                to="/calculator"
                className="inline-flex min-w-[180px] justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition shadow-sm"
              >
                Use the calculator
              </Link>
            </div>
          </article>

          {/* Where to Buy */}
          <article className="rounded-xl border bg-white p-6 text-center">
            <h3 className="text-xl font-semibold text-[#2b1a12]">Where to Buy</h3>
            <p className="mt-2 text-left text-[#2b1a12]/75">
              Supplied exclusively through Nutrien Ag Solutions® and CRT. Find your nearest store.
            </p>

            <div className="mt-6">
              <div className="flex justify-center">
                <Link
                  to="/where-to-buy"
                  className="inline-flex min-w-[180px] justify-center rounded-xl border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#2b1a12] shadow-sm hover:shadow transition"
                >
                  Store options
                </Link>
              </div>

              <div className="flex items-center justify-center gap-4 pt-4">
                <img
                  src={nutrienLogo}
                  alt="Nutrien Ag Solutions®"
                  className="h-8 w-auto object-contain"
                  loading="lazy"
                />
                <img src={crtLogo} alt="CRT" className="h-8 w-auto object-contain" loading="lazy" />
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Practical Positioning */}
      <section className="text-center max-w-4xl mx-auto space-y-5">
        <h2 className="text-3xl font-semibold text-[#2b1a12]">Practical Supplementation Support</h2>

        <p className="text-lg text-[#2b1a12]/75">
  Sandy Bryant’s Mixtures<span className="align-super text-[0.6em]">®</span> reflects a long-standing farming heritage, combined with a practical understanding
  of livestock systems. The range is formulated to assist producers in managing mineral supplementation across
  a variety of production environments.
</p>

        <p className="text-lg text-[#2b1a12]/75">
          Available exclusively through the Nutrien Ag Solutions and CRT network, the range is supported by local
          store teams who understand regional conditions.
        </p>
      </section>
    </main>
  )
}
