import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import sheepCattleIcon from '@/assets/sheep-cattle-icon.png'
import cattleOnlyIcon from '@/assets/cattle-only-icon.png'
import hardCountryIcon from '@/assets/hard-country-cattle-icon.png'

export function WhySandyBryantsPage() {
  useEffect(() => {
    document.title = "Why Sandy Bryant’s Mixtures®"

    const description =
      "Learn about the practical Australian farming philosophy, structured copper formulations, and supplementation approach behind Sandy Bryant’s Mixtures®."

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)
  }, [])

  return (
    <main className="mx-auto max-w-5xl px-6 py-14 space-y-16">
      {/* Hero */}
      <section className="text-center space-y-5">
       <h1 className="text-5xl font-semibold tracking-tight text-[#2b1a12]">
  Why Sandy Bryant’s Mixtures<span className="align-super text-[0.45em]">®</span>
</h1>

        <p className="mx-auto max-w-3xl text-lg leading-[1.7] text-[#2b1a12]/75">
          Practical livestock mineral supplementation refined through Australian
          farming experience.
        </p>
      </section>

      {/* Intro */}
      <section className="rounded-2xl border border-black/10 bg-white/70 p-8 shadow-sm">
  <div className="mb-6 rounded-xl border-l-4 border-[#533626] bg-[#efe7d6]/60 px-5 py-4">
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#533626]">
      Built from practical farming experience
    </p>
  </div>
        <p className="leading-[1.8] text-[#2b1a12]/80">
          Sandy Bryant’s Mixtures<span className="align-super text-[0.6em]">®</span> reflects a practical Australian approach to
          livestock mineral supplementation developed through generations of
          farming experience, refinement, and observation in real production
          environments.
        </p>

        <p className="mt-5 leading-[1.8] text-[#2b1a12]/80">
          The formulations are designed to support practical supplementation
          planning across a range of Australian livestock systems, management
          conditions, and seasonal pressures.
        </p>
      </section>

      {/* Heritage */}
      <section className="space-y-5">
        

        <div className="rounded-2xl border border-black/10 bg-white/70 p-8 shadow-sm">
        <div className="mb-6 rounded-xl border-l-4 border-[#533626] bg-[#efe7d6]/60 px-5 py-4">
  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#533626]">
    Practical refinement over generations
  </p>
</div>
          <p className="leading-[1.8] text-[#2b1a12]/80">
            The foundations of Sandy Bryant’s Mixtures<span className="align-super text-[0.6em]">®</span> trace back to practical
            Australian farming heritage and a philosophy centred around
            functionality, consistency, and ease of use in the field.
          </p>

          <p className="mt-5 leading-[1.8] text-[#2b1a12]/80">
            The formulations have been progressively refined through practical
            application across varying environments and management systems, with
            an emphasis on supplementation approaches suited to real-world
            livestock operations.
          </p>
        </div>
      </section>

      {/* Copper Variants */}
     <section className="space-y-6">
  <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm">
    <div className="mb-3 rounded-xl border-l-4 border-[#3b82f6] bg-[#efe7d6]/60 px-4 py-3">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3b82f6]">
        Sheep & Cattle – 6.5 Cu
      </p>
    </div>

    <div className="flex flex-col gap-4 md:flex-row md:items-center">
     <div className="flex h-32 w-40 shrink-0 items-center justify-center">
  <img
    src={sheepCattleIcon}
    alt="Sheep and cattle icon"
    className="h-32 w-full object-contain"
  />
</div>

      <div className="space-y-3">
        
        <p className="max-w-3xl text-lg leading-[1.8] text-[#4e3d31]">
          The foundation formulation within the Sandy Bryant’s Mixtures<span className="align-super text-[0.6em]">®</span>
          range, structured for practical cattle and sheep supplementation
          programs across Australian livestock systems.
        </p>
      </div>
    </div>
  </div>

  <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm">
    <div className="mb-3 rounded-xl border-l-4 border-[#2f855a] bg-[#efe7d6]/60 px-4 py-3">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2f855a]">
        Cattle Only – 8.5 Cu
      </p>
    </div>

    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="flex h-32 w-40 shrink-0 items-center justify-center">
  <img
    src={cattleOnlyIcon}
    alt="Cattle only icon"
    className="h-32 w-full object-contain"
  />
