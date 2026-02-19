# PROJECT BRIEF — Sandy Bryant’s Mixtures® Website (ICP)

## 1. Purpose

Build a customer-facing marketing website for **Sandy Bryant’s Mixtures®** (Australia).

The site must:

- Educate livestock producers.
- Present the product range clearly.
- Direct purchase and enquiries to **Nutrien Ag Solutions (NAS)** and **CRT stores**.

This is NOT:
- An internal NAS staff portal.
- An e-commerce checkout site.
- A Pink Calcium site.

Deployment target: **Internet Computer (ICP)** using `dfx`.

The site must be built as a static deployable application suitable for an ICP assets canister.

---

## 2. Brand and Product Structure

### 2.1 Primary Brand

- **Sandy Bryant’s Mixtures®** (Registered Trademark).
- Always display the name with the correct **®** symbol.
- Maintain brand separation from other WPC products.

### 2.2 Product Range (Sandy Bryant’s Mixtures®)

The public site includes ONLY:

- Sandy Bryant’s Mixtures® – Cattle
- Sandy Bryant’s Mixtures® – Sheep
- Sandy Bryant’s Mixtures® – Hard Country, Travel & Yard

The correct name must always be:

**Hard Country, Travel & Yard**

Never shorten or alter the name.

Hard Country, Travel & Yard:
- Same rationing logic as Mighty-Min 8.5 Cu.
- Copper composition: 9.5 mg/L Cu.
- Composition data is informational only unless later required in calculator logic.

---

## 3. Excluded Products

The following are NOT part of this site:

- Pink Calcium Formula 6 6 5® (separate future website)
- Sandy Bryant’s Horse (not included in this build)

The site focuses solely on ruminant livestock supplementation.

---

## 4. Language Rules (STRICT)

Never use:
- dose
- doses
- dosing
- dosage
- dose rate
- doser

Always use:
- ration
- rations
- rationing
- supplementation
- supplementation plan
- amount required
- volume required

The only permitted appearance of “Doser” is inside the registered product name:

**Floater~Doser®**

Use UK English spelling and grammar.

Avoid em dashes. Use full stops, commas, or restructure the sentence.

---

## 5. Heritage and Story (Public-Facing)

Sandy Bryant’s family were farmers in Gabon, England, who travelled to and settled in Australia in 1841, establishing their farm in Bathurst, NSW.

Over generations the formulas have been developed to support livestock production.

Family memory:
A young great grandson perched on Sandy’s knee as he mixed copper sulphate and nicotine to address lung worm in sheep in Warren, NSW.

Storytelling must feel authentic and grounded, not exaggerated or romanticised.

---

## 6. Key Website Pages

Minimum required pages:

- Home
- Our Story
- Product Range
  - Cattle
  - Sheep
  - Hard Country, Travel & Yard
- Livestock Ration Calculator
- Where to Buy (NAS/CRT direction)
- Contact

Conversion goal on every page:

Direct producers to:
- Find their local Nutrien Ag Solutions or CRT store.
- Speak with their local store.
- Enquire through store channels.

---

## 7. Livestock Ration Calculator

Title: **Livestock Ration Calculator**

The calculator applies ONLY to:

- Sandy Bryant’s Mixtures® – Cattle
- Sandy Bryant’s Mixtures® – Sheep
- Sandy Bryant’s Mixtures® – Hard Country, Travel & Yard

The calculator will NOT include:
- Pink Calcium
- Horse
- Pricing or cost-per-ration

### 7.1 Supported Rationing Methods

The calculator must support:

1. Feed ration per head.
2. Tank-based water supplementation.
3. Inline pump rationing into reticulated water systems.
4. Floater~Doser® option (only for Sandy Bryant’s Mixtures® products).

### 7.2 Logic Source

An existing calculator has already been created for the UK Mighty-Min site in caffeine.ai.

The code may be adapted and modified to:

- Align with Sandy Bryant’s Mixtures® naming.
- Include the Hard Country, Travel & Yard variant.
- Remove pricing logic.
- Remove any UK-specific references.

The architecture should remain modular so future updates are simple.

---

## 8. Visual Direction

The design should align with:

- Sandy Bryant’s Mixtures® label colours.
- Traditional agricultural credibility.
- Clean, practical layout.

Hard Country, Travel & Yard label artwork is pending.
Use current cattle/sheep label colour themes and ensure expandability.

Do not incorporate Pink Calcium branding.

---

## 9. Technical Direction

- Build a modern static marketing site.
- Output must be suitable for ICP assets canister deployment.
- Fast loading.
- Mobile responsive.
- Clean component structure.
- Maintainable by non-coders using Codex guidance.

---

## 10. Compliance and Claims

Avoid therapeutic or disease treatment claims.

Focus on:

- Supplementation management.
- Practical livestock support.
- Ease of rationing.
- Farm application flexibility.

No exaggerated performance claims.

---

## 11. Source Materials

Assets available locally:

- Sandy Bryant’s Mixtures® logo.
- Product labels.
- Product container spreadsheet.
- Existing UK calculator code (to be supplied).

All development must reflect this brand, not present it as a Mighty-Min rebrand.
