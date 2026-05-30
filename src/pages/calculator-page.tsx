import { useEffect, useMemo, useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { Link, useLocation } from '@tanstack/react-router'

import {
  calculatorProduct,
  cattleClassWeights,
  cattleRationTable,
  floaterMaxSupplementPerUnitL,
  sheepRationTable,
  type AnimalType,
  type CalculatorVariantId,
} from '@/config/calculator'

type MethodId = 'feed-ration' | 'floater'
const DEFAULT_VARIANT_ID: CalculatorVariantId = 'sheep-and-cattle-6.5-cu'

function renderFloaterDoserText(text: string) {
  return text.split(/(Floater~Doser®)/g).map((part, index) => {
    if (part === 'Floater~Doser®') {
      return (
        <span key={index}>
          Floater~Doser<span className="align-super text-[0.6em]">®</span>
        </span>
      )
    }

    return part
  })
}

function SandyBryantsMixturesName() {
  return (
    <>
      Sandy Bryant’s Mixtures<span className="align-super text-[0.6em]">®</span>
    </>
  )
}

function getCattleRation(weightKg: number): { mlPerAnimal: number; defaultIntervalWeeks: number } | null {
  if (!Number.isFinite(weightKg)) return null
  const band = cattleRationTable.find((item) => weightKg >= item.minKg && weightKg <= item.maxKg)
  return band ? { mlPerAnimal: band.mlPerAnimal, defaultIntervalWeeks: band.defaultIntervalWeeks } : null
}

export function CalculatorPage() {
  const location = useLocation()

  useEffect(() => {
    document.title = 'Livestock Ration Calculator | Sandy Bryant’s Mixtures®'

    const metaDescription = document.querySelector('meta[name="description"]')
    const descriptionContent =
      'Estimate livestock mineral supplementation volumes for cattle and sheep using Sandy Bryant’s Mixtures® practical ration calculator.'

    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionContent)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = descriptionContent
      document.head.appendChild(meta)
    }
  }, [])

  const [selectedVariant, setSelectedVariant] = useState<CalculatorVariantId>(DEFAULT_VARIANT_ID)
  const [animalType, setAnimalType] = useState<AnimalType>('cattle')
  const [method, setMethod] = useState<MethodId>('feed-ration')
  const [groupName, setGroupName] = useState('')
  const [cattleClass, setCattleClass] = useState('')
  const [sheepClass, setSheepClass] = useState('adult-sheep')
  const [numberOfAnimals, setNumberOfAnimals] = useState('1')
  const [averageLiveweight, setAverageLiveweight] = useState('')

  const isSheep = animalType === 'sheep'
