import { Link } from '@tanstack/react-router'
import sandyBryantsLogo from '@/assets/brand/sandy-bryants-mixtures-logo.png'

import { navLinks } from '@/config/site'

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#efe7d6]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
  <img
    src={sandyBryantsLogo}
    alt="Sandy Bryant’s Mixtures logo"
    className="h-14 w-auto object-contain"
  />
  <span className="hidden sm:block text-lg font-semibold tracking-tight text-[#2b1a12]">
    Sandy Bryant’s Mixtures®
  </span>
</Link>


        <ul className="flex flex-wrap items-center justify-end gap-4 text-sm">
          {navLinks.map((item) => (
            <li key={item.to}>
             <Link
  to={item.to}
  className="rounded-full px-3 py-1.5 text-[#2b1a12]/75 transition hover:bg-white/50 hover:text-[#2b1a12]"
  activeProps={{
    className: 'rounded-full bg-white/70 px-3 py-1.5 text-[#2b1a12] shadow-sm',
  }}
>
  {item.label}
</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
