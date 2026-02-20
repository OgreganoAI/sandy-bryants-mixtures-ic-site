import { useEffect, useMemo, useState } from 'react'
import { AlertCircle } from 'lucide-react'

import {
  calculatorProduct,
  cattleClassWeights,
  cattleRationTable,
  floaterMaxSupplementPerUnitL,
  sheepRationTable,
  type AnimalType,
  type CalculatorVariantId,
} from '@/config/calculator'

type MethodId = 'feed-ration' | 'tank-water' | 'inline-pump' | 'floater'

function getCattleRation(weightKg: number): { mlPerAnimal: number; defaultIntervalWeeks: number } | null {
  if (!Number.isFinite(weightKg)) return null
  const band = cattleRationTable.find((item) => weightKg >= item.minKg && weightKg <= item.maxKg)
  return band ? { mlPerAnimal: band.mlPerAnimal, defaultIntervalWeeks: band.defaultIntervalWeeks } : null
}

export function CalculatorPage() {
  useEffect(() => {
    document.title = 'Livestock Ration Calculator | Sandy Bryant’s Mixtures®'

    const metaDescription = document.querySelector('meta[name="description"]')
    const descriptionContent =
      'Use the Sandy Bryant’s Mixtures® calculator to estimate ration volumes for cattle, sheep, and Hard Country Cattle, Travel & Yard – 9.5 Cu supplementation plans.'

    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionContent)
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = descriptionContent
      document.head.appendChild(meta)
    }
  }, [])

  const [selectedVariant, setSelectedVariant] = useState<CalculatorVariantId>('sheep-and-cattle-6.5-cu')
  const [animalType, setAnimalType] = useState<AnimalType>('cattle')
  const [method, setMethod] = useState<MethodId>('feed-ration')
  const [groupName, setGroupName] = useState('')
  const [cattleClass, setCattleClass] = useState('')
  const [sheepClass, setSheepClass] = useState('adult-sheep')
  const [numberOfAnimals, setNumberOfAnimals] = useState('1')
  const [averageLiveweight, setAverageLiveweight] = useState('')
  const [repeatInterval, setRepeatInterval] = useState('6')
  const [tankVolumeL, setTankVolumeL] = useState('5000')
  const [tankDays, setTankDays] = useState('7')
  const [inlineWaterPerDayL, setInlineWaterPerDayL] = useState('8000')
  const [inlineDays, setInlineDays] = useState('7')

  const isSheep = animalType === 'sheep'
  const herdLabel = isSheep ? 'flock' : 'herd'
  const currentVariant = calculatorProduct.variants.find((variant) => variant.id === selectedVariant)

  const sheepVariantWarning =
    isSheep &&
    (selectedVariant === 'cattle-only-8.5-cu' ||
      selectedVariant === 'hard-country-cattle-travel-and-yard-9.5-cu')

  const handleAnimalTypeChange = (value: string) => {
    const next = value as AnimalType
    setAnimalType(next)
    if (next === 'sheep') {
      setAverageLiveweight('')
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

  const tankPlan = useMemo(() => {
    const volumeL = Math.max(1, parseFloat(tankVolumeL) || 1)
    const days = Math.max(1, parseInt(tankDays, 10) || 1)
    const totalL = calc.groupRationL
    const perDayL = totalL / days
    const mlPerLitreWater = (perDayL * 1000) / volumeL

    return {
      perDayL,
      mlPerLitreWater,
    }
  }, [tankVolumeL, tankDays, calc.groupRationL])

  const inlinePlan = useMemo(() => {
    const waterPerDayL = Math.max(1, parseFloat(inlineWaterPerDayL) || 1)
    const days = Math.max(1, parseInt(inlineDays, 10) || 1)
    const totalWaterL = waterPerDayL * days
    const totalMl = calc.groupRationL * 1000
    const mlPerLitreWater = totalMl / totalWaterL

    return {
      totalWaterL,
      mlPerLitreWater,
    }
  }, [inlineWaterPerDayL, inlineDays, calc.groupRationL])

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Livestock Ration Calculator</h1>
        <p className="text-muted-foreground">
          Sandy Bryant’s Mixtures® supplementation planning for cattle, sheep, and Hard Country Cattle, Travel & Yard – 9.5 Cu.
        </p>
      </header>

      <div className="rounded-lg border bg-white p-4 space-y-4">
        <h2 className="text-xl font-semibold">Product and variant</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm">
            <span className="font-medium">Product</span>
            <input
              className="w-full rounded-md border px-3 py-2 bg-muted/30"
              value={calculatorProduct.name}
              readOnly
            />
          </label>

          <label className="space-y-2 text-sm">
            <span className="font-medium">Variant</span>
            <select
              className="w-full rounded-md border px-3 py-2 bg-white"
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
              className="w-full rounded-md border px-3 py-2 bg-white"
              value={animalType}
              onChange={(event) => handleAnimalTypeChange(event.target.value)}
            >
              <option value="cattle">Cattle</option>
              <option value="sheep">Sheep</option>
            </select>
          </label>
        </div>

        {currentVariant && (
          <div className="rounded-md border border-amber-300 bg-amber-50 p-3 text-sm space-y-1">
            <p className="font-semibold">{currentVariant.label}</p>
            <p>
              {currentVariant.id === 'sheep-and-cattle-6.5-cu' && 'Suitable for cattle and sheep. 6.5 mg/L copper.'}
              {currentVariant.id === 'cattle-only-8.5-cu' && 'Suitable for cattle only. 8.5 mg/L copper.'}
              {currentVariant.id === 'hard-country-cattle-travel-and-yard-9.5-cu' &&
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

      <div className="rounded-lg border bg-white p-4 space-y-4">
        <h2 className="text-xl font-semibold">Animal details</h2>

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

          <label className="space-y-2 text-sm">
            <span className="font-medium">Repeat interval</span>
            <select
              className="w-full rounded-md border px-3 py-2 bg-white"
              value={repeatInterval}
              onChange={(event) => setRepeatInterval(event.target.value)}
            >
              <option value="4">4 weeks</option>
              <option value="5">5 weeks</option>
              <option value="6">6 weeks</option>
            </select>
          </label>
        </div>

        {calc.weightWarning && (
          <p className="flex items-start gap-2 rounded-md border border-red-300 bg-red-50 p-3 text-sm text-red-700">
            <AlertCircle className="h-4 w-4 mt-0.5" aria-hidden="true" />
            <span>{calc.weightWarning}</span>
          </p>
        )}

        {calc.sheepNote && <p className="text-sm text-muted-foreground">{calc.sheepNote}</p>}

        <p className="text-sm text-muted-foreground">
          Label guidance is generally 4 to 6 week intervals. The table default for the selected liveweight is {calc.defaultIntervalWeeks} weeks.
        </p>
      </div>

      <div className="rounded-lg border bg-white p-4 space-y-4">
        <h2 className="text-xl font-semibold">Rationing method</h2>
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
            className={`rounded-md border px-3 py-2 text-sm ${method === 'tank-water' ? 'bg-primary text-primary-foreground' : 'bg-white'}`}
            onClick={() => setMethod('tank-water')}
          >
            Tank-based water supplementation
          </button>
          <button
            type="button"
            className={`rounded-md border px-3 py-2 text-sm ${method === 'inline-pump' ? 'bg-primary text-primary-foreground' : 'bg-white'}`}
            onClick={() => setMethod('inline-pump')}
          >
            Inline pump rationing
          </button>
          <button
            type="button"
            className={`rounded-md border px-3 py-2 text-sm ${method === 'floater' ? 'bg-primary text-primary-foreground' : 'bg-white'}`}
            onClick={() => setMethod('floater')}
          >
            Floater~Doser®
          </button>
        </div>

        {method === 'feed-ration' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b py-2 text-sm">
              <span>Ration per animal</span>
              <strong>{calc.rationPerAnimalMl || 0} mL</strong>
            </div>
            <div className="flex items-center justify-between border-b py-2 text-sm">
              <span>{herdLabel[0].toUpperCase() + herdLabel.slice(1)} ration per event</span>
              <strong>{calc.groupRationL.toFixed(2)} L</strong>
            </div>
          </div>
        )}

        {method === 'tank-water' && (
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="font-medium">Tank volume (L)</span>
                <input
                  type="number"
                  min={1}
                  className="w-full rounded-md border px-3 py-2"
                  value={tankVolumeL}
                  onChange={(event) => setTankVolumeL(event.target.value)}
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="font-medium">Days to deliver one ration event</span>
                <input
                  type="number"
                  min={1}
                  className="w-full rounded-md border px-3 py-2"
                  value={tankDays}
                  onChange={(event) => setTankDays(event.target.value)}
                />
              </label>
            </div>
            <p className="text-sm">
              Volume required per day: <strong>{tankPlan.perDayL.toFixed(2)} L</strong>
            </p>
            <p className="text-sm">
              Mixing guide: <strong>{tankPlan.mlPerLitreWater.toFixed(2)} mL per litre</strong> of tank water.
            </p>
          </div>
        )}

        {method === 'inline-pump' && (
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm">
                <span className="font-medium">Water flow per day (L)</span>
                <input
                  type="number"
                  min={1}
                  className="w-full rounded-md border px-3 py-2"
                  value={inlineWaterPerDayL}
                  onChange={(event) => setInlineWaterPerDayL(event.target.value)}
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="font-medium">Days to deliver one ration event</span>
                <input
                  type="number"
                  min={1}
                  className="w-full rounded-md border px-3 py-2"
                  value={inlineDays}
                  onChange={(event) => setInlineDays(event.target.value)}
                />
              </label>
            </div>
            <p className="text-sm">
              Total water in period: <strong>{inlinePlan.totalWaterL.toFixed(0)} L</strong>
            </p>
            <p className="text-sm">
              Inline target concentration: <strong>{inlinePlan.mlPerLitreWater.toFixed(4)} mL per litre</strong> of water.
            </p>
          </div>
        )}

        {method === 'floater' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b py-2 text-sm">
              <span>Total volume required per ration event</span>
              <strong>{floaterGuidance.amountL} L</strong>
            </div>
            <p className="text-sm text-muted-foreground whitespace-pre-line">{floaterGuidance.text}</p>
          </div>
        )}
      </div>
    </section>
  )
}