const isSixWeekOnlyAnimal = animalType === 'sheep'
  const herdLabel = isSheep ? 'flock' : 'herd'
  const currentVariant = calculatorProduct.variants.find((variant) => variant.id === selectedVariant)
  const variantAccentClass =
    selectedVariant === 'sheep-and-cattle-6.5-cu'
      ? 'accent-blue'
      : selectedVariant === 'cattle-only-8.5-cu'
        ? 'accent-green'
        : 'accent-maroon'

  const sheepVariantWarning =
    isSheep &&
    (selectedVariant === 'cattle-only-8.5-cu' ||
      selectedVariant === 'hard-country-cattle-travel-yard-9.5-cu')

  useEffect(() => {
    const params = new URLSearchParams(location.searchStr)
    const paramVariant = params.get('variant')
    const hasVariant = calculatorProduct.variants.some((variant) => variant.id === paramVariant)
    const nextVariant = hasVariant ? (paramVariant as CalculatorVariantId) : DEFAULT_VARIANT_ID
    const paramMethod = params.get('method')
    setSelectedVariant(nextVariant)
    if (paramMethod === 'feed-ration' || paramMethod === 'floater') {
      setMethod(paramMethod)
    }
  }, [location.searchStr])

  const handleAnimalTypeChange = (value: string) => {
  const next = value as AnimalType
  setAnimalType(next)

  if (next === 'sheep' ) {
    setAverageLiveweight('')
    setSelectedVariant('sheep-and-cattle-6.5-cu')
  }
}

  const handleCattleClassChange = (value: string) => {
    setCattleClass(value)
    if (!averageLiveweight) {
      const typicalWeight = cattleClassWeights[value]
      if (typicalWeight > 0) {
        setAverageLiveweight(String(typicalWeight))
      }
    }
  }

  const calc = useMemo(() => {
    const animals = Math.max(1, parseInt(numberOfAnimals, 10) || 1)
    let rationPerAnimalMl = 0
    let defaultIntervalWeeks = 6
    let weightWarning = ''
    let sheepNote = ''

    if (isSheep) {
      const sheep = sheepRationTable.find((item) => item.id === sheepClass)
      if (sheep) {
        rationPerAnimalMl = sheep.mlPerAnimal
        sheepNote = sheep.note
      }
    } else {
      const weightKg = parseFloat(averageLiveweight) || 0
      if (weightKg < 50 || weightKg > 999) {
        weightWarning = 'Average liveweight must be between 50 and 999 kg for this ration table.'
      } else {
        const ration = getCattleRation(weightKg)
        if (ration) {
          rationPerAnimalMl = ration.mlPerAnimal
          defaultIntervalWeeks = ration.defaultIntervalWeeks
        }
      }
    }

    const groupRationMl = rationPerAnimalMl * animals
    const groupRationL = groupRationMl / 1000

    return {
      rationPerAnimalMl,
      defaultIntervalWeeks,
      weightWarning,
      sheepNote,
      groupRationL,
    }
  }, [numberOfAnimals, isSheep, sheepClass, averageLiveweight])

  const floaterGuidance = useMemo(() => {
    const totalL = calc.groupRationL

    if (totalL <= 0 || !Number.isFinite(totalL)) {
      return {
        amountL: '0.00',
        text: 'Enter animal details to view Floater~Doser® guidance.',
      }
    }

    const fills = Math.max(1, Math.ceil(totalL / floaterMaxSupplementPerUnitL))
    const perFillL = totalL / fills

    if (totalL <= floaterMaxSupplementPerUnitL) {
      return {
        amountL: totalL.toFixed(2),
        text: `This ${herdLabel} requires ${totalL.toFixed(2)} L per ration event. Run this through one Floater~Doser® over 2 to 3 days. Top up with clean water to the marked level so the ${herdLabel} shares intake.`,
      }
    }

    return {
      amountL: totalL.toFixed(2),
      text:
        `Total supplement required per ration event: ${totalL.toFixed(2)} L.\n` +
        `Split across ${fills} Floater~Doser® fills or units, with ${perFillL.toFixed(2)} L of supplement in each.\n` +
        'Top up the Floater~Doser® with clean water to the marked level.\n' +
        'Use either repeated refills over 2 to 3 days or multiple Floater~Dosers at one time.',
    }
  }, [calc.groupRationL, herdLabel])

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Livestock Ration Calculator</h1>
        <p className="text-muted-foreground">
          Sandy Bryant’s Mixtures<span className="align-super text-[0.6em]">®</span> supplementation planning for cattle, sheep, and Hard Country Cattle, Travel & Yard – 9.5 Cu.
        </p>
      </header>

      <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur-sm space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-[#2b1a12]">Product and variant</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="font-medium">Product</span>
            <span className="flex min-h-10 w-full items-center rounded-md border bg-muted/30 px-3 py-2">
              <SandyBryantsMixturesName />
            </span>
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-medium">Variant</span>
            <select
              className={`w-full rounded-md border px-3 py-2 bg-white ${variantAccentClass} accent-focus`}
              value={selectedVariant}
              onChange={(event) => setSelectedVariant(event.target.value as CalculatorVariantId)}
            >
              {calculatorProduct.variants.map((variant) => (
                <option key={variant.id} value={variant.id}>
                  {variant.label}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-medium">Animal type</span>
            <select
              className={`w-full rounded-md border px-3 py-2 bg-white ${variantAccentClass} accent-focus`}
              value={animalType}
              onChange={(event) => handleAnimalTypeChange(event.target.value)}
            >
              <option value="cattle">Cattle</option>
              <option value="sheep">Sheep</option>
            </select>
          </label>
        </div>

        {currentVariant && (
          <div className={`rounded-md border bg-amber-50 p-3 text-sm space-y-1 ${variantAccentClass} accent-card`}>
            <p className="font-semibold" style={{ color: 'var(--accent-color)' }}>
              {currentVariant.label}
            </p>
            <p>
              {currentVariant.id === 'sheep-and-cattle-6.5-cu' && 'Suitable for cattle and sheep (suitable for all ruminants). 6.5 mg/L copper.'}
              {currentVariant.id === 'cattle-only-8.5-cu' && 'Suitable for cattle only. 8.5 mg/L copper.'}
              {currentVariant.id === 'hard-country-cattle-travel-yard-9.5-cu' &&
                'Suitable for cattle only. 9.5 mg/L copper.'}
            </p>
          </div>
        )}

        {sheepVariantWarning && (
          <p className="rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">
            This variant is for cattle only. Do not use in sheep.
          </p>
        )}
      </div>

      <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur-sm space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-[#2b1a12]">Animal details</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="font-medium">Group name</span>
            <input
              className="w-full rounded-md border px-3 py-2"
              placeholder={isSheep ? 'Example: Autumn ewes' : 'Example: Weaners'}
              value={groupName}
              onChange={(event) => setGroupName(event.target.value)}
            />
          </label>

          {!isSheep ? (
            <label className="space-y-2 text-sm">
              <span className="font-medium">Class</span>
              <select
                className="w-full rounded-md border px-3 py-2 bg-white"
                value={cattleClass}
                onChange={(event) => handleCattleClassChange(event.target.value)}
              >
                <option value="">Select class</option>
                <option value="lactating">Lactating cows</option>
                <option value="dry">Dry cows and heifers</option>
                <option value="growing">Growing stores and yearlings</option>
                <option value="bulls">Bulls</option>
                <option value="calves">Calves and weaners</option>
                <option value="other">Other or custom</option>
              </select>
            </label>
          ) : (
            <label className="space-y-2 text-sm">
              <span className="font-medium">Class</span>
              <select
                className="w-full rounded-md border px-3 py-2 bg-white"
                value={sheepClass}
                onChange={(event) => setSheepClass(event.target.value)}
              >
                {sheepRationTable.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
          )}

          <label className="space-y-2 text-sm">
            <span className="font-medium">Number of animals</span>
            <input
              type="number"
              min={1}
              className="w-full rounded-md border px-3 py-2"
              value={numberOfAnimals}
              onChange={(event) => setNumberOfAnimals(event.target.value)}
            />
          </label>

          {!isSheep ? (
            <label className="space-y-2 text-sm">
              <span className="font-medium">Average liveweight (kg)</span>
              <input
                type="number"
                min={50}
                max={999}
                className="w-full rounded-md border px-3 py-2"
                placeholder="Example: 450"
                value={averageLiveweight}
                onChange={(event) => setAverageLiveweight(event.target.value)}
              />
            </label>
          ) : (
            <label className="space-y-2 text-sm">
              <span className="font-medium">Average liveweight</span>
              <input
                className="w-full rounded-md border px-3 py-2 bg-muted/30"
                value="Not used for sheep calculations"
                readOnly
              />
            </label>
          )}

      
        </div>

        {calc.weightWarning && (
          <p className="flex items-start gap-2 rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">
            <AlertCircle className="h-4 w-4 mt-0.5" aria-hidden="true" />
            <span>{calc.weightWarning}</span>
          </p>
        )}

        {calc.sheepNote && <p className="text-sm text-muted-foreground">{calc.sheepNote}</p>}

       <div
  className={`rounded-lg border px-4 py-3 text-sm leading-[1.7] ${
    isSixWeekOnlyAnimal
      ? 'border-[#c89b2c]/30 bg-[#fff8e8] text-[#7a5a12]'
      : 'border-black/10 bg-white/50 text-[#2b1a12]/75'
  }`}
>
  {isSixWeekOnlyAnimal ? (
    <p>
      Do not provide serving of product to sheep more than once every 6 (six) weeks.
    </p>
  ) : (
    <p>
      Typical supplementation interval: 4 to 6 weeks depending on class,
      seasonal conditions, and management requirements.
    </p>
  )}
</div>
        </div>

      <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur-sm space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-[#2b1a12]">Rationing method</h2>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className={`rounded-md border px-3 py-2 text-sm ${method === 'feed-ration' ? 'bg-primary text-primary-foreground' : 'bg-white'}`}
            onClick={() => setMethod('feed-ration')}
          >
            Feed ration per head
          </button>
          <button
            type="button"
            className={`rounded-md border px-3 py-2 text-sm ${method === 'floater' ? 'bg-primary text-primary-foreground' : 'bg-white'}`}
            onClick={() => setMethod('floater')}
          >
            Floater~Doser<span className="align-super text-[0.6em]">®</span>
          </button>
        </div>

<p className="mt-3 text-sm text-[#2b1a12]/70">
  <Link
    to="/floater-doser"
    className="font-medium text-[#2f6db3] underline decoration-[#2f6db3]/30 underline-offset-4 hover:text-[#1f4f86] hover:decoration-[#1f4f86]"
  >
    Learn more about the Floater~Doser<span className="align-super text-[0.6em]">®</span> delivery system →
  </Link>
</p>
        {method === 'feed-ration' && (
          <div className="space-y-3 rounded-xl border border-black/10 bg-white/60 p-4 shadow-sm">
            <p className="text-sm font-semibold text-[#2b1a12]">Feed ration result</p>
            <div className={`flex items-center justify-between rounded-md px-3 py-2 text-sm ${variantAccentClass} accent-card`}>
              <span>Ration per animal</span>
              <strong className="accent-badge rounded px-2 py-1">{calc.rationPerAnimalMl || 0} mL</strong>
            </div>
            <div className={`flex items-center justify-between rounded-md px-3 py-2 text-sm ${variantAccentClass} accent-card`}>
              <span>Supplement required per ration event</span>
              <strong className="accent-badge rounded px-2 py-1">{calc.groupRationL.toFixed(2)} L</strong>
            </div>
          </div>
        )}

        {method === 'floater' && (
          <div className="space-y-3 rounded-xl border border-black/10 bg-white/60 p-4 shadow-sm">
            <p className="text-sm font-semibold text-[#2b1a12]">Floater~Doser<span className="align-super text-[0.6em]">®</span> result</p>
            <div className={`flex items-center justify-between rounded-md px-3 py-2 text-sm ${variantAccentClass} accent-card`}>
              <span>Ration per animal</span>
              <strong className="accent-badge rounded px-2 py-1">{calc.rationPerAnimalMl || 0} mL</strong>
            </div>
            <div className={`flex items-center justify-between rounded-md px-3 py-2 text-sm ${variantAccentClass} accent-card`}>
              <span>Supplement required per ration event</span>
              <strong className="accent-badge rounded px-2 py-1">{floaterGuidance.amountL} L</strong>
            </div>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {renderFloaterDoserText(floaterGuidance.text)}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
