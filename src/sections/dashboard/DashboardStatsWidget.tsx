import { Chart, ChartOptions } from "@/shared/ui/chart"
import { fNumber, fPercent } from "@/shared/utils/formatNumber"
import { Box, Card, CardProps, useTheme } from "@mui/material"

type Props = CardProps & {
  title: string
  total: number
  percent: number
  chart: {
    colors?: string[]
    categories: string[]
    series: number[]
    options?: ChartOptions
  }
}

export const StatsWidget = ({ title, percent, total, chart, sx, ...other }: Props) => {
  const theme = useTheme()
  const chartColors = chart.colors ?? [theme.palette.primary.main]

  const renderTrending = () => (
    <Box sx={{ gap: 0.5, display: "flex", alignItems: "center" }}>
      <Box component="span" sx={{ typography: "subtitle2" }}>
        {percent > 0 && "+"}
        {fPercent(percent)}
      </Box>

      <Box component="span" sx={{ typography: "body2", color: "text.secondary" }}>
        last 7 days
      </Box>
    </Box>
  )

  const chartOptions: ChartOptions = {
    chart: { sparkline: { enabled: true } },
    colors: chartColors,
    stroke: { width: 2, curve: "smooth" },
    tooltip: {
      y: { formatter: (value: number) => fNumber(value), title: { formatter: () => "" } },
    },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
    grid: {
      show: false,
    },
    ...chart.options,
  }

  return (
    <Card
      sx={[
        () => ({
          p: 3,
          display: "flex",
          zIndex: "unset",
          overflow: "unset",
          alignItems: "center",
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ typography: "subtitle2" }}>{title}</Box>

        <Box sx={{ mt: 1.5, mb: 1, typography: "h3" }}>{111}</Box>

        {renderTrending()}
      </Box>

      <Chart
        type="bar"
        options={chartOptions}
        series={[{ data: chart.series }]}
        sx={{ width: 60, height: 40 }}
      />
    </Card>
  )
}
