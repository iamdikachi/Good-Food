"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, Tooltip, CartesianGrid } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const data = [
  { name: "01", current: 30, previous: 40, trend: 35 },
  { name: "02", current: 25, previous: 45, trend: 32 },
  { name: "03", current: 50, previous: 25, trend: 45 },
  { name: "04", current: 40, previous: 40, trend: 55 },
  { name: "05", current: 35, previous: 25, trend: 50 },
  { name: "06", current: 55, previous: 35, trend: 60 },
]

export function OrderStatsChart() {
  return (
    <Card className="col-span-1 p-4 md:p-6 rounded-none shadow-none border-0 lg:border-l border-[#C8CBD9] relative h-full">
      <CardHeader className="flex flex-row items-start justify-between p-0 mb-6">
        <div className="space-y-1">
          <CardTitle className="text-sm font-bold text-[#A6ABC8]">Order</CardTitle>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#1B2559]">2.568</span>
            <div className="flex items-center gap-1.5 text-[11px] font-bold">
               <span className="text-[#FF5B5B]">↓ 2.1%</span>
               <span className="text-[#A6ABC8]">vs last week</span>
            </div>
          </div>
          <CardDescription className="text-[11px] font-medium text-[#A6ABC8] pt-4">Sales from 1-6 Dec, 2020</CardDescription>
        </div>
        <Button variant="outline" className="cursor-pointer rounded-xl px-4 h-9 border-slate-100/50 text-[#5A67BA] font-bold hover:bg-slate-50 bg-[#F4F7FE] shadow-none text-xs">
          View Report
        </Button>
      </CardHeader>
      <CardContent className="h-[220px] w-full p-0 mt-4">
        <div className="relative h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
               <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "#A6ABC8", fontSize: 10, fontWeight: 600 }} 
                  dy={10}
              />
              <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
              />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="#5A67BA" 
                strokeWidth={2.5}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="previous" 
                stroke="#E9EDF7" 
                strokeWidth={2.5}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="trend" 
                stroke="#FF5B5B" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
          
          {/* Custom Label for "Samson Koremene" */}
          <div className="absolute top-[55%] right-0 bg-[#FF5B5B] text-white text-[8px] font-bold px-1.5 py-1 rounded shadow-lg transform translate-x-2">
            Samson Koremene
            <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-r-4 border-r-[#FF5B5B]" />
          </div>
        </div>

        <div className="flex items-center gap-6 text-[10px] font-bold mt-8 ml-2">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#5A67BA]" />
            <span className="text-[#A6ABC8]">Last 6 days</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E9EDF7]" />
            <span className="text-[#A6ABC8]">Last Week</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
