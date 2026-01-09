import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const items = [
  { name: "Fresh Salad Bowl", price: "IDR 45.000", image: "./images/salad.png", initials: "FS" },
  { name: "Chicken Noodles", price: "IDR 75.000", image: "./images/noodles.png", initials: "CN" },
  { name: "Smoothie Fruits", price: "IDR 45.000", image: "./images/smoothie.png", initials: "SF" },
  { name: "Hot Chicken Wings", price: "IDR 45.000", image: "./images/chicken.png", initials: "HW" },
]

export function MostOrderedFood() {
  return (
    <Card className="col-span-1 p-4 md:p-6 rounded-none shadow-none border-0 md:border-l border-[#C8CBD9] relative h-full">
      <CardHeader className="p-0 mb-6">
        <CardTitle className="text-sm font-bold text-[#1B2559]">Most Ordered Food</CardTitle>
        <CardDescription className="text-[11px] font-medium text-[#A6ABC8]">Adipiscing elit, sed do eiusmod tempor</CardDescription>
      </CardHeader>
      <CardContent className="mt-8 space-y-0 p-0">
        {items.map((item, index) => (
          <div key={item.name} className={cn(
            "flex items-center justify-between py-4",
            index !== items.length - 1 && "border-b border-[#F4F7FE]"
          )}>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="h-10 w-10 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-100 ring-1 ring-black/5">
                  <AvatarImage src={item.image} className="object-cover" />
                  <AvatarFallback className="bg-[#F4F7FE] text-[#5A67BA] text-[10px] font-bold">{item.initials}</AvatarFallback>
                </Avatar>
              </div>
              <span className="font-bold text-xs text-[#273240]">{item.name}</span>
            </div>
            <span className="text-[#A6ABC8] text-[11px] font-bold">{item.price}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
