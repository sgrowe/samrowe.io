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
    <section>
      <h3>
        <a href={url}>{name}</a>
      </h3>

      <table>
        <tr>
          <td>Calories</td>
          <td>{cals}</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td>{carbs}</td>
        </tr>
        {effectiveCarbs != null ? (
          <tr>
            <td>Effective carbs</td>
            <td>{effectiveCarbs}</td>
          </tr>
        ) : null}
        <tr>
          <td>Protein</td>
          <td>{protein}</td>
        </tr>
        <tr>
          <td>Sat fat</td>
          <td>{satFat}</td>
        </tr>
      </table>
    </section>
  )
}
