"use client"

import { useState } from "react"
import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { RevenueChart } from "@/components/RevenueChart"
import { OrderTimeChart } from "@/components/OrderTimeChart"
import { RatingSection } from "@/components/RatingSection"
import { MostOrderedFood } from "@/components/MostOrderedFood"
import { OrderStatsChart } from "@/components/OrderStatsChart"

export default function Home() {
  const [activeTab, setActiveTab] = useState("Dashboard")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      <Sidebar 
        activeItem={activeTab} 
        onItemClick={(item) => {
          setActiveTab(item)
          setIsSidebarOpen(false)
        }} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="lg:pl-64 pt-6 md:pt-10 px-4 md:px-10 pb-16 bg-white w-full">
          <div className="max-w-[1600px] mx-auto">
            <div className="px-2 mb-6">
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#1F384C] tracking-tight">{activeTab}</h1>
            </div>

            {activeTab === "Dashboard" ? (
              <div className="space-y-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 border-x border-b border-[#C8CBD9]">
                  <RevenueChart />
                  <OrderTimeChart />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-x border-b border-[#C8CBD9]">
                  <RatingSection />
                  <MostOrderedFood />
                  <OrderStatsChart />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[400px] bg-white rounded-3xl shadow-sm border border-[#E2E8F0] p-6 md:p-20 animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-[#E9EDF7] rounded-full flex items-center justify-center text-5xl mb-6">
                🚀
              </div>
              <h2 className="text-2xl font-black text-[#1B2559] mb-3">Coming Soon!</h2>
              <p className="text-[#A3AED0] font-medium text-center max-w-sm">
                We're working hard to bring you the {activeTab} module. Stay tuned for exciting new features!
              </p>
            </div>
          )}
        </div>
        </main>
      </div>
    </div>
  )
}
