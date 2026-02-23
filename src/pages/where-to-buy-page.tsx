import nutrienLogo from '@/assets/partners/nutrien-ag-solutions-logo.png'
import crtLogo from '@/assets/partners/crt-logo.png'

export function WhereToBuyPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-5xl font-semibold tracking-tight text-[#2b1a12] text-center">
        Where to Buy
      </h1>

      <p className="mt-8 text-xl text-center text-[#2b1a12]/80">
        Sandy Bryant’s Mixtures® is supplied exclusively through the Nutrien Ag Solutions and CRT store network.
      </p>

      <p className="mt-6 text-lg text-center text-[#2b1a12]/75">
        If your local store does not currently stock the range, ask them to order it in for you.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        {/* Nutrien */}
        <a
          href="https://www.nutrienagsolutions.com.au/find-a-branch?"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <span className="flex items-center justify-center gap-3 rounded-xl border border-black/10 bg-white px-6 py-4 shadow-sm hover:shadow transition">
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

        {/* CRT */}
        <a
          href="https://crt.com.au/stores/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <span className="flex items-center justify-center gap-3 rounded-xl border border-black/10 bg-[#f4c400] px-6 py-4 shadow-sm hover:shadow transition">
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

      <p className="mt-10 text-base text-center text-[#2b1a12]/70">
        Sandy Bryant’s Mixtures® is not available through third-party wholesale or distribution channels.
      </p>
    </main>
  )
}
