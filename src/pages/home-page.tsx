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
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#2b1a12]">Sandy Bryant’s Mixtures®</h1>

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
          <article key={card.title} className={`label-card ${card.labelClass} rounded-xl border p-6 space-y-3 min-h-[220px]`}>
            <p className="label-kicker text-sm font-semibold">{card.variantText}</p>
            <h3 className="text-xl font-semibold text-[#2b1a12]">{card.title}</h3>
            <p className="text-[#2b1a12]/75">{card.text}</p>
          </article>
        ))}
      </section>

      {/* Calculator CTA */}
      <section className="text-center rounded-xl border bg-white p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-[#2b1a12]">Plan your ration in minutes</h2>
        <p className="text-[#2b1a12]/75 max-w-3xl mx-auto">
          Use the calculator to estimate supplement volumes for your herd, based on animal numbers, liveweight, and
          your chosen variant.
        </p>
        <Link
          to="/calculator"
          className="inline-flex rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
        >
          Use the Calculator
        </Link>
      </section>

      {/* Partner Strip */}
      <section className="rounded-xl border bg-muted/35 px-6 py-7 space-y-5">
        <p className="text-center text-sm font-semibold tracking-wide uppercase text-[#2b1a12]/70">
          Available exclusively through
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border bg-white p-5 flex flex-col items-center gap-4 text-center">
            <img src={nutrienLogo} alt="Nutrien Ag Solutions logo" className="h-14 w-auto object-contain" />
            <a
              href="https://www.nutrienagsolutions.com.au/find-a-branch"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition"
            >
              Find a Nutrien Branch
            </a>
          </article>
          <article className="rounded-lg border bg-white p-5 flex flex-col items-center gap-4 text-center">
            <img src={crtLogo} alt="CRT logo" className="h-14 w-auto object-contain" />
            <a
              href="https://crt.com.au/stores/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition"
            >
              Find a CRT Store
            </a>
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
