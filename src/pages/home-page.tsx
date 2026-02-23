import { Link } from '@tanstack/react-router'
import sandyBryantsLogo from '@/assets/brand/sandy-bryants-mixtures-logo.png'
import nutrienLogo from '@/assets/partners/nutrien-ag-solutions-logo.png'
import crtLogo from '@/assets/partners/crt-logo.png'

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
          Sandy Bryant’s Mixtures®
        </h1>

        <p className="text-xl text-[#2b1a12]/80 max-w-3xl mx-auto">
          Practical livestock mineral supplementation, grounded in heritage and designed for Australian conditions.
        </p>

        <p className="text-lg text-[#2b1a12]/75 max-w-3xl mx-auto">
          Explore the product range, plan your ration using the calculator, and locate your nearest Nutrien Ag
          Solutions or CRT store.
        </p>

        <div className="flex justify-center pt-2">
          <Link
            to="/products"
            className="rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
          >
            View Products
          </Link>
        </div>
      </section>

      {/* Product Overview */}
      <section className="grid gap-5 md:grid-cols-3">
        {productCards.map((card) => (
  <article
    key={card.title}
    className={`label-card ${card.labelClass} rounded-xl border p-6 space-y-3 min-h-[220px] transition hover:shadow-md`}
  >
            <p className="label-kicker text-sm font-semibold">{card.variantText}</p>
            <h3 className="text-xl font-semibold text-[#2b1a12]">{card.title}</h3>
            <p className="max-w-[320px] text-[#2b1a12]/75">
  {card.text}
</p>

          </article>
        ))}
      </section>

      {/* Next steps */}
      <section className="rounded-2xl border bg-white/70 p-6 sm:p-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-[#2b1a12]">Next steps</h2>
          <p className="mt-3 text-lg text-[#2b1a12]/75 max-w-3xl mx-auto">
            A simple pathway from heritage, to practical planning, to purchase through your local store network.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {/* Our Story */}
          <article className="rounded-xl border bg-white p-6 text-center">
            <h3 className="text-xl font-semibold text-[#2b1a12]">Our Story</h3>
            <p className="mt-2 text-left text-[#2b1a12]/75">
              Learn how Sandy Bryant’s Mixtures® evolved through generations of practical farming experience.
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
          Sandy Bryant’s Mixtures® reflects a long-standing farming heritage, combined with a practical understanding
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
