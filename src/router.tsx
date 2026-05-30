import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'

import { SiteLayout } from '@/components/site-layout'
import { CalculatorPage } from '@/pages/calculator-page'
import { ContactPage } from '@/pages/contact-page'
import { HomePage } from '@/pages/home-page'
import { OurStoryPage } from '@/pages/our-story-page'
import { ProductsPage } from '@/pages/products-page'
import { WhereToBuyPage } from '@/pages/where-to-buy-page'
import { FloaterDoserPage } from '@/pages/floater-doser-page'
import { FaqPage } from '@/pages/faq-page'
import { WhySandyBryantsPage } from '@/pages/why-sandy-bryants-page'

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/faq',
  component: FaqPage,
})

const whySandyBryantsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/why-sandy-bryants',
  component: WhySandyBryantsPage,
})

const rootRoute = createRootRoute({
  component: SiteLayout,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const ourStoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/our-story',
  component: OurStoryPage,
})

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: ProductsPage,
})

const floaterDoserRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/floater-doser',
  component: FloaterDoserPage,
})

const calculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/calculator',
  component: CalculatorPage,
})

const whereToBuyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/where-to-buy',
  component: WhereToBuyPage,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
})

const routeTree = rootRoute.addChildren([
  homeRoute,
  ourStoryRoute,
  productsRoute,
  calculatorRoute,
  whereToBuyRoute,
  floaterDoserRoute,
  contactRoute,
  faqRoute,
  whySandyBryantsRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
