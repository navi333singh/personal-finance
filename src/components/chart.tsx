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
import {useTranslations} from 'next-intl';
import { useState } from "react";



const chartData = [
  { stipendi: "January", desktop: 2141, mobile: 80 },
  { stipendi: "February", desktop: 2141, mobile: 200 },
  { stipendi: "March", desktop: 2141, mobile: 120 },
  { stipendi: "April", desktop: 2299, mobile: 190 },
  { stipendi: "May", desktop: 2141, mobile: 130 },
  { stipendi: "June", desktop: 2100, mobile: 140 },
];


const chartConfig = {
  desktop: {
    label: "Entra",
    color:  chartData[chartData.length-1].desktop >= chartData[chartData.length-2].desktop ? "green" : "red",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function LineChartComponent() {
  const [saldo, setSaldo] = useState(1.99); 
  const t = useTranslations('Chart');
  return (
   
    <Card style={{ background: "#f6f5f4" }}>
      <CardHeader>
        <CardTitle>
          <section>
            <h1>{t('networth')}</h1>
          </section>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p className="font-semibold text-5xl">€{saldo}</p>
        </div>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              left: 10,
              right: 10,
              bottom: 10,
            }}
            height={5}
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
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-base">
        <div
          style={{ color: "#009E60" }}
          className="flex gap-2 font-normal leading-none"
        >
          {t('chart_desc_up',{perc:"10"})} <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
