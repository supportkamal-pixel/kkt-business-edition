import { useState } from "react";

export default function Munimji() {
  const [chatInput, setChatInput] = useState("");

  const alerts = [
    { type: "warning", text: "Rahul Traders ka ₹45,000 pichle 18 din se baaki hai. WhatsApp reminder bhejein?", icon: "⚠️" },
    { type: "success", text: "Is hafte aapki sales pichle hafte se 22% zyada hai! Top item: Plywood 18mm.", icon: "📈" },
    { type: "danger", text: "Stock Alert: Fevicol SH 1kg sirf 4 bache hain. Supplier ko order lagayein?", icon: "🚨" }
  ];

  return (
    <div className="w-full h-full flex flex-col opacity-100 transition-opacity duration-500">
      
      {/* Header */}
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="font-tiro text-3xl text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-kkt-gold to-kkt-greenLight mb-1 drop-shadow-md">Munimji AI</h2>
          <p className="text-xs text-gray-400 font-cinzel tracking-[0.2em]">ARTIFICIAL INTELLIGENCE ADVISOR</p>
        </div>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-xl shadow-inner">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
          <span className="font-cinzel text-[10px] tracking-widest text-green-400">ENGINE ONLINE</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 overflow-hidden">
        
        {/* Left: AI Face & Health Score */}
        <div className="col-span-1 bg-white/2 border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden group">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-linear-to-b from-blue-900/10 to-kkt-gold/5 pointer-events-none"></div>
          
          {/* Glowing AI Orb */}
          <div className="relative w-40 h-40 mb-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute inset-4 bg-kkt-gold/20 rounded-full blur-xl animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="relative w-24 h-24 bg-linear-to-tr from-blue-900 to-kkt-navy border-2 border-kkt-gold/50 rounded-full shadow-[0_0_30px_rgba(255,179,0,0.4)] flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500">
              🧠
            </div>
          </div>

          <h3 className="font-cinzel tracking-widest text-sm text-gray-300 mb-2">BUSINESS HEALTH</h3>
          <div className="font-mono text-6xl text-kkt-greenLight drop-shadow-[0_0_15px_rgba(165,214,167,0.5)] mb-2">
            85<span className="text-2xl text-gray-500">/100</span>
          </div>
          <p className="text-xs text-center text-gray-400 font-tiro mt-4 leading-relaxed">
            "Aapka cashflow ekdum strong hai, par udhaari vasoolne par dhyan dena hoga."
          </p>
        </div>

        {/* Right: AI Insights & Chat */}
        <div className="col-span-1 lg:col-span-2 flex flex-col gap-6 h-full">
          
          {/* Insights List */}
          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 flex-1 overflow-y-auto space-y-4 shadow-sm">
            <h3 className="font-cinzel text-[11px] font-bold tracking-[0.2em] text-kkt-gold mb-4 border-b border-white/5 pb-2">
              ⚡ LIVE INSIGHTS & ALERTS
            </h3>
            
            {alerts.map((alert, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-black/20 p-4 rounded-2xl border border-white/5 hover:bg-white/5 hover:border-white/10 transition-colors">
                <div className="text-2xl drop-shadow-md">{alert.icon}</div>
                <div className="flex-1">
                  <p className="text-sm text-gray-300 font-tiro leading-relaxed mb-3">{alert.text}</p>
                  <div className="flex gap-3">
                    <button className="px-4 py-1.5 bg-white/10 hover:bg-kkt-gold hover:text-black border border-white/10 rounded-lg text-[10px] font-cinzel tracking-widest transition-all">
                      ACTION LEY
                    </button>
                    <button className="px-4 py-1.5 text-gray-500 hover:text-white rounded-lg text-[10px] font-cinzel tracking-widest transition-colors">
                      IGNORE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Chat Input */}
          <div className="bg-black/30 border border-white/10 rounded-3xl p-2 flex items-center gap-3 shadow-inner">
            <div className="pl-4 text-xl">🤖</div>
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Munimji se poochein (ex: Aaj ki total sale kitni hui?)" 
              className="flex-1 bg-transparent border-none text-sm text-white placeholder-gray-500 focus:outline-none font-tiro"
            />
            <button className="bg-linear-to-r from-kkt-navy to-blue-900 border border-blue-500/30 text-blue-300 px-6 py-3 rounded-2xl font-cinzel text-[10px] tracking-widest font-bold hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-105 transition-all">
              POOCHEIN
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}