"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Area, AreaChart, XAxis } from "recharts";

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
import { Badge } from "@/components/ui/badge"


const chartData = [
  { stipendi: "January", desktop: 2000, mobile: 804 },
  { stipendi: "February", desktop: 2141, mobile: 2004 },
  { stipendi: "March", desktop: 2141, mobile: 1240 },
  { stipendi: "April", desktop: 2299, mobile: 190 },
  { stipendi: "May", desktop: 2141, mobile: 130 },
  { stipendi: "June", desktop: 2100, mobile: 140 },
];


const chartConfig = {
  desktop: {
    label: "Entra",
    color:  chartData[chartData.length-1].desktop >= chartData[chartData.length-2].desktop ? "green" : "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-))",
  },
} satisfies ChartConfig;

export default function Stock() {
  const [saldoIntero, setsaldoIntero] = useState(22356);
  const [saldoDecimale, setsaldoDecimale] = useState(39);  
  const t = useTranslations('Chart');
  return (
   
    <>
        <CardTitle className="text-xl font-semibold m-2 pl-5">
          <section>
            <h1>Portafoglio azioni</h1>
          </section>
          
        </CardTitle>
      <CardContent className="">
      <Badge variant="secondary" className="bg-green-100 text-green-800" >
            <TrendingUp size={16} strokeWidth={1.75} className="mr-1" /> 
            {"12.1% "+t('chart_desc_up',{perc:"10"})}
          </Badge>
      <div className="mb-4">
          
          <p className="font-semibold text-5xl">€{"22,356"}<span className="text-gray-400">.{saldoDecimale}</span></p>
        </div>
          
      <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
          
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.0}
             
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      
    </>
  );
}
