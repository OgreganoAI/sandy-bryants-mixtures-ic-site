import { Link } from '@tanstack/react-router'
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Droplets,
  Leaf,
  PackageCheck,
  Unlink,
} from 'lucide-react'
import { useEffect } from 'react'

import horseLabel from '@/assets/labels/horse-label.png'

const packSizes = ['1.0 L', '2.5 L', '5 L', '10 L', '20 L']

const nutrients = ['Copper', 'Zinc', 'Manganese', 'Magnesium', 'Iodine', 'Selenium', 'Cobalt', 'Vitamin B12']

const nutrientSupportAreas = [
  {
    title: 'Energy and metabolism',
    description:
      'Magnesium, manganese, iodine and Vitamin B12 contribute to enzyme and hormone systems involved in releasing and using energy from feed.',
  },
  {
    title: 'Blood and oxygen transport',
    description:
      'Copper contributes to normal haemoglobin and connective-tissue enzyme systems. Cobalt is nutritionally linked with Vitamin B12, which supports normal blood formation.',
  },
  {
    title: 'Muscle and nerve function',
    description:
      'Magnesium supports normal nerve signalling and muscle function, while selenium contributes to antioxidant systems that help protect cells.',
  },
  {
    title: 'Bones and connective tissue',
    description:
      'Copper, zinc and manganese contribute to the normal formation and maintenance of bone, cartilage, tendons and ligaments.',
  },
  {
    title: 'Skin and tissue maintenance',
    description:
      'Zinc and copper take part in enzyme systems involved in skin integrity, tissue maintenance and normal repair.',
  },
  {
    title: 'Thyroid and metabolic regulation',
    description:
      'Iodine supports normal thyroid hormone production, while manganese contributes to carbohydrate and fat metabolism.',
  },
] as const

