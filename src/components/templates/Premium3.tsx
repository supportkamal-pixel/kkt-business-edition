export default function Premium3({ items, customerState, subTotal, gstAmount, total, selectedBill, brandColor }: any) {
  return (
    <div style={{ borderLeftColor: brandColor }} className="h-full flex flex-col font-sans bg-white text-gray-800 p-10 border-l-16 shadow-lg">
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tighter uppercase">COMPANY LOGO</h1>
          <p className="text-xs text-gray-500 mt-2 font-mono">GSTIN: 27AAAAA0000A1Z5</p>
        </div>
        <div className="text-right">
          <h2 style={{ color: brandColor }} className="text-2xl font-bold tracking-widest uppercase mb-2">
            {selectedBill === "GST Tax Invoice" ? "TAX INVOICE" : selectedBill.toUpperCase()}
          </h2>
          <div className="grid grid-cols-2 gap-4 text-xs mt-4">
            <div className="text-gray-400 font-bold uppercase text-right">Invoice#</div>
            <div className="font-bold text-gray-900">INV-001</div>
            <div className="text-gray-400 font-bold uppercase text-right">Date</div>
            <div className="font-bold text-gray-900">21-Jun-26</div>
          </div>
        </div>
      </div>

      <div className="mb-10 bg-gray-50 p-6 border border-gray-100">
        <p style={{ color: brandColor }} className="text-[10px] font-bold uppercase tracking-widest mb-2">Billed To</p>
        <p className="font-bold text-xl text-gray-900">CASH CUSTOMER</p>
        <p className="text-sm text-gray-600">State: {customerState}</p>
      </div>

      <table className="w-full text-sm text-left mb-6">
        <thead>
          <tr className="border-b-2 border-gray-800 text-gray-900">
            <th className="py-2 font-bold uppercase text-[10px] tracking-widest">Item Description</th>
            <th className="py-2 text-center font-bold uppercase text-[10px] tracking-widest">Qty</th>
            <th className="py-2 text-right font-bold uppercase text-[10px] tracking-widest">Rate</th>
            <th className="py-2 text-right font-bold uppercase text-[10px] tracking-widest">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: any, idx: number) => (
            <tr key={item.id} className="border-b border-gray-100">
              <td className="py-4 font-bold text-gray-800">{item.name || `Item ${idx+1}`}</td>
              <td className="py-4 text-center">{item.qty}</td>
              <td className="py-4 text-right text-gray-500">₹{item.rate.toFixed(2)}</td>
              <td className="py-4 text-right font-bold">₹{((item.qty * item.rate) + ((item.qty * item.rate) * item.gst / 100)).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex-1"></div>

      <div className="flex justify-end pt-6">
        <div className="w-1/2">
          <div className="flex justify-between py-2 text-sm border-b border-gray-100"><span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Subtotal</span> <span>₹ {subTotal.toFixed(2)}</span></div>
          <div className="flex justify-between py-2 text-sm border-b border-gray-100"><span className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Tax</span> <span>₹ {gstAmount.toFixed(2)}</span></div>
          <div className="flex justify-between py-4 text-2xl font-black text-gray-900">
            <span style={{ color: brandColor }}>TOTAL</span> <span>₹ {total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}