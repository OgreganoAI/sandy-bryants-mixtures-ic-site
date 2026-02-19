import { Outlet } from '@tanstack/react-router'

import { Footer } from '@/components/footer'
import { TopNav } from '@/components/top-nav'

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopNav />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
