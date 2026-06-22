// React imports
import { useState } from "react";
import Billing from "./Billing.tsx";
import Munimji from "./Munimji.tsx";

function App() {
  // Navigation state handle karne ke liye
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    // Main Wrapper - Ultra Pro Dark Theme
    <div className="flex h-screen bg-kkt-dark text-white font-sans overflow-hidden">
      
      {/* SIDEBAR SECTION */}
      <div className="w-64 bg-linear-to-b from-kkt-navy to-kkt-dark border-r border-kkt-gold/10 flex flex-col">
        
        {/* Brand Header */}
        <div className="p-6 border-b border-white/5 text-center flex flex-col items-center">
          
          {/* KKT Logo with Kaam Kamai Tarakki */}
          <div className="flex justify-center gap-4 mb-1">
            {/* K - Kaam (Blue) */}
            <div className="flex flex-col items-center">
              <span className="font-cinzel text-5xl font-black text-blue-400 drop-shadow-md leading-none">K</span>
              <span className="font-tiro text-[13px] text-blue-300 tracking-widest -mt-1.5">काम</span>
            </div>
            
            {/* K - Kamai (Gold) */}
            <div className="flex flex-col items-center">
              <span className="font-cinzel text-5xl font-black text-kkt-gold drop-shadow-[0_0_15px_rgba(255,179,0,0.3)] leading-none">K</span>
              <span className="font-tiro text-[13px] text-kkt-gold tracking-widest -mt-1.5">कमाई</span>
            </div>
            
            {/* T - Tarakki (Green) */}
            <div className="flex flex-col items-center">
              <span className="font-cinzel text-5xl font-black text-kkt-greenLight drop-shadow-md leading-none">T</span>
              <span className="font-tiro text-[13px] text-kkt-greenLight tracking-widest -mt-1.5">तरक्की</span>
            </div>
          </div>

          <p className="font-tiro text-gray-400 mt-2 text-xs tracking-wider">
            काम तुम्हारा। हिसाब हमारा।
          </p>
          
          {/* Glowing & Live Business Edition Badge */}
          <div className="relative mt-4 mb-2 group">
            {/* Peeli chamak jo hilti rahegi (Pulse effect) */}
            <div className="absolute inset-0 bg-kkt-gold/40 rounded-full blur-md animate-pulse"></div>
            <span className="relative inline-block px-4 scroll-py-1.5 bg-linear-to-r from-kkt-goldDark/30 via-kkt-gold/20 to-kkt-goldDark/30 border border-kkt-gold/60 rounded-full font-cinzel text-[20px] font-black tracking-[0.2em] text-kkt-gold shadow-[0_0_5px_rgba(255,179,0,0.6)]">
              BUSINESS EDITION
            </span>
          </div>
        </div>

        {/* Dynamic Navigation Menu (Clean 3D Depth Effect) */}
        <div className="flex-1 overflow-y-auto py-4 px-4 space-y-3">
          {["Dashboard", "Billing", "Munimji AI", "Inventory", "Reports"].map((item) => (
            <button
              key={item}
              onClick={() => setActiveMenu(item)}
              className={`w-full text-left px-5 py-3.5 rounded-xl transition-all duration-300 font-cinzel tracking-widest text-sm font-bold ${
                activeMenu === item 
                  ? "bg-white/5 border border-kkt-gold/40 text-kkt-gold scale-105 -translate-y-1 shadow-[0_15px_30px_rgba(0,0,0,0.6)] z-10" 
                  : "bg-kkt-darkCard border border-white/5 text-gray-400 hover:text-white hover:border-white/20 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:bg-white/5 z-0"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

     {/* MAIN CONTENT AREA - ULTRA PRO GLASSMORPHISM & ANIMATION */}
      <div className="flex-1 flex flex-col relative overflow-hidden bg-linear-to-br from-kkt-dark via-[#0a0e1a] to-kkt-navy/20">
        
        {/* ANIMATED BACKGROUND BLOBS (Matches Sidebar Colors) */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-kkt-navyLight/30 rounded-full mix-blend-screen blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-125 h-125 bg-kkt-gold/10 rounded-full mix-blend-screen blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-72 h-72 bg-kkt-greenLight/10 rounded-full mix-blend-screen blur-[80px] animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* Top Header Bar - Glass Effect */}
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-white/2 backdrop-blur-xl z-20 shadow-sm">
          <h2 className="font-cinzel text-lg tracking-widest text-kkt-gold drop-shadow-md">
            {activeMenu}
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-[12px] text-kkt-greenLight font-cinzel tracking-[0.3em] bg-kkt-greenLight/10 px-3 py-1 rounded-full border border-kkt-greenLight/20">
              OFFLINE MODE READY
            </span>
            {/* User Profile Premium Button */}
            <div className="w-8 h-8 rounded-full bg-linear-to-tr from-kkt-navyLight to-kkt-navy border border-kkt-gold/40 flex items-center justify-center text-xs font-bold text-kkt-gold shadow-[0_0_10px_rgba(255,179,0,0.2)] hover:scale-110 transition-transform cursor-pointer">
              KKT
            </div>
          </div>
        </header>

        {/* Dynamic Body Content */}
        <main className="flex-1 p-8 overflow-y-auto z-20">
          
          {activeMenu === "Billing" ? (
            <Billing />
          ) : activeMenu === "Munimji AI" ? (
            <Munimji />
          ) : (
            /* PREMIUM GLASS CARD DESIGN */
            <div className="relative w-full h-full bg-white/3 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 flex flex-col items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] group overflow-hidden">
              
              {/* Card Inner Shine Effect on Hover */}
              <div className="absolute inset-0 bg-linear-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
              
              <span className="text-7xl mb-6 drop-shadow-[0_0_25px_rgba(255,179,0,0.3)] group-hover:scale-110 transition-transform duration-500 cursor-default">🕉️</span>
              
              <h3 className="font-tiro text-4xl text-transparent bg-clip-text bg-linear-to-r from-kkt-gold via-white to-kkt-gold mb-4 drop-shadow-lg tracking-wide">
                Shree Ganeshay Namah
              </h3>
              
              <div className="w-24 h-px bg-linear-to-r from-transparent via-kkt-gold/50 to-transparent mb-6"></div>
              
              <p className="text-sm text-gray-300 font-cinzel tracking-[0.2em] text-center leading-loose">
                KKT BUSINESS EDITION ENGINE INITIALIZED <br/>
                <span className="text-kkt-greenLight mt-3 inline-block px-4 py-1 bg-kkt-greenLight/10 rounded-full border border-kkt-greenLight/20 shadow-sm">
                  MODULE: {activeMenu.toUpperCase()}
                </span>
              </p>
            </div>
          )}

        </main>
      </div>

    </div>
  );
}

export default App;