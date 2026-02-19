import { useState, useMemo, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { productsConfig } from '@/config/products';
import NextPageLink from '@/components/NextPageLink';

/**
 * Exact cattle ration table with 14 weight bands (50–999 kg).
 * No scaling applied - direct lookup only.
 */
type CattleBand = {
  label: string;
  minKg: number;
  maxKg: number;
  mlPerAnimal: number;
  defaultIntervalWeeks: number;
};

const cattleRationTable: CattleBand[] = [
  { label: "50–100",  minKg: 50,  maxKg: 100,  mlPerAnimal: 15, defaultIntervalWeeks: 4 },
  { label: "101–150", minKg: 101, maxKg: 150, mlPerAnimal: 10, defaultIntervalWeeks: 4 },
  { label: "151–200", minKg: 151, maxKg: 200, mlPerAnimal: 20, defaultIntervalWeeks: 4 },
  { label: "201–250", minKg: 201, maxKg: 250, mlPerAnimal: 25, defaultIntervalWeeks: 5 },
  { label: "251–300", minKg: 251, maxKg: 300, mlPerAnimal: 30, defaultIntervalWeeks: 5 },
  { label: "301–350", minKg: 301, maxKg: 350, mlPerAnimal: 35, defaultIntervalWeeks: 5 },
  { label: "351–400", minKg: 351, maxKg: 400, mlPerAnimal: 40, defaultIntervalWeeks: 6 },
  { label: "401–450", minKg: 401, maxKg: 450, mlPerAnimal: 45, defaultIntervalWeeks: 6 },
  { label: "451–500", minKg: 451, maxKg: 500, mlPerAnimal: 55, defaultIntervalWeeks: 6 },
  { label: "501–600", minKg: 501, maxKg: 600, mlPerAnimal: 60, defaultIntervalWeeks: 6 },
  { label: "601–700", minKg: 601, maxKg: 700, mlPerAnimal: 65, defaultIntervalWeeks: 6 },
  { label: "701–800", minKg: 701, maxKg: 800, mlPerAnimal: 75, defaultIntervalWeeks: 6 },
  { label: "801–900", minKg: 801, maxKg: 900, mlPerAnimal: 85, defaultIntervalWeeks: 6 },
  { label: "901–999", minKg: 901, maxKg: 999, mlPerAnimal: 90, defaultIntervalWeeks: 6 },
];

/**
 * Helper function to get cattle ration based on weight using inclusive min/max lookups.
 * Returns mlPerAnimal and defaultIntervalWeeks, or null if weight is outside 50–999 kg range.
 */
function getCattleRation(weightKg: number): { mlPerAnimal: number; defaultIntervalWeeks: number } | null {
  if (!Number.isFinite(weightKg)) return null;
  const band = cattleRationTable.find(b => weightKg >= b.minKg && weightKg <= b.maxKg);
  return band ? { mlPerAnimal: band.mlPerAnimal, defaultIntervalWeeks: band.defaultIntervalWeeks } : null;
}

// Sheep ration table
type SheepRation = {
  label: string;
  mlPerAnimal: number;
  note: string;
};

const sheepRationTable: Record<string, SheepRation> = {
  'lambs-hoggets': {
    label: 'Lambs & hoggets',
    mlPerAnimal: 25,
    note: 'Suitable for growing lambs and hoggets',
  },
  'adult-sheep': {
    label: 'Adult sheep',
    mlPerAnimal: 35,
    note: 'Suitable for adult ewes and wethers',
  },
  'rams': {
    label: 'Rams',
    mlPerAnimal: 40,
    note: 'Suitable for breeding rams',
  },
};

const CATTLE_CLASS_WEIGHTS: Record<string, number> = {
  'lactating': 550,
  'dry': 450,
  'growing': 350,
  'bulls': 700,
  'calves': 300,
  'other': 0,
};

const FLOATER_MAX_SUPPLEMENT_PER_DOSER_L = 5;

export default function CalculatorPage() {
  // SEO metadata setup
  useEffect(() => {
    document.title = "Livestock Mineral Ration Calculator | Mighty-Min UK";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionContent = "Use the Mighty-Min® calculator to estimate mineral ration volumes for groups of cattle and sheep. Supports voluntary intake planning based on liveweight and animal numbers.";
    
    if (metaDescription) {
      metaDescription.setAttribute('content', descriptionContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = descriptionContent;
      document.head.appendChild(meta);
    }
  }, []);

  const [country, setCountry] = useState<string>('uk');
  const [selectedProductId, setSelectedProductId] = useState<string>(productsConfig[0]?.id || '');
  const [selectedVariantId, setSelectedVariantId] = useState<string>(productsConfig[0]?.variants[0]?.id || '');
  const [selectedDrumLitres, setSelectedDrumLitres] = useState<number>(productsConfig[0]?.variants[0]?.drums[0]?.litres || 5);
  const [animalType, setAnimalType] = useState<string>('cattle');
  
  // Single group state for cattle
  const [groupName, setGroupName] = useState<string>('');
  const [cattleClass, setCattleClass] = useState<string>('');
  const [numberOfAnimals, setNumberOfAnimals] = useState<string>('1');
  const [averageLiveweight, setAverageLiveweight] = useState<string>('');
  
  // Single group state for sheep
  const [sheepClass, setSheepClass] = useState<string>('adult-sheep');
  
  const [repeatInterval, setRepeatInterval] = useState<string>('6');

  // Get current product and variant
  const currentProduct = productsConfig.find(p => p.id === selectedProductId);
  const currentVariant = currentProduct?.variants.find(v => v.id === selectedVariantId);
  const currentDrum = currentVariant?.drums.find(d => d.litres === selectedDrumLitres);

  const showCopperWarning = selectedVariantId === '8.5';

  // Handle product change
  const handleProductChange = (productId: string) => {
    setSelectedProductId(productId);
    const product = productsConfig.find(p => p.id === productId);
    if (product && product.variants.length > 0) {
      setSelectedVariantId(product.variants[0].id);
      if (product.variants[0].drums.length > 0) {
        setSelectedDrumLitres(product.variants[0].drums[0].litres);
      }
    }
  };

  // Handle variant change
  const handleVariantChange = (variantId: string) => {
    setSelectedVariantId(variantId);
    const variant = currentProduct?.variants.find(v => v.id === variantId);
    if (variant && variant.drums.length > 0) {
      setSelectedDrumLitres(variant.drums[0].litres);
    }
  };

  // Calculate derived values
  const calculatedValues = useMemo(() => {
    // Parse numberOfAnimals, treat blank or 0 as 1
    const numAnimals = Math.max(1, parseInt(numberOfAnimals) || 1);
    
    let rationPerAnimalMl = 0;
    let weightWarning = '';
    let sheepNote = '';
    
    if (animalType === 'cattle') {
      const weightKg = parseFloat(averageLiveweight) || 0;
      
      if (weightKg < 50 || weightKg > 999) {
        weightWarning = 'Weight must be between 50-999 kg for cattle ration calculations.';
      } else {
        const ration = getCattleRation(weightKg);
        if (ration) {
          rationPerAnimalMl = ration.mlPerAnimal;
        }
      }
    } else if (animalType === 'sheep') {
      const sheepRation = sheepRationTable[sheepClass];
      if (sheepRation) {
        rationPerAnimalMl = sheepRation.mlPerAnimal;
        sheepNote = sheepRation.note;
      }
    }
    
    // Calculate group ration
    const groupRationMl = rationPerAnimalMl * numAnimals;
    const groupRationL = groupRationMl / 1000;
    
    // Calculate totals
    const totalAmountPerRationEventL = groupRationL;
    
    return {
      rationPerAnimalMl,
      groupRationMl,
      groupRationL: groupRationL.toFixed(2),
      totalAmountPerRationEventL: totalAmountPerRationEventL.toFixed(2),
      weightWarning,
      sheepNote,
      numAnimals,
    };
  }, [animalType, numberOfAnimals, averageLiveweight, cattleClass, sheepClass]);

  // Calculate Floater~Doser guidance
  const floaterGuidance = useMemo(() => {
    const mobAmountL = parseFloat(calculatedValues.totalAmountPerRationEventL);
    const groupTerm = animalType === 'cattle' ? 'herd' : 'flock';
    
    if (mobAmountL <= 0 || !Number.isFinite(mobAmountL)) {
      return {
        amountL: '0.00',
        text: 'Enter animals and weights above to see Floater~Doser guidance.',
      };
    }
    
    const floaterFills = Math.max(1, Math.ceil(mobAmountL / FLOATER_MAX_SUPPLEMENT_PER_DOSER_L));
    const supplementPerFillL = mobAmountL / floaterFills;
    
    if (mobAmountL <= FLOATER_MAX_SUPPLEMENT_PER_DOSER_L) {
      return {
        amountL: mobAmountL.toFixed(2),
        text: `This ${groupTerm} requires ${mobAmountL.toFixed(2)} L of supplement per ration event. Run this through a single Floater~Doser over 2–3 days. Top up the Floater~Doser with clean water to the level marked on the label so the ${groupTerm} shares the intake.`,
      };
    } else {
      return {
        amountL: mobAmountL.toFixed(2),
        text: `This ${groupTerm} requires ${mobAmountL.toFixed(2)} L of supplement per ration event, which is more than 5 L. Split this across ${floaterFills} Floater~Doser fills or units, each with approximately ${supplementPerFillL.toFixed(2)} L of Mighty‑Min®. You can either refill a single FloaterDoser ${floaterFills} times over 2–3 days, or use **${floaterFills} FloaterDosers** in separate troughs at the same time. In every case, top up each Floater~Doser with clean water to the level marked on the label so the ${groupTerm} shares the intake.`,
      };
    }
  }, [calculatedValues.totalAmountPerRationEventL, animalType]);

  // Calculate pricing
  const pricingValues = useMemo(() => {
    if (country !== 'uk' || !currentDrum?.priceGBP) {
      return null;
    }

    const pricePerDrum = currentDrum.priceGBP;
    const pricePerL = pricePerDrum / currentDrum.litres;
    const totalAmountL = parseFloat(calculatedValues.totalAmountPerRationEventL);
    const costPerMobRationEvent = pricePerL * totalAmountL;
    const totalAnimals = calculatedValues.numAnimals;
    const costPerAnimalPerRationEvent = totalAnimals > 0 ? costPerMobRationEvent / totalAnimals : 0;

    const groupTerm = animalType === 'cattle' ? 'herd' : 'flock';

    return {
      pricePerDrum: pricePerDrum.toFixed(2),
      pricePerL: pricePerL.toFixed(2),
      costPerMobRationEvent: costPerMobRationEvent.toFixed(2),
      costPerAnimalPerRationEvent: costPerAnimalPerRationEvent.toFixed(2),
      groupTerm,
    };
  }, [country, currentDrum, calculatedValues.totalAmountPerRationEventL, calculatedValues.numAnimals, animalType]);

  const handleCattleClassChange = (value: string) => {
    setCattleClass(value);
    
    // If weight is empty, pre-fill typical weight
    if (!averageLiveweight) {
      const typicalWeight = CATTLE_CLASS_WEIGHTS[value];
      if (typicalWeight > 0) {
        setAverageLiveweight(typicalWeight.toString());
      }
    }
  };

  const getCattleClassName = (classValue: string): string => {
    const classNames: Record<string, string> = {
      'lactating': 'Lactating cows',
      'dry': 'Dry cows & heifers',
      'growing': 'Growing stores / yearlings',
      'bulls': 'Bulls',
      'calves': 'Calves / weaners',
      'other': 'Other / custom',
    };
    return classNames[classValue] || '';
  };

  const getSheepClassName = (classValue: string): string => {
    return sheepRationTable[classValue]?.label || '';
  };

  return (
    <PageLayout
      title="Mighty-Min® Supplementation Calculator"
      subtitle="Calculate the correct ration amounts and costs for your livestock mineral supplementation programme"
    >
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Section 1 - Product & Country */}
        <Card className="border-nextgen-green/20 shadow-sm rounded-lg">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">Product & Country</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="country">Country/Region</Label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger id="country">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="uk">UK (GBP)</SelectItem>
                    <SelectItem value="other">Other / no pricing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="product">Product</Label>
                <Select value={selectedProductId} onValueChange={handleProductChange}>
                  <SelectTrigger id="product">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {productsConfig.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="variant">Variant</Label>
              <Select value={selectedVariantId} onValueChange={handleVariantChange}>
                <SelectTrigger id="variant">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currentProduct?.variants.map((variant) => (
                    <SelectItem key={variant.id} value={variant.id}>
                      {variant.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {currentVariant?.notes && (
                <p className="text-sm text-muted-foreground">{currentVariant.notes}</p>
              )}
            </div>

            {showCopperWarning && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  8.5 Cu is for cattle only – do NOT use in sheep.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Section 2 - Animal Details */}
        <Card className="border-nextgen-green/20 shadow-sm rounded-lg">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">Animal Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={animalType} onValueChange={setAnimalType}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="cattle">Cattle</TabsTrigger>
                <TabsTrigger value="sheep">Sheep</TabsTrigger>
              </TabsList>

              <TabsContent value="cattle" className="space-y-4 mt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="cattle-name">Group Name</Label>
                    <Input
                      id="cattle-name"
                      placeholder="e.g., Heifers"
                      value={groupName}
                      onChange={(e) => setGroupName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cattle-class">Class</Label>
                    <Select 
                      value={cattleClass} 
                      onValueChange={handleCattleClassChange}
                    >
                      <SelectTrigger id="cattle-class">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lactating">Lactating cows</SelectItem>
                        <SelectItem value="dry">Dry cows & heifers</SelectItem>
                        <SelectItem value="growing">Growing stores / yearlings</SelectItem>
                        <SelectItem value="bulls">Bulls</SelectItem>
                        <SelectItem value="calves">Calves / weaners</SelectItem>
                        <SelectItem value="other">Other / custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cattle-number">Number of Animals</Label>
                    <Input
                      id="cattle-number"
                      type="number"
                      min="1"
                      placeholder="1"
                      value={numberOfAnimals}
                      onChange={(e) => setNumberOfAnimals(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cattle-weight">Average Liveweight (kg)</Label>
                    <Input
                      id="cattle-weight"
                      type="number"
                      min="50"
                      max="999"
                      placeholder="e.g. 450"
                      value={averageLiveweight}
                      onChange={(e) => setAverageLiveweight(e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="sheep" className="space-y-4 mt-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="sheep-name">Group Name</Label>
                    <Input
                      id="sheep-name"
                      placeholder="e.g., Ewes"
                      value={groupName}
                      onChange={(e) => setGroupName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sheep-class">Class</Label>
                    <Select 
                      value={sheepClass} 
                      onValueChange={setSheepClass}
                    >
                      <SelectTrigger id="sheep-class">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lambs-hoggets">Lambs & hoggets</SelectItem>
                        <SelectItem value="adult-sheep">Adult sheep</SelectItem>
                        <SelectItem value="rams">Rams</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sheep-number">Number of Animals</Label>
                    <Input
                      id="sheep-number"
                      type="number"
                      min="1"
                      placeholder="1"
                      value={numberOfAnimals}
                      onChange={(e) => setNumberOfAnimals(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sheep-weight">Average Liveweight (kg)</Label>
                    <Input
                      id="sheep-weight"
                      type="number"
                      min="10"
                      max="200"
                      placeholder="Optional"
                      value={averageLiveweight}
                      onChange={(e) => setAverageLiveweight(e.target.value)}
                      disabled
                    />
                    <p className="text-xs text-muted-foreground">Weight not used for sheep calculations</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Section 3 - Supplementation Plan */}
        <Card className="border-nextgen-green/20 shadow-sm rounded-lg">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">Supplementation Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-base text-muted-foreground">
              Each programme is a ration event repeated every 4–6 weeks, either mixed into feed or delivered via a Floater~Doser system in trough water. Use 6 weeks as the normal interval for adult cattle and sheep unless your veterinarian or adviser recommends a higher frequency.
            </p>

            <div className="space-y-2">
              <Label htmlFor="interval">Repeat Interval</Label>
              <Select value={repeatInterval} onValueChange={setRepeatInterval}>
                <SelectTrigger id="interval">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4">4 weeks (higher frequency – only under vet or adviser guidance)</SelectItem>
                  <SelectItem value="5">5 weeks (moderate frequency programme)</SelectItem>
                  <SelectItem value="6">6 weeks (default for adult cattle & sheep)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Repeat interval for ration events (on feed or in water).
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              Label guidance is generally 4–6 week intervals. Do not supplement more often than every 6 weeks unless advised by a veterinarian.
            </p>
          </CardContent>
        </Card>

        {/* Section 4 - Results */}
        <Card className="border-nextgen-green/20 shadow-sm rounded-lg">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {calculatedValues.weightWarning && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{calculatedValues.weightWarning}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm font-medium">Ration per animal (mL)</span>
                <span className="text-sm font-semibold">{calculatedValues.rationPerAnimalMl || '–'}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-sm font-medium">Group ration (L)</span>
                <span className="text-sm font-semibold">{calculatedValues.groupRationL}</span>
              </div>
            </div>

            {animalType === 'cattle' && averageLiveweight && parseFloat(averageLiveweight) > 450 && (
              <div className="pt-2 pb-2 bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-muted-foreground">
                  For heavier cattle above 450 kg, Mighty‑Min® rations are based on metabolic body‑weight (BW⁰·⁷⁵), not just liveweight, then rounded slightly upwards. This gives larger cattle a safe, appropriate increase in supplementation while still respecting the 4–6 week interval.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Section 4.1 - Floater~Doser Guidance */}
        <Card className="border-nextgen-green/20 shadow-sm rounded-lg">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">Floater~Doser guidance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-sm font-medium">Total supplement per ration event (L)</span>
              <span className="text-sm font-semibold">{floaterGuidance.amountL}</span>
            </div>

            <div className="pt-2">
              <p className="text-base text-muted-foreground whitespace-pre-line">
                {floaterGuidance.text}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 - Pricing */}
        <Card className="border-nextgen-green/20 shadow-sm rounded-lg">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {country === 'other' ? (
              <div className="py-8 text-center">
                <p className="text-muted-foreground">
                  Pricing not shown – calculator still works for amounts and supplementation.
                </p>
              </div>
            ) : !currentDrum?.priceGBP ? (
              <div className="py-8 text-center">
                <p className="text-muted-foreground">
                  Pricing not configured for this product in GBP. Ration calculations are still valid.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="drumSize">Drum Size</Label>
                  <Select 
                    value={selectedDrumLitres.toString()} 
                    onValueChange={(value) => setSelectedDrumLitres(parseInt(value))}
                  >
                    <SelectTrigger id="drumSize">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {currentVariant?.drums.map((drum) => (
                        <SelectItem key={drum.litres} value={drum.litres.toString()}>
                          {drum.litres} L {drum.priceGBP ? `(£${drum.priceGBP})` : ''}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {pricingValues && (
                  <div className="space-y-3 pt-2">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Price per drum</span>
                      <span className="text-sm font-semibold">£{pricingValues.pricePerDrum}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Price per L</span>
                      <span className="text-sm font-semibold">£{pricingValues.pricePerL}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Cost per {pricingValues.groupTerm} ration event</span>
                      <span className="text-sm font-semibold">£{pricingValues.costPerMobRationEvent}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm font-medium">Cost per animal per ration event</span>
                      <span className="text-sm font-semibold">£{pricingValues.costPerAnimalPerRationEvent}</span>
                    </div>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>

        <p className="text-base text-muted-foreground mb-6">
          Have questions about ration guidance, frequency, or product use?{' '}
          <Link to="/faq" className="text-nextgen-green hover:underline font-medium">
            Visit the FAQ →
          </Link>
        </p>

        <NextPageLink
          title="Farmer feedback and real‑world results"
          href="/farmer-feedback"
        />
      </div>
    </PageLayout>
  );
}