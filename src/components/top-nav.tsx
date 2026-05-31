import { Link } from '@tanstack/react-router'
import sandyBryantsLogo from '@/assets/brand/sandy-bryants-mixtures-logo.png'

import { navLinks } from '@/config/site'

export function TopNav() {
  const renderNavLabel = (label: string) => {
    if (label === 'Floater~Doser') {
      return (
        <>
          Floater~Doser<span className="align-super text-[0.6em]">®</span>
        </>
      )
    }

    return label
  }

  const linkClass = (priority: (typeof navLinks)[number]['priority'] | undefined) => {
    if (priority === 'primary') {
      return 'rounded-full px-3 py-1.5 font-semibold text-[#2b1a12] transition hover:bg-white/60'
    }

    return 'rounded-full px-3 py-1.5 text-[#2b1a12]/70 transition hover:bg-white/50 hover:text-[#2b1a12]'
  }

  return (
    <header className="no-print sticky top-0 z-50 border-b border-black/10 bg-[#efe7d6]/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
  <img
    src={sandyBryantsLogo}
    alt="Sandy Bryant’s Mixtures logo"
    className="h-14 w-auto object-contain"
  />
 <span className="hidden sm:block text-lg font-semibold tracking-tight text-[#2b1a12]">
  Sandy Bryant’s Mixtures<span className="align-super text-[0.55em]">®</span>
</span>
</Link>


        <ul className="flex flex-wrap items-center justify-end gap-4 text-sm">
          {navLinks.map((item) => (
            <li key={item.to}>
             <Link
  to={item.to}
  className={linkClass(item.priority)}
  activeProps={{
    className: 'rounded-full bg-white/70 px-3 py-1.5 text-[#2b1a12] shadow-sm',
  }}
>
  {renderNavLabel(item.label)}
</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