export function HorseProductPage() {
  useEffect(() => {
    document.title = "Sandy Bryant's Horse | Equine Mineral Supplement"

    const description =
      "Explore Sandy Bryant's Horse, a concentrated liquid supplement with organically stabilised trace minerals, Vitamin B12, Micro Fine Liquid Kelp and no molasses, used at 20 mL once weekly."

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)
  }, [])

  return (
    <div className="mx-auto max-w-6xl space-y-14 px-2 py-4 sm:px-6 sm:py-10">
      <section className="grid items-center gap-10 overflow-hidden rounded-3xl border border-[#6e2d7f]/20 bg-gradient-to-br from-[#f4edf5] via-white to-[#efe7d6] p-6 shadow-sm sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)]">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-[#2b1a12] px-3 py-1 text-sm font-semibold text-white">
              Draft for owner review
            </span>
            <span className="inline-flex rounded-full border border-[#6e2d7f]/20 bg-[#6e2d7f]/10 px-3 py-1 text-sm font-semibold text-[#5d256b]">
              Distinct equine formulation
            </span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#2b1a12] sm:text-5xl">
            Sandy Bryant&apos;s Horse
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[#2b1a12]/80">
            A concentrated liquid mineral supplement developed specifically for horses, combining organically
            stabilised trace minerals with Vitamin B12, Micro Fine Liquid Kelp and no molasses.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-[#2b1a12]/70">
            Created as a convenient weekly addition to feed, it provides Horse-specific mineral support in an
            easy-to-measure liquid format.
          </p>

          <div className="mt-6 max-w-md rounded-2xl bg-[#5d256b] p-5 text-white shadow-md">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">Simple weekly routine</p>
            <p className="mt-1 text-3xl font-semibold">Just 20 mL per week.</p>
            <p className="mt-2 text-white/80">Provide with feed.</p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/where-to-buy"
              className="inline-flex rounded-xl bg-[#5d256b] px-5 py-3 font-semibold text-white shadow-sm hover:bg-[#4f205c]"
            >
              Find a store
            </Link>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-[620px]">
          <img
            src={horseLabel}
            alt="Sandy Bryant's Horse 1 litre label"
            className="block h-auto w-full object-contain"
          />
          <div className="mt-3 flex justify-center">
            <span className="inline-flex items-center rounded border border-[#b9a900] bg-[#f4e500] px-3 py-1.5 text-xs font-extrabold text-[#2b1a12]">
              <span className="uppercase tracking-[0.1em]">Plus</span>
              <span className="ml-2 border-l border-black/25 pl-2">Micro Fine Liquid Kelp</span>
            </span>
          </div>
          <figcaption className="mt-2 text-center text-sm text-[#2b1a12]/60">
            Supplied 1 litre label artwork shown for draft review.
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="horse-facts-heading" className="space-y-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5d256b]">Horse-specific guidance</p>
          <h2 id="horse-facts-heading" className="mt-2 text-3xl font-semibold text-[#2b1a12]">
            A straightforward once-weekly routine
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-[#6e2d7f]/20 bg-[#6e2d7f]/10 p-6">
            <CalendarDays className="h-7 w-7 text-[#5d256b]" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-[#2b1a12]">20 mL once a week</h3>
            <p className="mt-2 leading-relaxed text-[#2b1a12]/70">
              Measure 20 mL and provide it once each week with feed.
            </p>
          </article>

          <article className="rounded-2xl border border-black/10 bg-white/70 p-6">
            <Droplets className="h-7 w-7 text-[#5d256b]" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-[#2b1a12]">Liquid mineral supplement</h3>
            <p className="mt-2 leading-relaxed text-[#2b1a12]/70">
              A convenient liquid format developed specifically to supplement the mineral intake of horses.
            </p>
          </article>

          <article className="rounded-2xl border border-black/10 bg-white/70 p-6">
            <PackageCheck className="h-7 w-7 text-[#5d256b]" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-[#2b1a12]">Pack sizes</h3>
            <div className="mt-3 flex flex-wrap gap-2" aria-label="Proposed Horse pack sizes">
              {packSizes.map((size) => (
                <span
                  key={size}
                  className="rounded-full border border-[#6e2d7f]/15 bg-[#6e2d7f]/10 px-3 py-1.5 text-sm font-semibold text-[#5d256b]"
                >
                  {size}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#2b1a12]/60">
              Pack range sourced from current operational material; store availability remains to be confirmed.
            </p>
          </article>

          <article className="rounded-2xl border border-black/10 bg-white/70 p-6">
            <BadgeCheck className="h-7 w-7 text-[#5d256b]" aria-hidden="true" />
            <h3 className="mt-4 text-xl font-semibold text-[#2b1a12]">
              One capful a week. 50 weeks in every 1.0 L pack.
            </h3>
            <p className="mt-2 leading-relaxed text-[#2b1a12]/70">
              The red cap makes the weekly 20 mL amount quick and easy to measure&mdash;simply add one capful to feed
              each week. Each 1.0 L pack provides 50 convenient weekly amounts.
            </p>
          </article>
        </div>
      </section>

      <section
        aria-labelledby="mineral-support-heading"
        className="overflow-hidden rounded-3xl border border-[#6e2d7f]/20 bg-[#f4edf5]"
      >
        <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
          <div className="bg-[#5d256b] p-7 text-white sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">How the formulation works</p>
            <h2 id="mineral-support-heading" className="mt-3 text-3xl font-semibold">
              From mineral challenge to effective use
            </h2>
            <p className="mt-4 leading-relaxed text-white/80">
              Mineral supplementation depends on more than the amount added to feed. This Horse formulation responds
              to availability and balance by supplying trace minerals in organically stabilised forms.
            </p>
          </div>

          <div className="grid gap-3 p-5 sm:p-7 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] md:items-stretch">
            <article className="rounded-2xl border border-white/70 bg-white/75 p-5">
              <Unlink className="h-7 w-7 text-[#5d256b]" aria-hidden="true" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#5d256b]">
                Step 1 &middot; The challenge
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#2b1a12]">Minerals can become unavailable</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#2b1a12]/70">
                During digestion, minerals can interact or bind with other compounds, leaving less available for
                absorption and use.
              </p>
            </article>

            <div className="flex items-center justify-center text-[#5d256b]" aria-hidden="true">
              <ArrowDown className="h-5 w-5 md:hidden" />
              <ArrowRight className="hidden h-5 w-5 md:block" />
            </div>

            <article className="rounded-2xl border border-white/70 bg-white/75 p-5">
              <Leaf className="h-7 w-7 text-[#5d256b]" aria-hidden="true" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#5d256b]">
                Step 2 &middot; The formulation
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#2b1a12]">Organic stabilisation</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#2b1a12]/70">
                The formulation supplies a balanced combination of trace minerals associated with organic components,
                an approach intended to help limit those binding interactions.
              </p>
            </article>

            <div className="flex items-center justify-center text-[#5d256b]" aria-hidden="true">
              <ArrowDown className="h-5 w-5 md:hidden" />
              <ArrowRight className="hidden h-5 w-5 md:block" />
            </div>

            <article className="rounded-2xl border border-white/70 bg-white/75 p-5">
              <Activity className="h-7 w-7 text-[#5d256b]" aria-hidden="true" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#5d256b]">
                Step 3 &middot; The intended result
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[#2b1a12]">Available for absorption and use</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#2b1a12]/70">
                By helping minerals remain available through digestion, the formulation is designed to support their
                absorption and use throughout the horse&apos;s body.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="nutrient-roles-heading" className="space-y-7">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5d256b]">
            Inside the Horse formulation
          </p>
          <h2 id="nutrient-roles-heading" className="mt-2 text-3xl font-semibold text-[#2b1a12]">
            What the nutrients support
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#2b1a12]/75">
            The Horse formulation combines organically stabilised trace minerals and Vitamin B12, together with Micro
            Fine Liquid Kelp. Micro Fine Liquid Kelp contributes additional naturally occurring trace elements and
            assists in helping the supplemented minerals remain available for absorption and use by the horse. The
            trace minerals and Vitamin B12 participate in a wide range of normal processes throughout the horse&apos;s
            body.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Nutrients highlighted in the Horse formulation">
            {nutrients.map((nutrient) => (
              <span
                key={nutrient}
                className="rounded-full border border-[#6e2d7f]/20 bg-[#6e2d7f]/10 px-3 py-1.5 text-sm font-semibold text-[#5d256b]"
              >
                {nutrient}
              </span>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <span className="inline-flex items-center rounded-md border border-[#b9a900] bg-[#f4e500] px-4 py-2 text-sm font-extrabold text-[#2b1a12]">
              <span className="uppercase tracking-[0.12em]">Plus</span>
              <span className="ml-3 border-l border-black/25 pl-3">Micro Fine Liquid Kelp</span>
            </span>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {nutrientSupportAreas.map((area, index) => (
            <article key={area.title} className="rounded-2xl border border-black/10 bg-white/75 p-6 shadow-sm">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#5d256b] text-sm font-semibold text-white">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[#2b1a12]">{area.title}</h3>
              <p className="mt-2 leading-relaxed text-[#2b1a12]/70">{area.description}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-4 rounded-2xl border border-[#6e2d7f]/20 bg-gradient-to-r from-[#efe7d6] to-[#f4edf5] p-6 sm:p-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5d256b]">Why small amounts matter</p>
            <h3 className="mt-2 text-2xl font-semibold text-[#2b1a12]">Balance is part of good mineral nutrition</h3>
          </div>
          <p className="leading-relaxed text-[#2b1a12]/75">
            Trace minerals are required in small amounts, and more does not automatically mean better. Their balance,
            their interaction with other parts of the ration and the form in which they are supplied all influence how
            they are used. The measured 20 mL once-weekly routine keeps supplementation simple and consistent.
          </p>
        </div>
      </section>

      <section className="grid gap-6 rounded-2xl border border-black/10 bg-white/60 p-6 sm:p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <h2 className="text-2xl font-semibold text-[#2b1a12]">Easy to include in the weekly feed routine</h2>
          <div className="mt-3 space-y-2 leading-relaxed text-[#2b1a12]/75">
            <p>
              <span className="font-semibold text-[#2b1a12]">Weekly guidance:</span> Measure 20 mL and provide it once
              each week with feed.
            </p>
            <p>The liquid format makes the weekly amount straightforward to measure and add to the horse&apos;s usual feed.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <Link
            to="/where-to-buy"
            className="inline-flex rounded-xl border border-black/10 bg-white px-5 py-3 font-semibold text-[#2b1a12] shadow-sm hover:shadow"
          >
            Find a CRT or Nutrien Ag store
          </Link>
          <Link
            to="/products"
            className="inline-flex rounded-xl border border-black/10 bg-white/70 px-5 py-3 font-semibold text-[#2b1a12] hover:bg-white"
          >
            View livestock formulations
          </Link>
        </div>
      </section>
    </div>
  )
}
