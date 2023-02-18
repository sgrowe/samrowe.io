import DataLoader from 'dataloader'
import { z } from 'zod'
import { getParkrunAccessToken } from './auth'

const responseSchema = z.object({
  'Content-Range': z.object({
    EventsRange: z.tuple([
      z.object({
        first: z.string(),
        last: z.string(),
        max: z.string(),
      }),
    ]),
  }),
  data: z.object({
    Events: z.tuple([
      z.object({
        EventNumber: z.string(),
        EventName: z.string(),
        EventShortName: z.string(),
        EventLongName: z.string(),
        EventLocation: z.string(),
        CountryCode: z.string(),
        PreferredLanguage: z.string(),
        SeriesID: z.string(),
        NextAnniversary: z.string(),
        HomeRunSelection: z.string(),
        StatusLive: z.string(),
        AnniversarySaturdayOfMonth: z.string(),
        EventStatus: z.string(),
        UserFavourite: z.string().nullable(),
        AccessibleToPublic: z.string(),
      }),
    ]),
  }),
})

async function fetchEvent(eventId: string) {
  const access_token = await getParkrunAccessToken()

  const resp = await fetch(
    `https://api.parkrun.com/v1/events/${eventId}?access_token=${access_token}`
  )

  if (!resp.ok) throw new Error(`Parkrun API error: ${await resp.text()}`)

  const data = await resp.json()

  const parsed = await responseSchema.parseAsync(data)

  return parsed.data.Events[0]
}

export const eventsLoader = new DataLoader((keys: readonly string[]) =>
  Promise.all(keys.map(fetchEvent))
)
