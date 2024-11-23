"use client"
import LineChartComponent from "@/components/chart";
import { useEffect, useState } from "react";
import Savings from "@/utils/provider";

export default function Home() {

  const [savings, setSaving] = useState();
  
  useEffect(() => {
    const getDatas = async () => {
        const response =  await Savings();
        setSaving(response);
    }
    getDatas();
  }, [])

  return (
      <main>
        <div className="w-56">
        <LineChartComponent></LineChartComponent>
        </div>
      </main>
  );
}
