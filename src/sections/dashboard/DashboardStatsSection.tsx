import { Grid, useTheme } from "@mui/material"
import { StatsWidget } from "./DashboardStatsWidget"

export const DashboardStatsSection = () => {
  const theme = useTheme()

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 4 }}>
        <StatsWidget
          title="User count"
          percent={0.2}
          total={4876}
          chart={{
            colors: [theme.palette.info.main],
            categories: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust"],
            series: [20, 41, 63, 33, 28, 35, 50, 46],
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <StatsWidget
          title="Banned count"
          percent={0}
          total={221}
          chart={{
            colors: [theme.palette.error.main],
            categories: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust"],
            series: [20, 41, 63, 33, 28, 35, 50, 46],
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <StatsWidget
          title="Community count"
          percent={0.1}
          total={10}
          chart={{
            colors: [theme.palette.success.main],
            categories: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust"],
            series: [5, 10, 7, 5, 8, 10, 9, 10],
          }}
        />
      </Grid>
    </Grid>
  )
}
