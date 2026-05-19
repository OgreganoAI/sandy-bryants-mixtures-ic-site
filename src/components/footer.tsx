import wpcCrest from '@/assets/brand/westminster-pastoral-company-crest.png'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-black/10 bg-[#efe7d6]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 text-center sm:grid-cols-3 sm:items-center sm:text-left">
          {/* Left */}
          <div className="space-y-1">
            <p className="font-semibold tracking-wide text-[#2b1a12]">
              Sandy Bryant’s Mixtures®
            </p>

            <p className="text-xs text-[#2b1a12]/60">
              Practical livestock mineral supplementation
            </p>
          </div>

          {/* Centre */}
          <div className="text-sm text-[#2b1a12]/65 sm:text-center">
            © {year} Westminster Pastoral Company. All rights reserved.
          </div>

          {/* Right */}
          <div className="flex justify-center sm:justify-end">
           <img
  src={wpcCrest}
  alt="Westminster Pastoral Company crest"
  className="h-20 w-auto object-contain opacity-80 transition hover:opacity-100"
  loading="lazy"
/>
          </div>
        </div>
      </div>
    </footer>
  )
}