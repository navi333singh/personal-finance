"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { stipendi: "January", desktop: 0, mobile: 80 },
  { stipendi: "February", desktop: 1299, mobile: 200 },
  { stipendi: "March", desktop: 1299, mobile: 120 },
  { stipendi: "April", desktop: 1299, mobile: 190 },
  { stipendi: "May", desktop: 2141, mobile: 130 },
  { stipendi: "June", desktop: 2100, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Stipendio",
    color: "black",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function LineChartComponent() {
  return (
    <Card style={{ background: "#f6f5f4" }}>
      <CardHeader>
        <CardTitle>Net worth</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p className="font-semibold text-5xl">€83.00</p>
        </div>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              left: 10,
              right: 10,
            }}
          >
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-base">
        <div
          style={{ color: "#009E60" }}
          className="flex gap-2 font-normal leading-none"
        >
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
