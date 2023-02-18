import { z } from 'zod'
import { getParkrunAccessToken } from './auth'

const myAthleteId = import.meta.env.PARKRUN_ATHLETE_ID

const responseSchema = z.object({
  'Content-Range': z.object({
    ResultsRange: z.tuple([
      z.object({
        first: z.string(),
        last: z.string(),
        max: z.string(),
      }),
    ]),
  }),
  data: z.object({
    Results: z.array(
      z.object({
        SeriesID: z.string(),
        EventNumber: z.string(),
        RunId: z.string(),
        FinishPosition: z.string(),
        GenderPosition: z.string(),
        EventDate: z.string(),
        AthleteID: z.string(),
        RunTime: z.string(),
        WasPbRun: z.string(),
        AgeGrading: z.string(),
        AgeCategory: z.string(),
        FirstTimer: z.string(),
        GenuinePB: z.string(),
        Updated: z.string(),
        Assisted: z.string().nullable(),
      })
    ),
  }),
})

export const fetchParkrunResults = async () => {
  const access_token = await getParkrunAccessToken()

  const resp = await fetch(
    `https://api.parkrun.com/v1/results?access_token=${access_token}&athleteId=${myAthleteId}`
  )

  if (!resp.ok) throw new Error(`Parkrun API error: ${await resp.text()}`)

  const data = await resp.json()

  const parsed = await responseSchema.parseAsync(data)

  parsed.data.Results.reverse()

  return parsed.data.Results
}
