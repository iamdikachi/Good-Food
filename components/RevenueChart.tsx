"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip, CartesianGrid } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const data = [
  { name: "01", current: 40, previous: 30 },
  { name: "02", current: 45, previous: 25 },
  { name: "03", current: 35, previous: 35 },
  { name: "04", current: 30, previous: 40 },
  { name: "05", current: 50, previous: 35 },
  { name: "06", current: 55, previous: 30 },
  { name: "07", current: 42, previous: 28 },
  { name: "08", current: 38, previous: 42 },
  { name: "09", current: 45, previous: 25 },
  { name: "10", current: 35, previous: 40 },
  { name: "11", current: 52, previous: 32 },
  { name: {label: "12", isLatest: true}, current: 58, previous: 35 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-1 lg:col-span-2 px-4 md:px-6 pt-6 pb-10 md:pb-14 rounded-none border-0 md:border-r border-[#C8CBD9] shadow-none mb-0 overflow-hidden">
      <CardHeader className="flex flex-row items-start justify-between p-0 mb-6">
        <div className="space-y-1">
          <CardTitle className="text-sm font-bold text-[#A6ABC8]">Revenue</CardTitle>
          <div className="flex flex-col gap-1">
            <span className="text-2xl font-bold text-[#1B2559]">IDR 7.852.000</span>
            <div className="flex items-center gap-1.5 text-[11px] font-bold">
               <span className="text-[#05CD99]">↑ 2.1%</span>
               <span className="text-[#A6ABC8]">vs last week</span>
            </div>
          </div>
          <CardDescription className="text-[11px] font-medium text-[#A6ABC8] pt-4">Sales from 1-12 Dec, 2020</CardDescription>
        </div>
        <Button variant="outline" className="cursor-pointer 
        rounded-xl px-4 h-9 border-slate-100/50 text-[#5A67BA] font-bold hover:bg-slate-50 bg-[#F4F7FE] shadow-none text-xs">
          View Report
        </Button>
      </CardHeader>
      <CardContent className="h-[220px] p-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={(props) => {
                const { x, y, payload } = props;
                const val = typeof payload.value === 'object' ? payload.value.label : payload.value;
                return (
                  <text x={x} y={y + 16} fill="#A6ABC8" fontSize={10} fontWeight={600} textAnchor="middle">
                    {val}
                  </text>
                );
              }}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}
            />
            <Bar 
              dataKey="current" 
              fill="#5A6ACF" 
              radius={[4, 4, 0, 0]} 
              barSize={10}
            />
            <Bar 
              dataKey="previous" 
              fill="#E9EDF7" 
              radius={[4, 4, 0, 0]} 
              barSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center gap-6 text-[10px] font-bold mt-4 ml-6">
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
