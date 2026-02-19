import { Link } from '@tanstack/react-router'
import { Wheat } from 'lucide-react'

import { navLinks } from '@/config/site'

export function TopNav() {
  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Wheat className="h-5 w-5" aria-hidden="true" />
          <span>Sandy Bryant’s Mixtures®</span>
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-4 text-sm">
          {navLinks.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="hover:underline" activeProps={{ className: 'underline' }}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
