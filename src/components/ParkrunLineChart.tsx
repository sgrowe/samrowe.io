import { Line, LineChart, Tooltip, TooltipProps, XAxis, YAxis } from 'recharts'
import { cls } from '../utils/cls'
import { useIsClientSide } from '../utils/useIsClientSide'

export type Props = {
  years: readonly {
    year: number
    epochTime: number
  }[]
  data: {
    eventName: string
    epochTimeSecs: number
    runTimeSecs: number
  }[]
}

export const ParkrunLineChart = ({ years, data }: Props) => {
  const isClientSide = useIsClientSide()

  return (
    <div
      className={cls([
        'w-[800px] lining-nums transition-opacity duration-500',
        isClientSide ? 'opacity-100' : 'opacity-0',
      ])}
    >
      {isClientSide ? (
        <LineChart id="parkrun" width={800} height={400} data={data}>
          <XAxis
            type="number"
            dataKey="epochTimeSecs"
            ticks={years.map(({ epochTime }) => epochTime)}
            tickFormatter={(_, index) => String(years[index]?.year ?? '')}
            domain={['dataMin', 'auto']}
          />
          <YAxis
            type="number"
            tickFormatter={formatRunTime}
            domain={[
              (dataMin: number) => Math.floor(dataMin / 60) * 60,
              'auto',
            ]}
          />
          <Tooltip content={RaceResultTooltip} />
          <Line type="monotone" dataKey="runTimeSecs" stroke="#8884d8" />
        </LineChart>
      ) : null}
    </div>
  )
}

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
