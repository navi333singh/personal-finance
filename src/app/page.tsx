"use client";
import LineChartComponent from "@/components/chart";
import { useEffect, useState } from "react";
import Savings from "@/utils/provider";
import { DataTableDemo } from "@/components/table"
import BarCharts from "@/components/barChart";
import Component from "@/components/pieChart";
import {useTranslations} from 'next-intl';
export default function Home() {
  const [savings, setSaving] = useState();

  const chartData = [
    {
      revenue: -124,
      subscription: 240,
    },
    {
      revenue: 14405,
      subscription: 300,
    },
    {
      revenue: 9400,
      subscription: 200,
    },
    {
      revenue: 8200,
      subscription: 278,
    },
    {
      revenue: 7000,
      subscription: 189,
    },
    {
      revenue: 9600,
      subscription: 239,
    },
    {
      revenue: 11244,
      subscription: 278,
    },
    {
      revenue: 11000,
      subscription: 189,
    },
  ];
  const t = useTranslations('Chart');
  useEffect(() => {
    const getDatas = async () => {
      const response = await Savings();
      setSaving(response);
    };
    getDatas();
  }, []);

  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
      <div className=" m-2"><LineChartComponent title={t("networth")} value={"2241.40"} data={chartData}></LineChartComponent></div>
      <div className=" m-2"><LineChartComponent title={t("Stock")} value={"0.00"} data={chartData}></LineChartComponent></div>
      <div className=" m-2"><LineChartComponent title={t("Savings")} value={"0.00"} data={chartData}></LineChartComponent></div>
      <div className=" m-2"><BarCharts></BarCharts></div>
      {/* <div className="w-72 m-2"><Component></Component></div> */}
      </div>
      <div className="flex max-sm:col-span-2 justify-start items-start ">
      
      
      </div>
      
      <DataTableDemo></DataTableDemo>
    </main>
  );
}
