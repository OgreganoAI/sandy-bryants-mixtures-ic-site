import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'

function formatTrademarkText(text: string) {
  return (
    <>
      {text.split(/(Sandy Bryant’s Mixtures®|Floater~Doser®)/g).map((part, index) => {
        if (part === 'Sandy Bryant’s Mixtures®') {
          return (
            <span key={index}>
              Sandy Bryant’s Mixtures<span className="align-super text-[0.6em]">®</span>
            </span>
          )
        }

        if (part === 'Floater~Doser®') {
          return (
            <span key={index}>
              Floater~Doser<span className="align-super text-[0.6em]">®</span>
            </span>
          )
        }

        return part
      })}
    </>
  )
}

const faqs = [
  {
    question: 'What are Sandy Bryant’s Mixtures®?',
    answer:
      'Sandy Bryant’s Mixtures® are livestock mineral supplements developed from a practical farming heritage and formulated for use in Australian livestock systems.',
  },
  {
    question: 'Why are there different copper variants?',
    answer:
      'The range is structured around a primary 6.5 copper formulation, with higher copper variants available for cattle-only systems and more specialised management situations.',
  },
  {
    question: 'Which formulation is suitable for sheep?',
    answer:
      'Sheep should only be considered with the Sheep & Cattle 6.5 Cu formulation. Higher copper formulations are intended for cattle-only use.',
  },
  {
    question: 'What is FulviPhos?',
    answer:
      'FulviPhos is incorporated in the Hard Country Cattle, Travel & Yard formulation and was progressively formulated for more demanding environments, including arid regions and management phases involving transport or yarding.',
  },
  {
    question: 'How can Sandy Bryant’s Mixtures® be provided?',
    answer:
      'The formulations can be added to feed, provided through the Floater~Doser®, or delivered through suitable inline water systems or tanks.',
  },
  {
    question: 'What is the Floater~Doser®?',
    answer:
      'The Floater~Doser® is an Australian-designed delivery option that supports practical supplementation through trough water.',
  },
  {
    question: 'How often should sheep be supplemented?',
    answer:
      'Do not provide serving of product to sheep more than once every 6 (six) weeks.',
  },
  {
    question: 'Where can Sandy Bryant’s Mixtures® be purchased?',
    answer:
      'Sandy Bryant’s Mixtures® are supplied through Nutrien Ag Solutions® and CRT store networks.',
  },
]

export function FaqPage() {
  useEffect(() => {
    document.title = 'FAQ | Sandy Bryant’s Mixtures®'

    const description =
      'Frequently asked questions about Sandy Bryant’s Mixtures®, livestock mineral supplementation, copper variants, FulviPhos, and Floater~Doser® delivery.'

    let meta = document.querySelector('meta[name="description"]')

    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', description)
  }, [])

  return (
    <main className="mx-auto max-w-5xl px-6 py-14 space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-semibold tracking-tight text-[#2b1a12]">
          Frequently Asked Questions
        </h1>

       <p className="mx-auto max-w-2xl text-lg text-[#2b1a12]/75">
  Practical answers about Sandy Bryant’s Mixtures<span className="align-super text-[0.6em]">®</span>, formulation selection,
  supplementation methods, and store availability.
</p>
      </section>

      <section className="mx-auto max-w-3xl space-y-4">
  {faqs.map((item) => (
    <details
      key={item.question}
      className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm"
    >
      <summary className="cursor-pointer select-none text-lg font-semibold text-[#2b1a12]">
        {formatTrademarkText(item.question)}
      </summary>

      <p className="mt-3 leading-[1.6] text-[#2b1a12]/75">
  {formatTrademarkText(item.answer)}
</p>
    </details>
  ))}
</section>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-[#2b1a12]">
          Need to plan a ration?
        </h2>

        <p className="mx-auto max-w-2xl text-[#2b1a12]/75">
          Use the Livestock Ration Calculator to estimate product volumes based on
          animal type, class, numbers, and selected formulation.
        </p>

        <Link
          to="/calculator"
          className="inline-flex rounded-xl bg-primary px-6 py-3 text-primary-foreground font-medium transition hover:opacity-90"
        >
          Open the Calculator
        </Link>
      </section>
    </main>
  )
}