</div>

      <div className="space-y-3">
        
        <p className="max-w-3xl text-lg leading-[1.8] text-[#4e3d31]">
          Structured specifically for cattle-only systems where higher copper
          inclusion may be preferred for operational management programs.
        </p>
      </div>
    </div>
  </div>

  <div className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm">
    <div className="mb-3 rounded-xl border-l-4 border-[#7b1e2b] bg-[#efe7d6]/60 px-4 py-3">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b1e2b]">
        Hard Country, Transport &amp; Yard – 9.5 Cu
      </p>
    </div>

    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="flex h-32 w-52 shrink-0 items-center justify-center">
  <img
    src={hardCountryIcon}
    alt="Hard country cattle, travel and yard icon"
    className="h-32 w-full object-contain"
  />
</div>

      <div className="space-y-3">
       
        <p className="max-w-3xl text-lg leading-[1.8] text-[#4e3d31]">
          Developed for more demanding management environments and extensive
          operational livestock systems where practical supplementation
          flexibility is important.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* FulviPhos */}
      <section className="space-y-5">
       
        <div className="rounded-2xl border border-black/10 bg-white/70 p-8 shadow-sm">
        <div className="mb-6 rounded-xl border-l-4 border-[#533626] bg-[#efe7d6]/60 px-5 py-4">
  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#533626]">
    Progressive formulation development - FulviPhos<span className="align-super text-[0.6em]">TM</span> Integration
  </p>
</div>
          <p className="leading-[1.8] text-[#2b1a12]/80">
            FulviPhos<span className="align-super text-[0.6em]">TM</span> components incorporated within the Hard Country, Transport &
            Yard formulation form part of the progressive refinement of the
            Sandy Bryant’s Mixtures<span className="align-super text-[0.6em]">®</span> range.
          </p>

          <p className="mt-5 leading-[1.8] text-[#2b1a12]/80">
            The integration of Fulvic Acid and Phosphoric Acid components
            reflects ongoing development focused on practical supplementation
            systems suited to Australian livestock management environments.
          </p>
        </div>
      </section>

      {/* Delivery */}
      <section className="space-y-5">
     
        <div className="rounded-2xl border border-black/10 bg-white/70 p-8 shadow-sm">
        <div className="mb-6 rounded-xl border-l-4 border-[#533626] bg-[#efe7d6]/60 px-5 py-4">
  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#533626]">
    Flexible on-farm delivery
  </p>
</div>
          <ul className="grid gap-3 md:grid-cols-2 text-[#2b1a12]/80">
            <li>• Feed-based supplementation</li>
            <li>• Floater~Doser<span className="align-super text-[0.6em]">®</span> delivery</li>
            <li>• Trough-water systems</li>
            <li>• Inline water supplementation systems</li>
            <li>• Tank-based supplementation programs</li>
          </ul>
        </div>
      </section>

      {/* Practical management */}
      <section className="space-y-5">
        
        <div className="rounded-2xl border border-black/10 bg-white/70 p-8 shadow-sm">
        <div className="mb-6 rounded-xl border-l-4 border-[#533626] bg-[#efe7d6]/60 px-5 py-4">
  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#533626]">
    Designed for real farm systems
  </p>
</div>
          <p className="leading-[1.8] text-[#2b1a12]/80">
            The Sandy Bryant’s Mixtures<span className="align-super text-[0.6em]">®</span> philosophy centres around practical
            livestock management and supplementation systems capable of fitting
            within day-to-day farming operations.
          </p>

          <p className="mt-5 leading-[1.8] text-[#2b1a12]/80">
            Consideration is given to labour efficiency, practical delivery
            methods, paddock management, livestock handling systems, transport
            phases, and seasonal operational conditions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-black/10 bg-white/70 p-10 text-center shadow-sm space-y-5">
        <h2 className="text-3xl font-semibold tracking-tight text-[#533626]">
          Explore the Range
        </h2>

        <p className="mx-auto max-w-2xl text-[#2b1a12]/75 leading-[1.7]">
          Discover the structured Sandy Bryant’s Mixtures<span className="align-super text-[0.6em]">®</span> supplementation range
          and practical planning tools developed for Australian livestock
          systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            to="/products"
            className="rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            View Products
          </Link>

          <Link
            to="/calculator"
            className="rounded-xl border border-black/10 bg-white/70 px-6 py-3 font-medium text-[#2b1a12] transition hover:bg-white hover:shadow-sm"
          >
            Open Calculator
          </Link>
        </div>
      </section>
    </main>
  )
}

