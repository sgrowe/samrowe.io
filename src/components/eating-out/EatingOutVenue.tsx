import { FoodSummary, type Food } from './FoodSummary'

type Props = {
  venue: Venue
}

export type Venue = {
  name: string
  slug: string
  notes?: string
  foods: readonly Food[]
}

export const EatingOutVenue = ({
  venue: { name, slug, notes, foods },
}: Props) => (
  <div id={slug} className="flex flex-col gap-6">
    <h2 className="pt-12 text-4xl">{name}</h2>

    {notes ? <p className="font-light italic">{notes}</p> : null}

    {foods.map((food) => (
      <FoodSummary key={food.name} food={food} />
    ))}
  </div>
)
