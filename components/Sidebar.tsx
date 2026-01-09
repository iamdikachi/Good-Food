"use client"

import {
  ShoppingCart,
  FileText,
  MessageSquare,
  Wallet,
  Settings,
  Users,
  BarChart2,
  Ticket,
  LogOut,
  Info,
  User,
  X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ activeItem, onItemClick, isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { name: "Dashboard", icon: BarChart2 },
    { name: "Food Order", icon: ShoppingCart },
    { name: "Manage Menu", icon: FileText },
    { name: "Customer Review", icon: MessageSquare },
  ]

  const otherItems = [
    { name: "Settings", icon: Settings },
    { name: "Payment", icon: Wallet },
    { name: "Accounts", icon: User },
    { name: "Help", icon: Info },
  ]

  const SidebarItem = ({ item }: { item: typeof menuItems[0] & { className?: string } }) => {
    const isActive = activeItem === item.name
    const Icon = item.icon

    return (
      <Button
        variant="ghost"
        className={cn(
          "cursor-pointer w-full justify-start gap-4 px-3 h-14 font-bold text-sm transition-all rounded-xl relative",
          isActive
            ? "bg-[#5A67BA15] text-[#5A67BA]"
            : "text-[#A6ABC8] hover:bg-[#F4F7FE] hover:text-[#5A67BA]",
          item.className
        )}
        onClick={() => onItemClick(item.name)}
      >
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
          isActive ? "bg-[#5A67BA] text-white" : " text-[#A6ABC8]"
        )}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-[14px] font-semibold tracking-tight">{item.name}</span>
      </Button>
    )
  }

  return (
    <div className={cn(
      "w-64 fixed inset-y-0 left-0 h-full bg-[#F1F2F7] border-r border-[#E2E8F0] flex flex-col overflow-y-auto z-40 transition-all duration-300 no-scrollbar lg:translate-x-0",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="pt-11 px-8 border-b border-b-[#C8CBD9] mb-8 relative">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-2 top-4 lg:hidden text-[#A6ABC8]" 
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </Button>
        <div className="flex items-center gap-3 relative bottom-5">
          <div className="bg-[#5A67BA] p-2 rounded-full w-9 h-9 flex items-center justify-center text-white text-lg font-bold">
            G
          </div>
          <span className="text-xl font-black text-[#5A67BA] tracking-tight ">GOODFOOD</span>
        </div>
      </div>

      <div className="flex-1 px-4 space-y-12">
        <div>
          <h3 className="text-[11px] text-[#A6ABC8] font-bold mb-6 px-4 uppercase tracking-widest">
            Menu
          </h3>
          <nav className="space-y-3">
            {menuItems.map((item) => (
              <SidebarItem key={item.name} item={item} />
            ))}
          </nav>
        </div>

        <div>
          <h3 className="text-[11px] text-[#A6ABC8] font-bold mb-6 px-4 uppercase tracking-widest">
            Others
          </h3>
          <nav className="space-y-3">
            {otherItems.map((item) => (
              <SidebarItem key={item.name} item={item} />
            ))}
          </nav>
        </div>
      </div>

      <div className="p-8">
        <div className="bg-[#5A67BA] rounded-2xl p-6 text-white text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110" />
          <h4 className="font-bold text-sm relative z-10 mb-2">Upgrade to Pro</h4>
          <p className="text-[10px] opacity-80 relative z-10 mb-4">Get more accurate analytics & insights</p>
          <Button variant="secondary" className="cursor-pointer w-full h-9 rounded-xl font-bold text-xs bg-white text-[#5A67BA] hover:bg-slate-50 transition-colors relative z-10">
            Go Premium
          </Button>
        </div>
      </div>

      <div className="px-4 pb-8">
        <Button
          variant="ghost"
          className="w-full justify-start gap-4 px-6 h-12 font-bold text-sm text-[#FF5B5B] hover:bg-red-50 hover:text-[#FF5B5B] transition-all rounded-xl"
          onClick={() => onItemClick("Logout")}
        >
          <LogOut className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </div>
  )
}
