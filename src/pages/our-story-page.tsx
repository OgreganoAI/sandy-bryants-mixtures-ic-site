import sandyBryantWatermark from '@/assets/brand/Sandy-Bryant.png'

export function OurStoryPage() {
  return (
    <main className="relative mx-auto max-w-5xl overflow-hidden px-6 py-12">
      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <img
          src={sandyBryantWatermark}
          alt=""
          aria-hidden="true"
          className="mt-14 w-[520px] max-w-[85%] select-none object-contain opacity-25 blur-[0.5px]"
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

          <div className="rounded-xl border border-black/10 bg-white/60 p-6">
            <h2 className="text-2xl font-semibold text-[#2b1a12]">A practical focus</h2>
            <p className="mt-3 text-base text-[#2b1a12]/75">
              This website includes a Livestock Ration Calculator to help estimate supplement volumes
              based on your selected variant, animal numbers, and liveweight. It is designed to
              support consistent planning and on-farm use.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
