import sandyBryantWatermark from '@/assets/brand/Sandy-Bryant.png'
import { Link } from '@tanstack/react-router'

export function OurStoryPage() {
  return (
    <main className="relative mx-auto max-w-5xl overflow-hidden px-6 py-12">
      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <img
          src={sandyBryantWatermark}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 opacity-20 w-[600px] max-w-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-center text-5xl font-semibold tracking-tight text-[#2b1a12]">
          Our Story
        </h1>

        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-[#2b1a12]/80">
          <p>
            Sandy Bryant’s family were farmers in Gabon, England, who travelled to and settled in
            Australia in 1841, establishing their farm in Bathurst, New South Wales. Since then, his
            descendants have gradually developed formulas to support the production of livestock.
          </p>

          <p>
            Today, the legacy continues, providing farmers with organically chelated mixtures that
            can be incorporated into a practical supplementation programme through a variety of
            methods, including the Australian designed Floater~Doser®.
          </p>

          <p>
            Memories are recalled by a then young great grandson, perched on Sandy’s knee, as he
            mixed copper sulphate and nicotine to address lung worm in sheep at Warren, New South
            Wales.
          </p>

          <h2 className="mt-12 text-2xl font-semibold text-[#2b1a12]">
  A legacy of practical refinement
</h2>

<p>
  Over the decades that followed, knowledge was passed quietly from one generation to the next.
  What began as traditional livestock remedies on Australian farms gradually evolved into more
  carefully balanced mineral mixtures, shaped not in isolation, but through observation,
  experience, and the demands of real working properties.
</p>

<p>
  As agricultural understanding advanced, so too did the formulations. Traditional mineral inputs
  were refined and improved through the incorporation of organically chelated elements, enhancing
  stability and uptake while maintaining the straightforward, practical delivery methods that
  farmers value. The focus was never complexity for its own sake, but dependable performance
  under Australian conditions.
</p>

<p>
  Today, under the stewardship of Westminster Pastoral Company, Sandy Bryant’s Mixtures®
  continues to reflect that steady evolution. Each formulation carries with it the imprint of
  field experience — designed to support livestock health within practical supplementation
  programmes that fit naturally into everyday farm management.
</p>


          <p>
  Today, under the stewardship of Westminster Pastoral Company, Sandy Bryant’s Mixtures®
  continues to reflect that steady evolution. Each formulation carries with it the imprint of
  field experience — designed to support livestock health within practical supplementation
  programmes that fit naturally into everyday farm management.
</p>


          <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-black/5 bg-white/40 p-8">
  <h2 className="text-2xl font-semibold text-[#2b1a12]">
    A practical focus
  </h2>

  <p className="mt-3 text-base leading-relaxed text-[#2b1a12]/75">
    This website includes a Livestock Ration Calculator to help estimate supplement
    volumes based on your selected variant, animal numbers, and liveweight.
    It is designed to support consistent planning and on-farm use.
  </p>

  <div className="mt-4">
    <Link
      to="/calculator"
      className="text-sm font-semibold text-[#2b1a12] underline underline-offset-4 hover:opacity-80 transition"
    >
      Open the Livestock Ration Calculator
    </Link>
  </div>
</div>

        </div>
      </div>
    </main>
  )
}
