"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
const chartData = [
  { month: "January", desktop: 2000.00, mobile: 800 },
  { month: "February", desktop: 2000, mobile: 2000 },
  { month: "March", desktop: 2000, mobile: 1200 },
  { month: "April", desktop: 2000, mobile: 1900 },
  { month: "May", desktop: 209, mobile: 1300 },
  { month: "June", desktop: 214, mobile: 1400 },
]

const chartConfig = {
  desktop: {
    label: "Entrate",
    color: "#2563eb",
  },
  mobile: {
    label: "Uscite",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export default function barCharts() {
  return (
    <> 
    <CardTitle className="text-xl font-semibold m-2">
      <section>
        <h1>Entrate e Usicite</h1>
      </section>
    </CardTitle>
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3
          )}
        />
        <ChartTooltip content={<ChartTooltipContent  indicator="dashed" nameKey="ciao" />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
    </>
  )
}
