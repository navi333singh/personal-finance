"use client";
import LineChartComponent from "@/components/chart";
import { useEffect, useState } from "react";
import {getUserConfiguration} from "@/provider/provider";
import { DataTableDemo } from "@/components/table"
import BarCharts from "@/components/barChart";
import Component from "@/components/pieChart";
import {useTranslations} from "next-intl";

export default function Home() {

  useEffect(() => {
    if (! localStorage.getItem("userConfig")){
      getUserConfiguration().then( val => {
        if (typeof window !== "undefined") {
          localStorage.setItem("userConfig", JSON.stringify(val));
        }
      });
    }
  }, []);


  const chartData = [
    {
      revenue: 0,
      subscription: 240,
    },
    {
      revenue: 0,
      subscription: 300,
    },
    {
      revenue: 0,
      subscription: 200,
    },
    {
      revenue: 0,
      subscription: 278,
    },
    {
      revenue: 0,
      subscription: 189,
    },
    {
      revenue: 0,
      subscription: 239,
    },
    {
      revenue: 0,
      subscription: 278,
    },
    {
      revenue: 0,
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
      <div className=" m-2"><LineChartComponent title={t("Stock")} value={"12.00"} data={chartData}></LineChartComponent></div>
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
