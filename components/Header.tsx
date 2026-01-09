import { Search, Bell, ChevronDown, Menu, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 md:h-20 bg-white border-b border-[#C8CBD9] flex items-center justify-between px-4 md:px-10 sticky top-0 z-30 w-full lg:pl-64 transition-all">
      <div className="flex items-center gap-2 md:gap-4 w-full max-w-lg">
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden text-[#1B2559]" 
          onClick={onMenuClick}
        >
          <Menu className="w-6 h-6" />
        </Button>
        <div className="relative flex-1">
          <Input 
            placeholder="Search" 
            className="pl-4 md:pl-6 pr-10 md:pr-12 h-10 md:h-12 border-none bg-[#F6F6FB] rounded w-full text-[#A6ABC8] placeholder:text-[#A6ABC8] 
            font-medium transition-all text-sm"
          />
          <Search className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-[#A6ABC8] w-4 h-4 cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-8 pr-0 md:pr-4">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3 cursor-pointer group">
            <div className="h-9 w-9 md:h-12 md:w-12 rounded-full bg-[#FFE6CC] flex items-center justify-center overflow-hidden shrink-0">
               <Image 
                 src="/images/burger.png" 
                 alt="Profile" 
                 width={24}
                 height={24}
                 className="object-contain w-5 h-5 md:w-6 md:h-6"
               />
            </div>
            <span className="hidden lg:block text-sm font-bold text-[#1B2559] whitespace-nowrap">Delicious Burger</span>
            <ChevronDown className="hidden lg:block w-4 h-4 text-[#A6ABC8] group-hover:text-[#1B2559] transition-colors" />
          </div>
          
          <Button variant="ghost" size="icon" className="h-9 w-9 md:h-10 md:w-10 relative text-[#A6ABC8] hover:text-[#5A67BA] hover:bg-[#F4F7FE] rounded-full">
            <Bell className="w-5 h-5 md:w-6 md:h-6" />
            <span className="absolute top-2 right-2 md:top-2.5 md:right-2.5 w-2 h-2 bg-[#FF5B5B] rounded-full border-2 border-white" />
          </Button>
        </div>
      </div>
    </header>
  )
}
