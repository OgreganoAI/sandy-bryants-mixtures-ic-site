import { Link } from '@tanstack/react-router'

const products = [
  {
    title: 'Sheep & Cattle',
    variantText: '6.5 copper variant',
    labelClass: 'label-blue',
    summary: 'Balanced copper formulation suitable for cattle and sheep.',
    details: {
      designedFor:
        'Mixed livestock systems requiring balanced copper supplementation across sheep & cattle. Suitable for all ruminants and swine.',
      typicalApplication:
        'General supplementation programmes integrated into routine farm management systems.',
      formulationApproach: (
  <>
    Sheep & Cattle represents the primary formulation within the range. A 6.5 copper level allows utilisation across all ruminants, particularly sheep. Incorporating lignin-based technology to organically chelate and stabilise the elements, this formulation provides a balanced and stabilised supplement designed to support optimal mineral availability within the animal.
  </>
),
      deliveryCompatibility: 'Suitable for addition to feed, provision through the Floater~Doser®, and delivery via inline water systems or tanks.',
    },
  },
  {
    title: 'Cattle Only',
    variantText: '8.5 copper variant',
    labelClass: 'label-green',
    summary: 'Higher copper formulation designed for cattle-only systems.',
    details: {
      designedFor:
        'Cattle-only operations requiring elevated copper inclusion within structured supplementation programmes.',
      typicalApplication:
        'Used where increased copper concentration is appropriate within regional production systems.',
      formulationApproach:
        'Shares the same organically chelated lignin base formulation as the full range, with copper adjusted to 8.5 to suit cattle-only management systems.',
      deliveryCompatibility:
        'Suitable for addition to feed, provision through the Floater~Doser®, and delivery via inline water systems or tanks.',
    },
  },
  {
    title: 'Hard Country Cattle, Travel & Yard',
    variantText: '9.5 copper variant',
    labelClass: 'label-maroon',
    summary:
      'Elevated copper formulation suited to transport, yarding, and hard-country cattle systems.',
    details: {
      designedFor:
        'Hard-country cattle, transport situations, yarding periods, and operations requiring elevated copper inclusion.',
      typicalApplication:
        'Supplementation during higher stress or transitional management phases.',
      formulationApproach: (
  <>
    Shares the same organically chelated lignin mineral base as the range, with copper adjusted to 9.5. Additionally incorporates{' '}
    <span className="font-semibold text-[#2b1a12]">FulviPhos</span>, progressively formulated to address phosphorus deficiency concerns in more arid regions of Australia and management challenges including weight loss, stress during transport, and '<span className="italic">Dark Cutter</span>' risk.
  </>
),
      deliveryCompatibility:
        'Suitable for addition to feed, provision through the Floater~Doser®, and delivery via inline water systems or tanks.',
    },
  },
]

export function ProductsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 space-y-14">
      {/* Title */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-semibold tracking-tight text-[#2b1a12]">Product Range</h1>
        <p className="text-lg text-[#2b1a12]/75 max-w-2xl mx-auto">
          A practical range built from farming heritage, incorporating organically chelated elements within
          formulations designed for Australian production systems.
        </p>
      </section>

      {/* Product Cards */}
      <section className="grid gap-5 md:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.title}
            className={`label-card ${p.labelClass} rounded-xl border p-6 space-y-4 min-h-[240px] transition hover:shadow-md`}
          >
            <div className="space-y-2">
              <p className="label-kicker text-sm font-semibold">{p.variantText}</p>
              <h2 className="text-xl font-semibold text-[#2b1a12]">{p.title}</h2>
              <p className="max-w-[320px] text-[#2b1a12]/75">{p.summary}</p>
            </div>

            {/* Structured detail, collapsible */}
            <details className="rounded-lg border border-black/10 bg-white/50 p-4">
              <summary className="cursor-pointer select-none text-sm font-semibold text-[#2b1a12] hover:opacity-80 transition">
                View formulation notes
              </summary>

              <div className="mt-3 space-y-3 text-sm text-[#2b1a12]/75">
                <p>
                  <span className="font-semibold text-[#2b1a12]">Designed for: </span>
                  {p.details.designedFor}
                </p>
                <p>
                  <span className="font-semibold text-[#2b1a12]">Typical application: </span>
                  {p.details.typicalApplication}
                </p>
                <p>
                  <span className="font-semibold text-[#2b1a12]">Formulation approach: </span>
                  {p.details.formulationApproach}
                </p>
                <p>
                  <span className="font-semibold text-[#2b1a12]">Delivery compatibility: </span>
                  {p.details.deliveryCompatibility}
                </p>
              </div>
            </details>
          </article>
        ))}
      </section>

      {/* Formulation Integrity (site-wide note) */}
      <section className="rounded-2xl border border-black/10 bg-white/60 p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-[#2b1a12]">Formulation integrity</h2>

        <div className="space-y-3 text-base leading-relaxed text-[#2b1a12]/75 max-w-3xl">
          <p>
            Sandy Bryant’s Mixtures® are built on a lignin-based organically chelated foundation developed through practical refinement over generations. The chelation structure is designed to support stability within the digestive environment, reducing unwanted binding with competing elements and assisting the protected nutrients to pass through to the abomasum.
          </p>
          <p>
            Attention is given to molecular structure and polarity characteristics to enhance mineral availability within the animal.
          </p>
          <p>
            While delivery methods and farm management practices have evolved, the underlying formulation principles remain grounded in hands-on farming experience.
          </p>
        </div>
      </section>

      {/* Calculator bridge */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-[#2b1a12]">Plan your supplementation</h2>
        <p className="text-[#2b1a12]/75 max-w-2xl mx-auto">
          Use the Livestock Ration Calculator to estimate supplement volumes based on variant selection, animal
          numbers, and liveweight.
        </p>
        <Link
          to="/calculator"
          className="inline-flex rounded-xl bg-primary px-6 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
        >
          Use the Livestock Ration Calculator
        </Link>
      </section>
    </main>
  )
}