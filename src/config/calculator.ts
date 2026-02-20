export type CalculatorVariantId =
  | 'sheep-and-cattle-6.5-cu'
  | 'cattle-only-8.5-cu'
  | 'hard-country-cattle-travel-and-yard-9.5-cu'

export type AnimalType = 'cattle' | 'sheep'

export type CattleBand = {
  label: string
  minKg: number
  maxKg: number
  mlPerAnimal: number
  defaultIntervalWeeks: number
}

export type SheepRation = {
  id: 'lambs-hoggets' | 'adult-sheep' | 'rams'
  label: string
  mlPerAnimal: number
  note: string
}

export type CalculatorVariant = {
  id: CalculatorVariantId
  label: string
  copperMgL: 6.5 | 8.5 | 9.5
  cattleOnly: boolean
}

export const calculatorProduct = {
  id: 'sandy-bryants-mixtures',
  name: 'Sandy Bryant’s Mixtures®',
  variants: [
    {
      id: 'sheep-and-cattle-6.5-cu',
      label: 'Sheep & Cattle – 6.5 Cu',
      copperMgL: 6.5,
      cattleOnly: false,
    },
    {
      id: 'cattle-only-8.5-cu',
      label: 'Cattle Only – 8.5 Cu',
      copperMgL: 8.5,
      cattleOnly: true,
    },
    {
      id: 'hard-country-cattle-travel-and-yard-9.5-cu',
      label: 'Hard Country Cattle, Travel & Yard – 9.5 Cu',
      copperMgL: 9.5,
      cattleOnly: true,
    },
  ] satisfies CalculatorVariant[],
}

export const cattleRationTable: CattleBand[] = [
  { label: '50-100', minKg: 50, maxKg: 100, mlPerAnimal: 15, defaultIntervalWeeks: 4 },
  { label: '101-150', minKg: 101, maxKg: 150, mlPerAnimal: 10, defaultIntervalWeeks: 4 },
  { label: '151-200', minKg: 151, maxKg: 200, mlPerAnimal: 20, defaultIntervalWeeks: 4 },
  { label: '201-250', minKg: 201, maxKg: 250, mlPerAnimal: 25, defaultIntervalWeeks: 5 },
  { label: '251-300', minKg: 251, maxKg: 300, mlPerAnimal: 30, defaultIntervalWeeks: 5 },
  { label: '301-350', minKg: 301, maxKg: 350, mlPerAnimal: 35, defaultIntervalWeeks: 5 },
  { label: '351-400', minKg: 351, maxKg: 400, mlPerAnimal: 40, defaultIntervalWeeks: 6 },
  { label: '401-450', minKg: 401, maxKg: 450, mlPerAnimal: 45, defaultIntervalWeeks: 6 },
  { label: '451-500', minKg: 451, maxKg: 500, mlPerAnimal: 55, defaultIntervalWeeks: 6 },
  { label: '501-600', minKg: 501, maxKg: 600, mlPerAnimal: 60, defaultIntervalWeeks: 6 },
  { label: '601-700', minKg: 601, maxKg: 700, mlPerAnimal: 65, defaultIntervalWeeks: 6 },
  { label: '701-800', minKg: 701, maxKg: 800, mlPerAnimal: 75, defaultIntervalWeeks: 6 },
  { label: '801-900', minKg: 801, maxKg: 900, mlPerAnimal: 85, defaultIntervalWeeks: 6 },
  { label: '901-999', minKg: 901, maxKg: 999, mlPerAnimal: 90, defaultIntervalWeeks: 6 },
]

export const sheepRationTable: SheepRation[] = [
  {
    id: 'lambs-hoggets',
    label: 'Lambs and hoggets',
    mlPerAnimal: 25,
    note: 'Suitable for growing lambs and hoggets.',
  },
  {
    id: 'adult-sheep',
    label: 'Adult sheep',
    mlPerAnimal: 35,
    note: 'Suitable for adult ewes and wethers.',
  },
  {
    id: 'rams',
    label: 'Rams',
    mlPerAnimal: 40,
    note: 'Suitable for breeding rams.',
  },
]

export const cattleClassWeights: Record<string, number> = {
  lactating: 550,
  dry: 450,
  growing: 350,
  bulls: 700,
  calves: 300,
  other: 0,
}

export const floaterMaxSupplementPerUnitL = 5
