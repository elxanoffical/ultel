"use client";
import { useState } from "react";
import Fiber from "@/app/components/fiber";
import ADSL from "@/app/components/adsl";
import KabelTV from "@/app/components/kabelTV"; 
import Telefon from "@/app/components/telefon";

export default function Xidmetler() {
    
  const [activeTab, setActiveTab] = useState("fiber");

  const tabs = [
    { id: "fiber", label: "internet/Fiber" },
    { id: "adsl", label: "internet/ADSL" },
    { id: "tv", label: "Kabel TV" },
    { id: "telefon", label: "Telefonİya" },
  ];

  return (
    <section className="py-10 px-4 h-auto max-w-7xl mx-auto text-center">
    
      <div className="mb-10 w-full flex justify-center">
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-4 bg-gray-200 rounded-full p-1 max-w-full sm:max-w-2xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 min-w-[150px] ${
                activeTab === tab.id
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      
      <div className="text-left ">
        {activeTab === "fiber" && <Fiber />}
        {activeTab === "adsl" && <ADSL />}
        {activeTab === "tv" && <KabelTV />} 
        {activeTab === "telefon" && <Telefon />}
      </div>
    </section>
  );
}
