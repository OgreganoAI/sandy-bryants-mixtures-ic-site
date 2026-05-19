import { Link } from '@tanstack/react-router'
import floaterDoserImage from '@/assets/floater-doser/floater-doser-5l-drum.png'

export function FloaterDoserPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-14 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-semibold tracking-tight text-[#2b1a12]">
          Floater~Doser®
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[#2b1a12]/75">
          A practical Australian-designed delivery option for providing Sandy Bryant’s Mixtures®
          through livestock water systems.
        </p>
      </section>

      <section className="flex justify-center bg-transparent">
  <img
    src={floaterDoserImage}
    alt="Floater~Doser® system"
    className="w-full max-w-sm rounded-2xl"
    loading="lazy"
  />
</section>

      <section className="rounded-2xl border border-black/10 bg-white/60 p-8 space-y-5">
        <h2 className="text-2xl font-semibold text-[#2b1a12]">Practical water-based supplementation</h2>
        <p className="text-[#2b1a12]/75 leading-[1.6]">
          The Floater~Doser® is designed to support practical on-farm use where simple, repeatable supplementation through trough water is preferred.
        </p>
        <p className="text-[#2b1a12]/75 leading-[1.6]">
          Sandy Bryant’s Mixtures® can also be added to feed, delivered through inline water
          systems, or added to tanks where suitable management practices are in place.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <article className="rounded-xl border bg-white p-6">
          <h3 className="text-xl font-semibold text-[#2b1a12]">Simple setup</h3>
          <p className="mt-2 text-[#2b1a12]/75 leading-[1.6]">
            The system allows producers to provide supplementation through existing water access
            points without unnecessary complexity.
          </p>
        </article>

        <article className="rounded-xl border bg-white p-6">
          <h3 className="text-xl font-semibold text-[#2b1a12]">Repeatable use</h3>
          <p className="mt-2 text-[#2b1a12]/75 leading-[1.6]">
            Rations can be planned using animal numbers, liveweight, and the selected Sandy Bryant’s
            Mixtures® formulation.
          </p>
        </article>

        <article className="rounded-xl border bg-white p-6">
          <h3 className="text-xl font-semibold text-[#2b1a12]">Flexible delivery</h3>
          <p className="mt-2 text-[#2b1a12]/75 leading-[1.6]">
            Suitable management may include Floater~Doser®, inline water systems, tanks, or feed-based
            supplementation.
          </p>
        </article>
      </section>

      <section className="rounded-2xl border border-black/10 bg-white/60 p-8 space-y-4">
        <h2 className="text-2xl font-semibold text-[#2b1a12]">Large ration events</h2>
        <p className="text-[#2b1a12]/75 leading-[1.6]">
          If the calculated requirement for a ration event exceeds 5 litres, the amount should be
          split across multiple Floater~Doser® refills or multiple dosers in separate troughs.
          Always top up with water to the label mark.
        </p>
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-[#2b1a12]">Plan before use</h2>
        <p className="mx-auto max-w-2xl text-[#2b1a12]/75">
          Use the Livestock Ration Calculator to estimate volumes before preparing a supplementation
          event.
        </p>
        <Link
          to="/calculator"
          className="inline-flex rounded-xl bg-primary px-6 py-3 text-primary-foreground font-medium hover:opacity-90 transition"
        >
          Open the Calculator
        </Link>
      </section>
    </main>
  )
}