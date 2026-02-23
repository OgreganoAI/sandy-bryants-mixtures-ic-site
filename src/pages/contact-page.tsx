import nutrienLogo from '@/assets/partners/nutrien-ag-solutions-logo.png'
import crtLogo from '@/assets/partners/crt-logo.png'

export function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-5xl font-semibold tracking-tight text-[#2b1a12] text-center">
        Contact
      </h1>

      <div className="mt-10 grid gap-6 text-lg leading-relaxed text-[#2b1a12]/80 md:grid-cols-2">
        {/* Store finding column */}
        <section className="rounded-xl border border-black/10 bg-white/60 p-6">
          <h2 className="text-2xl font-semibold text-[#2b1a12]">Find your nearest store</h2>

          <p className="mt-3 text-base text-[#2b1a12]/75">
            For product availability, ordering, or local advice, please contact your nearest Nutrien Ag Solutions®
            branch or CRT store.
          </p>

          <div className="mt-5 flex flex-col gap-4">
            <a
              href="https://www.nutrienagsolutions.com.au/find-a-branch?"
              target="_blank"
              rel="noreferrer"
              className="w-full"
            >
              <span className="flex items-center justify-center gap-3 rounded-xl border border-black/10 bg-white px-6 py-4 shadow-sm transition hover:shadow">
                <img
                  src={nutrienLogo}
                  alt="Nutrien Ag Solutions®"
                  className="h-10 w-auto"
                  loading="lazy"
                />
                <span className="text-base font-semibold text-[#2b1a12]">
                  Find a Nutrien Branch
                </span>
              </span>
            </a>

            <a
              href="https://crt.com.au/stores/"
              target="_blank"
              rel="noreferrer"
              className="w-full"
            >
              <span className="flex items-center justify-center gap-3 rounded-xl border border-black/10 bg-[#f4c400] px-6 py-4 shadow-sm transition hover:shadow">
                <img
                  src={crtLogo}
                  alt="CRT"
                  className="h-10 w-auto"
                  loading="lazy"
                />
                <span className="text-base font-semibold text-[#0b2b1a]">
                  Find a CRT Store
                </span>
              </span>
            </a>
          </div>

          <p className="mt-5 text-sm text-[#2b1a12]/65">
            Sandy Bryant’s Mixtures® is supplied exclusively through Nutrien Ag Solutions and CRT.
          </p>
        </section>

        {/* General enquiries column */}
        <section className="rounded-xl border border-black/10 bg-white/60 p-6">
          <h2 className="text-2xl font-semibold text-[#2b1a12]">General enquiries</h2>

          <p className="mt-3 text-base text-[#2b1a12]/75">
            If you have a general enquiry about Sandy Bryant’s Mixtures® (not related to store ordering), you can
            contact us via your local store team, who will direct the enquiry appropriately.
          </p>

          <div className="mt-5 rounded-lg border border-black/10 bg-white p-4">
            <p className="text-sm text-[#2b1a12]/70">
              Tip: If you are enquiring about which variant is best suited to your livestock system, your local store
              team can assist you with product selection.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
