"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface RatingCircleProps {
  value: number
  label: string
  subLabel: string
  color: string
  size?: number
}

function RatingCircle({ value, label, subLabel, color, size = 120 }: RatingCircleProps) {
  const radius = size / 2 - 10
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="stroke-muted fill-none"
          strokeWidth="8"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className="fill-none transition-all duration-1000 ease-out"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-xl font-bold text-white">{value}%</span>
        <span className="text-xs text-white/90">{subLabel}</span>
      </div>
    </div>
  )
}

export function RatingSection() {
  return (
    <Card className="col-span-1 p-4 md:p-6 border-0 rounded-none shadow-none border-[#C8CBD9] relative overflow-hidden h-full flex flex-col items-center">
      <CardHeader className="p-0 mb-8 w-full">
        <CardTitle className="text-sm font-bold text-[#1B2559]">Your Rating</CardTitle>
        <CardDescription className="text-[11px] font-medium text-[#A6ABC8]">Adipiscing elit, sed do eiusmod tempor</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 w-full min-h-[300px] flex items-center justify-center p-0">
        <div className="relative w-full max-w-[280px] aspect-square">
          {/* Hygiene Circle */}
          <div className="absolute top-[5%] left-[15%] z-20 w-[35%]">
            <div className="relative aspect-square">
              <svg className="absolute -inset-[15%] w-[130%] h-[130%] overflow-visible">
                <circle
                  cx="50%"
                  cy="50%"
                  r="46%"
                  fill="none"
                  stroke="#6463D6"
                  strokeWidth="1.5"
                  strokeDasharray="75% 25%"
                  className="rotate-[-130deg] origin-center"
                />
              </svg>
              <div className="absolute inset-0 rounded-full bg-[#6463D6] flex flex-col items-center justify-center text-white border-2 border-white shadow-lg">
                <span className="text-xs md:text-sm lg:text-base font-bold">85%</span>
                <span className="text-[7px] md:text-[8px] font-bold opacity-80 uppercase tracking-tighter text-center px-1">Hygiene</span>
              </div>
            </div>
          </div>

          {/* Packaging Circle */}
          <div className="absolute bottom-[10%] left-0 z-30 w-[35%]">
            <div className="relative aspect-square">
              <svg className="absolute -inset-[15%] w-[130%] h-[130%] overflow-visible">
                <circle
                  cx="50%"
                  cy="50%"
                  r="46%"
                  fill="none"
                  stroke="#2FBFDE"
                  strokeWidth="1.5"
                  strokeDasharray="65% 35%"
                  className="-rotate-90 origin-center"
                />
              </svg>
              <div className="absolute inset-0 rounded-full bg-[#2FBFDE] flex flex-col items-center justify-center text-white border-2 border-white shadow-lg">
                <span className="text-xs md:text-sm lg:text-base font-bold">92%</span>
                <span className="text-[7px] md:text-[8px] font-bold opacity-80 uppercase tracking-tighter text-center px-1">Packaging</span>
              </div>
            </div>
          </div>

          {/* Food Taste Circle (Large) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-[15%] -translate-y-[45%] z-10 w-[55%]">
            <div className="relative aspect-square">
              <svg className="absolute -inset-[15%] w-[130%] h-[130%] overflow-visible">
                <circle
                  cx="50%"
                  cy="50%"
                  r="46%"
                  fill="none"
                  stroke="#F99C30"
                  strokeWidth="1.5"
                  strokeDasharray="80% 20%"
                  className="rotate-[-110deg] origin-center"
                />
              </svg>
              <div className="absolute inset-0 rounded-full bg-[#F99C30] flex flex-col items-center justify-center text-white border-4 border-white shadow-xl">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold">85%</span>
                <span className="text-[9px] md:text-[10px] lg:text-[11px] font-bold opacity-80 uppercase tracking-tighter text-center">Food Taste</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
