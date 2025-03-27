"use client";

import { TrendingUp } from "lucide-react";
import { Line,LineChart } from "recharts";

import {
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {useTranslations} from 'next-intl';
import { Badge } from "@/components/ui/badge"


export default function LineChartComponent({title, value, data}) {
  const saldo = value.toString().split('.');
  const t = useTranslations('Chart');
  const chartData = data;

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color:  chartData[chartData.length-1].revenue >= chartData[chartData.length-2].revenue ? "green" : "red",
    },
    subscription: {
      label: "Subscriptions",
      color: "hsl(var(--chart-))",
    },
  } satisfies ChartConfig;
  return (
    <>
        <CardTitle className="text-xl font-semibold m-2 pl-5">
          <section>
            <h1>{title}</h1>
          </section>
        </CardTitle>
        <CardContent className="">
          <Badge variant="secondary" className="bg-green-100 text-green-800" >
              <TrendingUp size={16} strokeWidth={1.75} className="mr-1" /> 
              {"12.1% "+t('chart_desc_up',{perc:"10"})}
          </Badge>
          <div className="mb-4">
            <p className="font-semibold text-5xl">€{saldo[0]}<span className="text-gray-400">.{saldo[1]}</span></p>
          </div>
          <ChartContainer config={chartConfig} className="h-[80px] w-full max-sm:w-64">
              {chartData[0].revenue != -1 ? lineChartFunct(chartData) :  emptyChart()}
            </ChartContainer>
        </CardContent>
    </>
  );
}

function lineChartFunct (data: any){
  return (
  <LineChart
    data={data}
    margin={{
      top: 5,
      right: 10,
      left: 10,
      bottom: 10,
    }}
  >
    <ChartTooltip
    cursor={true}
    content={<ChartTooltipContent hideLabel />}
    />
    <Line
      type="monotone"
      strokeWidth={2}
      dataKey="revenue"
      stroke="var(--color-revenue)"
      activeDot={{
        r: 6,
      }}
    />
  </LineChart>);
}

function emptyChart (){
  return (
    <div className="text-start align-middle">
      Dati non disponibile
    </div>
  );
}