import { Link } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import sheepCattleLabel from '@/assets/labels/Sheep & Cattle Light Blue.png'
import cattleOnlyLabel from '@/assets/labels/Cattle Only Green .png'
import hardCountryLabel from '@/assets/labels/Hard Country Cattle Maroon.png'

const products = [
  {
    name: 'Sheep & Cattle',
    description: 'Balanced copper formulation suitable for both cattle and sheep (suitable for all ruminants).',
    copperText: '6.5 copper variant',
    accentClass: 'accent-blue',
    variantId: 'sheep-and-cattle-6.5-cu',
    imageSrc: sheepCattleLabel,
  },
  {
    name: 'Cattle Only',
    description: 'Higher copper formulation for cattle-only systems.',
    copperText: '8.5 copper variant',
    accentClass: 'accent-green',
    variantId: 'cattle-only-8.5-cu',
    imageSrc: cattleOnlyLabel,
  },
  {
    name: 'Hard Country Cattle, Travel & Yard',
    description: 'Elevated copper formulation for transport, yarding, and hard-country cattle.',
    copperText: '9.5 copper variant',
    accentClass: 'accent-maroon',
    variantId: 'hard-country-cattle-travel-yard-9.5-cu',
    imageSrc: hardCountryLabel,
  },
]

export function ProductsPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Products</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <Card key={product.name} className={`h-full ${product.accentClass} accent-card flex flex-col`}>
            <CardHeader>
              <img
                src={product.imageSrc}
                alt={product.name}
                className="mx-auto w-full max-w-[240px] rounded-lg border border-black/10 shadow-sm"
              />
              <span className="accent-badge w-fit rounded-full px-2.5 py-1 text-xs font-semibold">{product.copperText}</span>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col gap-2 sm:flex-row">
              <Button asChild className="w-full sm:flex-1">
                <a href={`/calculator?variant=${product.variantId}`}>Use the Calculator</a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:flex-1">
                <Link to="/where-to-buy">Where to Buy</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
