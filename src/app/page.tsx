"use client";
import LineChartComponent from "@/components/chart";
import { useEffect, useState } from "react";
import Savings from "@/utils/provider";
import { DataTableDemo } from "@/components/table"


export default function Home() {
  const [savings, setSaving] = useState();

  useEffect(() => {
    const getDatas = async () => {
      const response = await Savings();
      setSaving(response);
    };
    getDatas();
  }, []);

  return (
    <main>
      <div className="flex max-sm:col-span-2">
      <div className="w-96 m-2"><LineChartComponent></LineChartComponent></div>
      <div className="w-96 m-2"><LineChartComponent></LineChartComponent></div>
      <div className="w-96 m-2"><LineChartComponent></LineChartComponent></div>
      </div>
      <DataTableDemo></DataTableDemo>
    </main>
  );
}
