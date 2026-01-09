"use client"

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const data = [
  { name: "Afternoon", value: 40, color: "#5A67BA" },
  { name: "Evening", value: 32, color: "#8E9FFE" },
  { name: "Morning", value: 28, color: "#D1D9FF" },
]

export function OrderTimeChart() {
  return (
    <Card className="col-span-1 px-4 md:px-6 pt-6 pb-10 md:pb-14 rounded-none border-0 md:border-l border-[#C8CBD9] shadow-none mb-0 overflow-hidden relative">  
      <CardHeader className="flex flex-row items-center justify-between p-0 mb-2">
        <div className="space-y-1">
          <CardTitle className="text-sm font-bold text-[#000000]">Order Time</CardTitle>
          <CardDescription className="text-[11px] font-medium text-[#A6ABC8]">From 1-6 Dec, 2020</CardDescription>
        </div>
        <Button variant="outline" className="rounded-xl px-4 h-9 border-slate-100/50 text-[#5A67BA] font-bold 
        cursor-pointer hover:bg-slate-50 bg-[#F4F7FE] shadow-none text-xs">
          View Report
        </Button>
      </CardHeader>
      <CardContent className="h-[280px] relative p-0 flex flex-col justify-between">
        <div className="h-[180px] mt-4 relative min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={50}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip cursor={{ fill: 'transparent' }} />
            </PieChart>
          </ResponsiveContainer>
          
          <div className="absolute top-0 right-0 sm:top-[0%] lg:left-[60%] bg-[#2B2B4B] text-white p-3 lg:p-4 rounded-md
           shadow-2xl z-20 min-w-[130px] lg:min-w-[150px] border border-white/10 scale-90 lg:scale-100 origin-top-right">
            <div className="text-[11px] font-bold text-white mb-1">Afternoon</div>
            <div className="text-[10px] text-white/40 mb-2">1pm - 4pm</div>
            <div className="font-bold text-lg leading-tight">1.890 orders</div>
            <div className="absolute -bottom-1 left-4 w-3 h-3 bg-[#2B2B4B] rotate-45 transform" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 px-2 text-[10px] font-bold pb-2">
          {data.map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-[#A6ABC8]">{item.name}</span>
              </div>
              <span className="text-[#1B2559] text-xs">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
