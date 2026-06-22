export default function PremiumGST({ items, customerState, subTotal, gstAmount, total, selectedBill }: any) {
  // Amount in words logic (basic representation)
  const totalInWords = `Rupees ${Math.floor(total)} Only`;

  return (
    <div className="h-full flex flex-col font-sans bg-white relative text-gray-800">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <h1 className="font-cinzel text-[15rem] font-black">KKT</h1>
      </div>

      {/* Top Ribbon & Badge */}
      <div className="flex justify-between items-start mb-6">
        <div className="bg-kkt-navy text-white px-4 py-1 rounded-br-lg font-bold text-xs tracking-widest shadow-md">
          ORIGINAL FOR RECIPIENT
        </div>
        <div className="text-right">
          <h1 className="text-3xl font-black text-gray-900 tracking-wider uppercase border-b-4 border-kkt-gold inline-block pb-1">
            {selectedBill === "GST Tax Invoice" ? "TAX INVOICE" : selectedBill.toUpperCase()}
          </h1>
        </div>
      </div>

      {/* Company Header */}
      <div className="flex justify-between items-start mb-8 border-b border-gray-200 pb-6">
        <div className="flex gap-4 items-center">
          {/* Logo Box */}
          <div className="w-20 h-20 bg-linear-to-br from-kkt-navy to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-kkt-gold/30">
            <span className="font-cinzel text-3xl font-black text-kkt-gold drop-shadow-md">KKT</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 tracking-wide uppercase">KKT Engine (Business Edition)</h2>
            <p className="text-xs text-gray-600 mt-1">Malad West, Mumbai, Maharashtra, 400064</p>
            <p className="text-xs text-gray-600">Email: support@kktengine.com | Ph: +91 9876543210</p>
            <p className="text-xs font-bold text-gray-800 mt-1">GSTIN: <span className="font-mono font-normal">27AAAAA0000A1Z5</span></p>
          </div>
        </div>
        <div className="text-right bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm min-w-50">
          <div className="mb-2">
            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Invoice No</p>
            <p className="font-mono text-sm font-bold text-gray-900">KKT/26-27/0001</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Invoice Date</p>
            <p className="font-mono text-sm font-bold text-gray-900">21-Jun-2026</p>
          </div>
        </div>
      </div>

      {/* Bill To & Ship To */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
          <h3 className="text-[10px] font-bold text-kkt-gold tracking-widest uppercase mb-3 border-b border-gray-200 pb-2">Billed To</h3>
          <p className="font-bold text-gray-900 uppercase">Cash / Walk-in Customer</p>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">Client Address goes here<br/>City, Pincode</p>
          <p className="text-xs text-gray-800 mt-2">State of Supply: <span className="font-bold">{customerState}</span></p>
          <p className="text-xs text-gray-800">GSTIN: <span className="font-mono">URD (Unregistered)</span></p>
        </div>
        <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
          <h3 className="text-[10px] font-bold text-kkt-gold tracking-widest uppercase mb-3 border-b border-gray-200 pb-2">Shipping Details</h3>
          <p className="font-bold text-gray-900 uppercase">Cash / Walk-in Customer</p>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">Delivery Address goes here<br/>City, Pincode</p>
          <p className="text-xs text-gray-800 mt-2">Place of Supply: <span className="font-bold">{customerState}</span></p>
        </div>
      </div>

      {/* Premium Table */}
      <div className="rounded-xl border border-gray-300 overflow-hidden mb-6 shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 border-b border-gray-300">
            <tr>
              <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">#</th>
              <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">Item Description</th>
              <th className="py-3 px-4 font-bold text-xs uppercase tracking-wider">HSN/SAC</th>
              <th className="py-3 px-4 text-center font-bold text-xs uppercase tracking-wider">Qty</th>
              <th className="py-3 px-4 text-right font-bold text-xs uppercase tracking-wider">Rate</th>
              <th className="py-3 px-4 text-right font-bold text-xs uppercase tracking-wider">Tax</th>
              <th className="py-3 px-4 text-right font-bold text-xs uppercase tracking-wider bg-gray-200">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: any, idx: number) => (
              <tr key={item.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-4 text-gray-600">{idx + 1}</td>
                <td className="py-4 px-4 font-bold text-gray-800">{item.name || `Item Description ${idx+1}`}</td>
                <td className="py-4 px-4 text-gray-600">{item.hsn || '-'}</td>
                <td className="py-4 px-4 text-center text-gray-800">{item.qty}</td>
                <td className="py-4 px-4 text-right font-mono text-gray-800">₹{item.rate.toFixed(2)}</td>
                <td className="py-4 px-4 text-right text-gray-600 text-xs">
                  {item.gst}%<br/>
                  <span className="text-[9px] text-gray-400">
                    (₹{((item.qty * item.rate) * item.gst / 100).toFixed(2)})
                  </span>
                </td>
                <td className="py-4 px-4 text-right font-bold font-mono text-gray-900 bg-gray-50">
                  ₹{((item.qty * item.rate) + ((item.qty * item.rate) * item.gst / 100)).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex-1"></div>

      {/* Bottom Section: Bank, QR & Totals */}
      <div className="flex justify-between items-end border-t-2 border-gray-800 pt-6 mt-4">
        {/* Bank Details & QR */}
        <div className="flex gap-6 w-1/2">
          <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-gray-50 text-gray-400 text-xs font-bold text-center">
            UPI QR<br/>CODE
          </div>
          <div>
            <h3 className="text-xs font-bold text-gray-800 uppercase tracking-widest mb-2 border-b border-gray-200 pb-1">Bank Details</h3>
            <p className="text-xs text-gray-600 mb-1">Bank: <span className="font-bold text-gray-800">HDFC Bank Ltd.</span></p>
            <p className="text-xs text-gray-600 mb-1">A/C No: <span className="font-bold font-mono text-gray-800">50200012345678</span></p>
            <p className="text-xs text-gray-600 mb-1">IFSC: <span className="font-bold font-mono text-gray-800">HDFC0000123</span></p>
            <p className="text-xs text-gray-600">Branch: <span className="font-bold text-gray-800">Malad West</span></p>
          </div>
        </div>

        {/* Totals Calculation */}
        <div className="w-87.5 bg-gray-50 p-5 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex justify-between py-1 text-sm"><span className="text-gray-600">Taxable Amount</span> <span className="font-mono text-gray-800">₹ {subTotal.toFixed(2)}</span></div>
          
          {customerState === "Maharashtra (27)" ? (
            <>
              <div className="flex justify-between py-1 text-sm"><span className="text-gray-600">CGST</span> <span className="font-mono text-gray-800">₹ {(gstAmount / 2).toFixed(2)}</span></div>
              <div className="flex justify-between py-1 text-sm border-b border-gray-200 pb-3"><span className="text-gray-600">SGST</span> <span className="font-mono text-gray-800">₹ {(gstAmount / 2).toFixed(2)}</span></div>
            </>
          ) : (
            <div className="flex justify-between py-1 text-sm border-b border-gray-200 pb-3"><span className="text-gray-600">IGST</span> <span className="font-mono text-gray-800">₹ {gstAmount.toFixed(2)}</span></div>
          )}
          
          <div className="flex justify-between py-3 mt-1 items-center">
            <span className="font-bold text-gray-900 tracking-wider">GRAND TOTAL</span> 
            <span className="font-mono text-2xl font-black text-kkt-navy bg-kkt-gold/20 px-3 py-1 rounded-lg">₹ {total.toFixed(2)}</span>
          </div>
          <p className="text-[10px] text-gray-500 text-right mt-1">Amount in words: {totalInWords}</p>
        </div>
      </div>

      {/* Terms & Signature */}
      <div className="flex justify-between items-end mt-8">
        <div className="w-1/2">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Terms & Conditions</h3>
          <ul className="text-[10px] text-gray-500 list-disc pl-4 space-y-1">
            <li>Goods once sold will not be taken back or exchanged.</li>
            <li>Interest @ 18% p.a. will be charged if payment is delayed.</li>
            <li>Subject to Mumbai Jurisdiction only.</li>
          </ul>
        </div>
        <div className="text-center">
          <div className="w-48 h-16 border-b border-gray-400 mb-2 flex items-end justify-center pb-2">
            {/* Signature Graphic Place */}
            <span className="text-gray-300 font-tiro italic text-sm">Authorized Signatory</span>
          </div>
          <p className="text-xs font-bold text-gray-800">For KKT Engine</p>
        </div>
      </div>
    </div>
  );
}