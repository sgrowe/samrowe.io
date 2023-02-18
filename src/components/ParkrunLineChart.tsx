import { DateTime } from 'luxon'
import { Line, LineChart, XAxis, YAxis } from 'recharts'

type Props = {
  data: {
    x: string
    y: number
  }[]
}

export const ParkrunLineChart = ({ data }: Props) => {
  return (
    <div className="lining-nums">
      <LineChart
        width={800}
        height={400}
        data={data
          .map(({ x, y }) => ({ x: parseDate(x), y }))
          .filter(({ x }) => DateTime.fromSeconds(x).year >= 2021)}
      >
        <XAxis
          type="number"
          dataKey="x"
          ticks={[2022, 2023].map((year) =>
            DateTime.fromObject({ year }).toUnixInteger()
          )}
          tickFormatter={(epochTime: number) =>
            DateTime.fromSeconds(epochTime).toFormat('yyyy')
          }
          domain={['dataMin', 'auto']}
        />
        <YAxis
          type="number"
          tickFormatter={formatY}
          domain={[(dataMin: number) => Math.floor(dataMin / 60) * 60, 'auto']}
        />
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}

const parseDate = (date: string) => DateTime.fromISO(date).toUnixInteger()

const formatY = (val: Props['data'][number]['y']) => {
  const mins = Math.floor(val / 60)
  const secs = val % 60

  return `${mins}:${String(secs).padStart(2, '0')}`
}
