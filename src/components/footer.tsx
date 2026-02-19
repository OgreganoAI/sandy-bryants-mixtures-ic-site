import { Link } from '@tanstack/react-router'

import { navLinks } from '@/config/site'

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Sandy Bryant’s Mixtures®</p>
        <ul className="flex flex-wrap gap-4">
          {navLinks.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
