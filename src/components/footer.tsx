import wpcCrest from '@/assets/brand/westminster-pastoral-company-crest.png'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
        <div className="grid gap-4 text-center sm:grid-cols-3 sm:items-center sm:text-left">
          
          {/* Left */}
          <p className="font-medium text-[#2b1a12]/80">
            Sandy Bryant’s Mixtures®
          </p>

          {/* Centre */}
          <p className="sm:text-center">
            © {year} Westminster Pastoral Company. All rights reserved.
          </p>

          {/* Right */}
          <div className="flex justify-center sm:justify-end">
            <img
              src={wpcCrest}
              alt="Westminster Pastoral Company crest"
              className="h-16 w-auto object-contain opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
