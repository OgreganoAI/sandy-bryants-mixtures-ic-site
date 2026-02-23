import { Link } from '@tanstack/react-router'
import sandyBryantsLogo from '@/assets/brand/sandy-bryants-mixtures-logo.png'

import { navLinks } from '@/config/site'

export function TopNav() {
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center">
          <img
            src={sandyBryantsLogo}
            alt="Sandy Bryant’s Mixtures logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <ul className="flex flex-wrap items-center justify-end gap-4 text-sm">
          {navLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="hover:underline"
                activeProps={{ className: 'underline' }}
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
