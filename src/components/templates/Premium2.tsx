export default function Premium2({ items, customerState, subTotal, gstAmount, total, selectedBill, brandColor }: any) {
  return (
    <div className="h-full flex flex-col font-sans bg-white relative text-gray-800 shadow-2xl rounded-lg overflow-hidden border border-gray-200">
      
      {/* Dynamic Colored Header */}
      <div style={{ backgroundColor: brandColor }} className="text-white p-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black tracking-widest uppercase shadow-black drop-shadow-md">COMPANY NAME</h1>
          <p className="text-xs opacity-80 mt-1">Malad West, Mumbai | GSTIN: 27XXXXX0000X1Z</p>
        </div>
        <div className="text-right">
          <h2 className="text-3xl font-black tracking-widest uppercase opacity-90 border-b-2 border-white/30 pb-2">
            {selectedBill === "GST Tax Invoice" ? "TAX INVOICE" : selectedBill.toUpperCase()}
          </h2>
          <p className="font-mono text-sm mt-2">INV-2026-001 | Date: 21-Jun-26</p>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        {/* Bill To Section */}
        <div className="flex justify-between mb-8">
          <div>
            <h3 style={{ color: brandColor }} className="text-xs font-bold uppercase tracking-widest border-b-2 inline-block pb-1 mb-2">Billed To</h3>
            <p className="font-bold text-lg text-gray-900">Cash / Customer</p>
            <p className="text-sm text-gray-600">State: {customerState}</p>
          </div>
          <div className="text-right">
            <h3 style={{ color: brandColor }} className="text-xs font-bold uppercase tracking-widest border-b-2 inline-block pb-1 mb-2">Amount Due</h3>
            <p className="font-black text-3xl text-gray-900">₹ {total.toFixed(2)}</p>
          </div>
        </div>

        {/* Dynamic Table */}
        <table className="w-full text-sm text-left mb-6">
          <thead style={{ backgroundColor: `${brandColor}20`, color: brandColor }}>
            <tr>
              <th className="py-3 px-4 font-bold uppercase text-xs rounded-l-lg">Item</th>
              <th className="py-3 px-4 text-center font-bold uppercase text-xs">Qty</th>
              <th className="py-3 px-4 text-right font-bold uppercase text-xs">Rate</th>
              <th className="py-3 px-4 text-right font-bold uppercase text-xs">Tax</th>
              <th className="py-3 px-4 text-right font-bold uppercase text-xs rounded-r-lg">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: any, idx: number) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-4 px-4 font-bold text-gray-800">{item.name || `Item ${idx+1}`}</td>
                <td className="py-4 px-4 text-center">{item.qty}</td>
                <td className="py-4 px-4 text-right">₹{item.rate.toFixed(2)}</td>
                <td className="py-4 px-4 text-right text-gray-500">{item.gst}%</td>
                <td className="py-4 px-4 text-right font-bold">₹{((item.qty * item.rate) + ((item.qty * item.rate) * item.gst / 100)).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex-1"></div>

        {/* Bottom Section */}
        <div className="flex justify-between items-end border-t-2 border-gray-100 pt-6">
          <div className="w-1/2">
            <h3 style={{ color: brandColor }} className="text-xs font-bold uppercase tracking-widest mb-1">Bank Details</h3>
            <p className="text-xs text-gray-600">HDFC Bank | A/C: 5020000000 | IFSC: HDFC00000</p>
          </div>
          <div className="w-64 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div className="flex justify-between py-1 text-sm"><span className="text-gray-500">Taxable</span> <span>₹ {subTotal.toFixed(2)}</span></div>
            <div className="flex justify-between py-1 text-sm"><span className="text-gray-500">Tax Amount</span> <span>₹ {gstAmount.toFixed(2)}</span></div>
            <div style={{ backgroundColor: brandColor }} className="flex justify-between py-2 px-3 mt-3 rounded-lg text-white font-bold text-lg">
              <span>TOTAL</span> <span>₹ {total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}