import type { ReactNode } from 'react'

export type Food = {
  name: string
  url: string
  cals: number
  carbs: number
  effectiveCarbs?: number
  protein: number
  satFat: number
}

export const FoodSummary = ({ food }: { food: Food }) => {
  const { name, url, cals, carbs, effectiveCarbs, protein, satFat } = food

  return (
    <section className="pt-4 pb-4">
      <h3 className="pb-2 text-lg font-bold">
        <a href={url}>{name}</a>
      </h3>

      <table className="w-full table-fixed text-sm opacity-80">
        <tbody>
          <tr>
            <td>Calories</td>
            <NumericCell
              x={cals}
              calories
              postFix={cals > 700 ? ' ⚠️' : null}
            />
          </tr>

          <tr>
            <td>Carbs</td>
            {effectiveCarbs != null ? (
              <NumericCell
                x={effectiveCarbs}
                postFix={<span className="opacity-40"> ({carbs} total)</span>}
              />
            ) : (
              <NumericCell x={carbs} />
            )}
          </tr>

          <tr>
            <td>Protein</td>
            <NumericCell x={protein} />
          </tr>

          <tr>
            <td>Sat fat</td>
            <NumericCell x={satFat} postFix={satFat >= 8 ? ' ⚠️' : null} />
          </tr>
        </tbody>
      </table>
    </section>
  )
}

type NumericProps = {
  x: number
  calories?: boolean
  postFix?: ReactNode
}

const NumericCell = ({ x, calories = false, postFix }: NumericProps) => (
  <td className="font-mono">
    <span className="inline-block w-[4ch] text-right">
      {x.toFixed(calories ? 0 : 1)}
    </span>
    {postFix}
  </td>
)
