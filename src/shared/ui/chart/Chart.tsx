import { styled } from "@mui/material/styles"
import { ChartProps } from "./Types"
import ReactApexChart from "react-apexcharts"

// ----------------------------------------------------------------------

export const Chart = ({
  type,
  series,
  options = {},
  slotProps,
  className,
  sx,
  ...other
}: ChartProps) => {
  return (
    <ChartRoot className={className} sx={sx} {...other}>
      <ReactApexChart type={type} series={series} options={options} />
    </ChartRoot>
  )
}

// ----------------------------------------------------------------------

const ChartRoot = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  flexShrink: 0,
  position: "relative",
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  "& .apexcharts-canvas": {
    width: "100% !important",
    height: "100% !important",
  },
}))
