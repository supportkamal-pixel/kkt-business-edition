export default function Modern({ items, customerState, subTotal, gstAmount, total, selectedBill }: any) {
  return (
    <div className="h-full flex flex-col font-sans p-4 bg-white">
      <div className="flex justify-between items-center mb-8 border-b-4 border-kkt-navy pb-6">
        <div>
          <h1 className="font-cinzel text-4xl font-black tracking-[0.3em]"><span className="text-blue-700">K</span><span className="text-kkt-gold">K</span><span className="text-green-600">T</span></h1>
          <p className="font-tiro text-gray-500 mt-1 text-sm tracking-wider">काम तुम्हारा। हिसाब हमारा।</p>
        </div>
        <div className="text-right">
          <h2 className="text-3xl font-black text-kkt-navy tracking-widest mb-1">{selectedBill === "GST Tax Invoice" ? "TAX INVOICE" : selectedBill.toUpperCase()}</h2>
          <p className="text-sm text-gray-500"># KKT/26-27/001 | 21-Jun-2026</p>
        </div>
      </div>
      <div className="flex justify-between mb-8 bg-gray-50 p-6 rounded-xl border border-gray-100">
        <div>
          <p className="text-xs font-bold text-gray-400 mb-1 tracking-widest">INVOICE TO:</p>
          <p className="font-bold text-lg text-gray-800">Cash / Customer</p>
          <p className="text-sm text-gray-600">State: {customerState}</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-400 mb-1 tracking-widest">PAYMENT DUE:</p>
          <p className="font-bold text-2xl text-kkt-gold">₹ {total.toFixed(2)}</p>
        </div>
      </div>
      <table className="w-full text-sm text-left mb-8">
        <thead>
          <tr className="bg-kkt-navy text-white">
            <th className="py-3 px-4 rounded-tl-lg font-normal tracking-wider">ITEM</th>
            <th className="py-3 px-4 font-normal tracking-wider text-center">QTY</th>
            <th className="py-3 px-4 font-normal tracking-wider text-right">PRICE</th>
            <th className="py-3 px-4 font-normal tracking-wider text-right">TAX</th>
            <th className="py-3 px-4 rounded-tr-lg font-normal tracking-wider text-right">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: any, idx: number) => (
            <tr key={item.id} className="border-b border-gray-100">
              <td className="py-4 px-4 font-bold text-gray-800">{item.name || `Item ${idx+1}`}</td>
              <td className="py-4 px-4 text-center">{item.qty}</td>
              <td className="py-4 px-4 text-right">₹ {item.rate.toFixed(2)}</td>
              <td className="py-4 px-4 text-right">{item.gst}%</td>
              <td className="py-4 px-4 text-right font-bold">₹ {((item.qty * item.rate) + ((item.qty * item.rate) * item.gst / 100)).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex-1"></div>
      <div className="flex justify-end">
        <div className="w-64">
          <div className="flex justify-between py-2 text-sm text-gray-600"><span>Subtotal</span> <span>₹ {subTotal.toFixed(2)}</span></div>
          <div className="flex justify-between py-2 text-sm text-gray-600 border-b border-gray-200"><span>Estimated Tax</span> <span>₹ {gstAmount.toFixed(2)}</span></div>
          <div className="flex justify-between py-3 font-bold text-xl text-kkt-navy"><span>Total</span> <span>₹ {total.toFixed(2)}</span></div>
        </div>
      </div>
    </div>
  );
}