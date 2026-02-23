export function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-5xl font-semibold tracking-tight text-[#2b1a12] text-center">
        Contact
      </h1>

      <div className="mt-10 mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-[#2b1a12]/80">
        <p>
          For product availability, ordering, or local advice, please contact your nearest Nutrien Ag Solutions®
          branch or CRT store.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.nutrienagsolutions.com.au/find-a-branch?"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <span className="flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-4 shadow-sm hover:shadow transition">
              <span className="text-base font-semibold text-[#2b1a12]">
                Find a Nutrien Branch
              </span>
            </span>
          </a>

          <a
            href="https://crt.com.au/stores/"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <span className="flex items-center justify-center rounded-xl border border-black/10 bg-[#f4c400] px-6 py-4 shadow-sm hover:shadow transition">
              <span className="text-base font-semibold text-[#0b2b1a]">
                Find a CRT Store
              </span>
            </span>
          </a>
        </div>

        <div className="rounded-xl border border-black/10 bg-white/60 p-6">
          <h2 className="text-2xl font-semibold text-[#2b1a12]">General enquiries</h2>
          <p className="mt-3 text-base text-[#2b1a12]/75">
            If you have a general enquiry about Sandy Bryant’s Mixtures® (not related to store ordering), you can
            contact us via your local store team, who will direct the enquiry appropriately.
          </p>
        </div>

        <p className="text-base text-[#2b1a12]/70">
          Sandy Bryant’s Mixtures® is supplied exclusively through Nutrien Ag Solutions and CRT.
        </p>
      </div>
    </main>
  )
}
