import { useState } from "react";
import { TemplateRegistry } from "./components/templates";

export default function Billing() {
  // Konsa bill open karna hai, uski state memory
  const [selectedBill, setSelectedBill] = useState<string | null>(null);

  // --- RECOVERED MEMORY STATES ---
  // Customer State (Smart GST Engine ke liye)
  const [customerState, setCustomerState] = useState("Maharashtra (27)");
  
  // Preview Modal on/off karne ki memory
  const [showPreview, setShowPreview] = useState(false);
  // Template Switcher Engine ki memory (Default: premium1)
  const [invoiceTemplate, setInvoiceTemplate] = useState("premium1");
  // Dynamic Branding Engine (Logo color auto-detect memory)
  const [brandColor, setBrandColor] = useState("#FFB300"); // Default: KKT Gold
  // -------------------------------

  // --- ULTRA PRO CALCULATION ENGINE LOGIC ---
  
  // 1. Items state memory jisme ab discount bhi shamil hai
  const [items, setItems] = useState([
    { id: 1, name: "", hsn: "", qty: 1, rate: 0, discount: 0, gst: 18 }
  ]);

  // 2. Payment modes track karne ke liye state
  const [paymentMode, setPaymentMode] = useState("Cash");

  // 3. Naya khali item row jodne ka sateek function
  const addItem = () => {
    setItems([...items, { id: Date.now(), name: "", hsn: "", qty: 1, rate: 0, discount: 0, gst: 18 }]);
  };

  // 4. Kisi specific row ko poori tarah delete karne ka function
  const deleteItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  // 5. Input fields ke badalte hi realtime data memory mein save karne ka logic
  const updateItem = (id: number, field: string, value: string | number) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  // 6. Advanced Auto Mathematics: Gross amount calculate karne ka formula
  const subTotal = items.reduce((sum, item) => sum + (item.qty * item.rate), 0);
  
  // 7. Total discount jo har item ke rate aur qty par alag se nikalega
  const totalDiscount = items.reduce((sum, item) => {
    const itemGross = item.qty * item.rate;
    return sum + (itemGross * (item.discount || 0) / 100);
  }, 0);

  // 8. Taxable Value jispar asli GST lagega (Gross minus Discount)
  const taxableAmount = subTotal - totalDiscount;

  // 9. Asli dynamic GST calculation jo discount ke baad wale amount par lagega
  const gstAmount = items.reduce((sum, item) => {
    const itemGross = item.qty * item.rate;
    const itemDisc = itemGross * (item.discount || 0) / 100;
    const itemTaxable = itemGross - itemDisc;
    return sum + (itemTaxable * item.gst / 100);
  }, 0);

  // 10. Net Total aur auto mathematical Round-off system
  const finalRawTotal = taxableAmount + gstAmount;
  const total = Math.round(finalRawTotal);
  const roundOff = total - finalRawTotal;
  // ------------------------------------------

  // Roadmap ke hisaab se 8 prakar ke bills
  const billTypes = [
    { icon: "🧾", name: "GST Tax Invoice", desc: "Registered customer ko. IRN + QR code auto.", primary: true },
    { icon: "📋", name: "Bill of Supply", desc: "Unregistered customer ya exempt goods ke liye.", primary: false },
    { icon: "📝", name: "Proforma Invoice", desc: "Advance mein quote. One click se real invoice convert.", primary: false },
    { icon: "🚚", name: "Delivery Challan", desc: "Maal bhejne ke liye. E-way bill link hoga.", primary: false },
    { icon: "↩️", name: "Credit Note", desc: "Maal wapas aaya — auto reverse entry, GST reversal.", primary: false },
    { icon: "↗️", name: "Debit Note", desc: "Extra charge karna ho. Original bill se link.", primary: false },
    { icon: "📦", name: "Purchase Order", desc: "Supplier ko order bhejo. PO → GRN flow.", primary: false },
    { icon: "💬", name: "Quotation / Estimate", desc: "Customer ko price quote. Approve hone par invoice.", primary: false },
  ];

  // AGAR KOI BHI BILL SELECTED HAI TOH MASTER FORM DIKHAO
  if (selectedBill !== null) {
    return (
      <div className="w-full h-full flex flex-col opacity-100 transition-opacity duration-500">
        
        {/* Form Header & Back Button */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedBill(null)}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-cinzel tracking-widest text-gray-300 hover:text-kkt-gold transition-all"
            >
              ← BACK
            </button>
            <h2 className="font-tiro text-2xl text-kkt-gold drop-shadow-md">
              {selectedBill.toUpperCase()}
            </h2>
          </div>
          <div className="text-right">
            <p className="text-xs font-cinzel tracking-widest text-gray-500 mb-1">
              {selectedBill === "Quotation / Estimate" ? "QUOTE NO:" : 
               selectedBill === "Purchase Order" ? "PO NO:" : 
               selectedBill === "Delivery Challan" ? "CHALLAN NO:" : "INVOICE NO:"} 
              <span className="text-white ml-2">KKT/26-27/001</span>
            </p>
            <p className="text-[10px] text-kkt-greenLight tracking-wider">Date: 21-Jun-2026</p>
          </div>
        </div>

        {/* Scrollable Form Area */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-6">
          
          {/* CUSTOMER SECTION */}
          <div className="p-6 bg-white/2 border border-white/5 rounded-2xl shadow-sm">
            <h3 className="font-cinzel text-[10px] tracking-[0.2em] text-kkt-gold mb-4 flex items-center gap-2">
              <span className="text-lg">👤</span> CUSTOMER DETAILS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label className="text-[9px] font-cinzel text-gray-500 tracking-widest mb-1.5">PARTY NAME / MOBILE</label>
                <input type="text" placeholder="Search or Enter Name..." className="bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-kkt-gold/50 focus:bg-white/5 transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="text-[9px] font-cinzel text-gray-500 tracking-widest mb-1.5">GSTIN</label>
                <input type="text" placeholder="e.g. 27AAAAA0000A1Z5" className="bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white uppercase focus:outline-none focus:border-kkt-gold/50 focus:bg-white/5 transition-all" />
              </div>
              <div className="flex flex-col">
                <label className="text-[9px] font-cinzel text-gray-500 tracking-widest mb-1.5">STATE OF SUPPLY (AUTO DETECT)</label>
                <select 
                  value={customerState} 
                  onChange={(e) => setCustomerState(e.target.value)}
                  className="bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-300 focus:outline-none focus:border-kkt-gold/50 transition-all appearance-none"
                >
                  <option value="Maharashtra (27)">Maharashtra (27) - CGST + SGST</option>
                  <option value="Delhi (07)">Delhi (07) - IGST</option>
                  <option value="Gujarat (24)">Gujarat (24) - IGST</option>
                </select>
              </div>
            </div>
          </div>

          {/* ITEM SECTION */}
          <div className="p-6 bg-white/2 border border-white/5 rounded-2xl shadow-sm">
            <h3 className="font-cinzel text-[10px] tracking-[0.2em] text-kkt-gold mb-4 flex items-center gap-2">
              <span className="text-lg">📦</span> ITEM DETAILS
            </h3>
            
            {/* Dynamic Table Wrapper - Mobile Responsive */}
            <div className="w-full overflow-x-auto custom-scrollbar pb-3">
              <div className="min-w-200">
                
                {/* Dynamic Table Header - Packed with Columns */}
                <div className="grid grid-cols-12 gap-2 text-[9px] md:text-[10px] font-cinzel text-gray-500 tracking-wider mb-2 px-2">
                  <div className="col-span-3">ITEM NAME</div>
                  <div className="col-span-2">HSN/SAC</div>
                  <div className="col-span-1 text-center">QTY</div>
                  <div className="col-span-2 text-right">RATE (₹)</div>
                  <div className="col-span-1 text-center">DISC %</div>
                  <div className="col-span-1 text-center">GST %</div>
                  <div className="col-span-2 text-right">FINAL AMT (₹)</div>
                </div>

                {/* Dynamic Item Rows */}
                {items.map((item) => {
                  const gross = item.qty * item.rate;
                  const discAmt = gross * (item.discount || 0) / 100;
                  const taxable = gross - discAmt;
                  const tax = taxable * (item.gst || 0) / 100;
                  const rowFinalAmount = taxable + tax;

                  return (
                    <div key={item.id} className="grid grid-cols-12 gap-2 items-center mb-3 group/row bg-white/1 p-1 rounded-xl hover:bg-white/3 transition-all">
                      <div className="col-span-3 relative flex items-center gap-2">
                        <button 
                          onClick={() => deleteItem(item.id)}
                          disabled={items.length === 1}
                          className="text-gray-600 hover:text-red-400 text-xs transition-colors disabled:opacity-20 shrink-0"
                        >
                          🗑️
                        </button>
                        <input type="text" placeholder="Item Name..." value={item.name} onChange={(e) => updateItem(item.id, 'name', e.target.value)} className="w-full bg-black/30 border border-white/5 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-kkt-gold/40 focus:bg-white/5" />
                      </div>
                      <div className="col-span-2">
                        <input type="text" placeholder="HSN" value={item.hsn} onChange={(e) => updateItem(item.id, 'hsn', e.target.value)} className="w-full bg-black/30 border border-white/5 rounded-xl px-3 py-2 text-xs text-white text-center focus:outline-none focus:border-kkt-gold/40" />
                      </div>
                      <div className="col-span-1">
                        <input type="number" min="1" value={item.qty} onChange={(e) => updateItem(item.id, 'qty', parseFloat(e.target.value) || 0)} className="w-full bg-black/30 border border-white/5 rounded-xl py-2 text-xs text-white text-center focus:outline-none focus:border-kkt-gold/40" />
                      </div>
                      <div className="col-span-2">
                        <input type="number" placeholder="0.00" value={item.rate || ''} onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)} className="w-full bg-black/30 border border-white/5 rounded-xl px-3 py-2 text-xs text-white text-right focus:outline-none focus:border-kkt-gold/40" />
                      </div>
                      <div className="col-span-1">
                        <input type="number" min="0" max="100" placeholder="0" value={item.discount || ''} onChange={(e) => updateItem(item.id, 'discount', parseFloat(e.target.value) || 0)} className="w-full bg-black/30 border border-white/5 rounded-xl py-2 text-xs text-white text-center focus:outline-none focus:border-kkt-gold/40" />
                      </div>
                      <div className="col-span-1">
                        <select value={item.gst} onChange={(e) => updateItem(item.id, 'gst', parseFloat(e.target.value))} className="w-full bg-black/30 border border-white/5 rounded-xl py-2 text-xs text-gray-300 text-center focus:outline-none focus:border-kkt-gold/40 appearance-none">
                          <option value={18}>18%</option><option value={12}>12%</option><option value={5}>5%</option><option value={0}>0%</option>
                        </select>
                      </div>
                      <div className="col-span-2 text-right text-gray-300 font-mono text-xs pr-2">
                        {rowFinalAmount.toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <button onClick={addItem} className="mt-2 text-[9px] font-cinzel font-bold tracking-[0.2em] text-kkt-greenLight hover:text-white px-4 py-2 border border-kkt-greenLight/30 rounded-xl bg-kkt-greenLight/5 hover:bg-kkt-greenLight/20 transition-colors">
              + ADD ANOTHER ITEM
            </button>
          </div>

        </div>

        {/* BOTTOM TOTALS & ULTRA PRO ACTION BAR */}
        <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          
          {/* Left Block: Payment Mode Matrix Selection */}
          <div className="lg:col-span-5 p-4 bg-white/1 border border-white/5 rounded-2xl">
            <label className="text-[9px] font-cinzel text-gray-500 tracking-[0.2em] block mb-3">⚡ PAYMENT MODE MATRIX</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {["Cash", "UPI / Dynamic QR", "Credit (Udhaar)"].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setPaymentMode(mode)}
                  className={`py-2 px-3 rounded-xl text-[10px] font-bold font-cinzel tracking-wider border transition-all ${
                    paymentMode === mode 
                      ? "bg-kkt-gold/10 border-kkt-gold/40 text-kkt-gold shadow-md" 
                      : "bg-black/20 border-white/5 text-gray-400 hover:text-white"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
            
            {/* Action Buttons underneath payment options */}
            <div className="flex gap-3 mt-4">
              <button className="flex-1 py-3 bg-linear-to-r from-kkt-goldDark to-kkt-gold text-kkt-dark font-bold font-cinzel tracking-[0.2em] text-[10px] rounded-xl shadow-[0_5px_15px_rgba(255,179,0,0.2)] hover:scale-[1.02] transition-all">
                SAVE {selectedBill.toUpperCase()}
              </button>
              <button 
                type="button"
                onClick={() => setShowPreview(true)}
                className="py-3 px-6 bg-white/5 border border-white/10 text-white font-cinzel tracking-[0.2em] text-[10px] rounded-xl hover:bg-white/10 transition-colors"
              >
                PREVIEW
              </button>
            </div>
          </div>

          <div className="lg:col-span-2"></div>
          
          {/* Right Block: Complete Auto Mathematical Calculations Panel */}
          <div className="lg:col-span-5 bg-white/2 p-5 rounded-2xl border border-white/5 font-sans">
            <div className="flex justify-between text-xs text-gray-400 mb-2 tracking-wide"><span>Gross Sub Total:</span> <span className="font-mono text-white">₹ {subTotal.toFixed(2)}</span></div>
            <div className="flex justify-between text-xs text-red-400 mb-2 tracking-wide"><span>Total Discount (-) :</span> <span className="font-mono">₹ {totalDiscount.toFixed(2)}</span></div>
            <div className="flex justify-between text-xs text-gray-400 mb-2 border-t border-white/5 pt-2 tracking-wide"><span>Taxable Amount:</span> <span className="font-mono text-white">₹ {taxableAmount.toFixed(2)}</span></div>
            
            {/* Dynamic GST split configuration */}
            {customerState === "Maharashtra (27)" ? (
              <>
                <div className="flex justify-between text-xs text-gray-400 mb-2 tracking-wide"><span>CGST Split (Auto):</span> <span className="font-mono text-white">₹ {(gstAmount / 2).toFixed(2)}</span></div>
                <div className="flex justify-between text-xs text-gray-400 mb-2 tracking-wide"><span>SGST Split (Auto):</span> <span className="font-mono text-white">₹ {(gstAmount / 2).toFixed(2)}</span></div>
              </>
            ) : (
              <div className="flex justify-between text-xs text-gray-400 mb-2 tracking-wide"><span>IGST Config (Auto):</span> <span className="font-mono text-white">₹ {gstAmount.toFixed(2)}</span></div>
            )}
            
            <div className="flex justify-between text-xs text-gray-500 mb-3 tracking-wide"><span>Auto Round-Off:</span> <span className="font-mono">{roundOff >= 0 ? "+" : ""}{roundOff.toFixed(2)}</span></div>
            <div className="flex justify-between text-sm text-kkt-gold font-bold border-t border-white/10 pt-3 tracking-wider"><span>GRAND TOTAL DUE:</span> <span className="font-mono text-2xl drop-shadow-md">₹ {total.toFixed(2)}</span></div>
          </div>
        </div>

        {/* --- INVOICE PREVIEW MODAL (PRINT READY) --- */}
        {showPreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-md transition-all">
            <div className="bg-white w-full max-w-4xl h-full max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col transform transition-all duration-300 animate-in fade-in zoom-in-95">
              
              {/* Action Bar (Dark) - Fully Mobile Responsive */}
              <div className="bg-linear-to-r from-kkt-navy to-kkt-dark p-4 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 shadow-lg z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
                  <h3 className="text-kkt-gold font-cinzel tracking-widest text-sm hidden md:block">PREVIEW</h3>
                  
                  {/* 20 Premium Templates Switcher (Scrollable) */}
                  <div className="flex bg-white/5 rounded-lg p-1 border border-white/10 w-full md:max-w-md overflow-x-auto custom-scrollbar">
                    <button onClick={() => setInvoiceTemplate("premium1")} className={`whitespace-nowrap px-3 py-1.5 text-[10px] font-bold tracking-widest rounded-md transition-all border border-kkt-gold/30 ${invoiceTemplate === "premium1" ? "bg-kkt-gold text-kkt-dark shadow-[0_0_15px_rgba(255,179,0,0.6)]" : "text-kkt-gold hover:bg-kkt-gold/10"}`}>💎 PREMIUM 1</button>
                    <button onClick={() => setInvoiceTemplate("premium2")} className={`whitespace-nowrap px-3 py-1.5 text-[10px] font-bold tracking-widest rounded-md transition-all ml-1 ${invoiceTemplate === "premium2" ? "bg-white text-black shadow-lg" : "text-gray-400 hover:text-white"}`}>PREMIUM 2</button>
                    <button onClick={() => setInvoiceTemplate("premium3")} className={`whitespace-nowrap px-3 py-1.5 text-[10px] font-bold tracking-widest rounded-md transition-all ml-1 ${invoiceTemplate === "premium3" ? "bg-white text-black shadow-lg" : "text-gray-400 hover:text-white"}`}>PREMIUM 3</button>
                  </div>

                  {/* Dynamic Color Selector */}
                  <div className="flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded-lg border border-white/10 shrink-0">
                    <span className="text-[9px] font-cinzel text-gray-400 tracking-widest">LOGO COLOR:</span>
                    <input type="color" value={brandColor} onChange={(e) => setBrandColor(e.target.value)} className="w-5 h-5 rounded cursor-pointer bg-transparent border-0 p-0" />
                  </div>
                </div>
                
                {/* Print & Close Buttons */}
                <div className="flex gap-3 w-full xl:w-auto justify-end">
                  <button className="px-4 py-2 bg-linear-to-r from-kkt-goldDark to-kkt-gold text-kkt-dark font-bold font-cinzel tracking-widest text-[10px] md:text-xs rounded-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(255,179,0,0.4)] transition-all">
                    🖨️ PRINT
                  </button>
                  <button onClick={() => setShowPreview(false)} className="px-4 py-2 bg-white/10 text-white border border-white/20 font-cinzel tracking-widest text-[10px] md:text-xs rounded-lg hover:bg-white/20 transition-colors">
                    ✕ CLOSE
                  </button>
                </div>
              </div>

              {/* Printable A4 White Area (Smart Template Engine) */}
              <div className="p-10 text-black font-sans bg-white flex-1 overflow-y-auto w-full mx-auto shadow-inner" style={{ maxWidth: '210mm', minHeight: '297mm' }}>
                
                {/* Yahan Template Registry khud decide karegi konsa design dikhana hai */}
                {(() => {
                  const SelectedTemplate = TemplateRegistry[invoiceTemplate];
                  
                  if (!SelectedTemplate) {
                    return <div className="text-center text-red-500 mt-20 font-bold">⚠️ Template "{invoiceTemplate}" not found! Please create it in components/templates.</div>;
                  }

                  return (
                    <SelectedTemplate 
                      items={items} 
                      customerState={customerState} 
                      subTotal={subTotal} 
                      gstAmount={gstAmount} 
                      total={total} 
                      selectedBill={selectedBill}
                      brandColor={brandColor} 
                    />
                  );
                })()}

              </div>
            </div>
          </div>
        )}

      </div>
    );
  }

  // AGAR KOI BILL SELECTED NAHI HAI TOH DEFAULT 8 CARDS WALA GRID DIKHAO
  return (
    <div className="w-full h-full flex flex-col opacity-100 transition-opacity duration-500">
      <div className="mb-6">
        <h2 className="font-tiro text-2xl text-kkt-gold mb-1">Billing & Invoicing Engine</h2>
        <p className="text-sm text-gray-400 font-cinzel tracking-wider">SELECT VOUCHER TYPE TO PROCEED</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {billTypes.map((bill, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedBill(bill.name)}
            className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer group hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]
              ${bill.primary 
                ? 'bg-kkt-gold/5 border-kkt-gold/30 hover:border-kkt-gold' 
                : 'bg-kkt-darkCard border-white/5 hover:border-kkt-gold/30 hover:bg-kkt-gold/5'}`}
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-3xl">{bill.icon}</span>
              {bill.primary && (
                <span className="text-[8px] font-cinzel tracking-widest bg-kkt-gold/10 text-kkt-gold px-2 py-1 rounded-full border border-kkt-gold/20">
                  PRIMARY
                </span>
              )}
            </div>
            <h3 className="font-cinzel text-[11px] font-bold tracking-widest text-kkt-greenLight mb-2 group-hover:text-kkt-gold transition-colors">
              {bill.name.toUpperCase()}
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              {bill.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}