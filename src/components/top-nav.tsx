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
    const base =
      'flex min-h-9 items-center justify-center rounded-full px-2 py-1.5 text-center text-[0.95rem] leading-tight transition sm:min-h-0 sm:px-3 sm:py-1.5 sm:text-left sm:text-sm'

    if (priority === 'primary') {
      return `${base} font-semibold text-[#2b1a12] hover:bg-white/60`
    }

    return `${base} text-[#2b1a12]/70 hover:bg-white/50 hover:text-[#2b1a12]`
  }

  return (
    <header className="no-print z-50 border-b border-black/10 bg-[#efe7d6]/95 backdrop-blur sm:sticky sm:top-0">
      <nav className="mx-auto flex max-w-6xl flex-col items-center gap-1.5 px-4 py-2 sm:flex-row sm:justify-between sm:gap-3 sm:py-3">
        <Link to="/" className="flex items-center justify-center gap-3 sm:justify-start">
          <img
            src={sandyBryantsLogo}
            alt="Sandy Bryant's Mixtures logo"
            className="h-20 w-auto object-contain sm:h-14"
          />
          <span className="hidden text-lg font-semibold tracking-tight text-[#2b1a12] sm:block">
            Sandy Bryant's Mixtures<span className="align-super text-[0.55em]">®</span>
          </span>
        </Link>

        <ul className="grid w-full grid-cols-3 gap-1.5 text-sm sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:justify-end sm:gap-4">
          {navLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={linkClass(item.priority)}
                activeProps={{
                  className: 'bg-white/70 text-[#2b1a12] shadow-sm',
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
