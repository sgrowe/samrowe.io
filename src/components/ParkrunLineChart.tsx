import { DateTime } from 'luxon'
import { Line, LineChart, Tooltip, TooltipProps, XAxis, YAxis } from 'recharts'

const years = [2022, 2023] as const

export type Props = {
  data: {
    eventName: string
    epochTimeSecs: number
    runTimeSecs: number
  }[]
}

export const ParkrunLineChart = ({ data }: Props) => (
  <div className="lining-nums">
    <LineChart width={800} height={400} data={data}>
      <XAxis
        type="number"
        dataKey="epochTimeSecs"
        ticks={years.map((year) =>
          DateTime.fromObject({ year }).toUnixInteger()
        )}
        tickFormatter={(epochTime: number) =>
          DateTime.fromSeconds(epochTime).toFormat('yyyy')
        }
        domain={['dataMin', 'auto']}
      />
      <YAxis
        type="number"
        tickFormatter={formatRunTime}
        domain={[(dataMin: number) => Math.floor(dataMin / 60) * 60, 'auto']}
      />
      <Tooltip content={RaceResultTooltip} />
      <Line type="monotone" dataKey="runTimeSecs" stroke="#8884d8" />
    </LineChart>
  </div>
)

const formatRunTime = (val: number) => {
  const mins = Math.floor(val / 60)
  const secs = val % 60

  return `${mins}:${String(secs).padStart(2, '0')}`
}

const RaceResultTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>) => {
  const data = payload && payload[0]

  if (active && data && data.value) {
    return (
      <div>
        <p className="font-medium">{data.payload.eventName}</p>
        <p>Time: {formatRunTime(data.value)}s</p>
      </div>
    )
  }

  return null
}
