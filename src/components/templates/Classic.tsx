export default function Classic({ items, customerState, subTotal, gstAmount, total, selectedBill }: any) {
  return (
    <div className="border-2 border-black h-full flex flex-col bg-white">
      <div className="border-b-2 border-black p-4 text-center">
        <h1 className="font-bold text-2xl tracking-widest">KKT BUSINESS EDITION</h1>
        <p className="text-sm">काम तुम्हारा। हिसाब हमारा। | Mumbai, Maharashtra</p>
      </div>
      <div className="flex border-b-2 border-black">
        <div className="w-1/2 p-4 border-r-2 border-black">
          <p className="font-bold mb-1">Billed To:</p>
          <p>Cash / Customer</p>
          <p>State: {customerState}</p>
        </div>
        <div className="w-1/2 p-4">
          <p className="font-bold text-lg mb-1">{selectedBill === "GST Tax Invoice" ? "TAX INVOICE" : selectedBill.toUpperCase()}</p>
          <p>Invoice No: KKT/26-27/001</p>
          <p>Date: 21-Jun-2026</p>
        </div>
      </div>
      <table className="w-full text-sm text-left">
        <thead className="border-b-2 border-black">
          <tr>
            <th className="py-2 px-3 border-r-2 border-black">Sl No.</th>
            <th className="py-2 px-3 border-r-2 border-black">Description of Goods</th>
            <th className="py-2 px-3 border-r-2 border-black text-center">Qty</th>
            <th className="py-2 px-3 border-r-2 border-black text-right">Rate</th>
            <th className="py-2 px-3 border-r-2 border-black text-right">GST</th>
            <th className="py-2 px-3 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: any, idx: number) => (
            <tr key={item.id} className="border-b border-black">
              <td className="py-2 px-3 border-r-2 border-black">{idx + 1}</td>
              <td className="py-2 px-3 border-r-2 border-black">{item.name || `Item ${idx+1}`}</td>
              <td className="py-2 px-3 border-r-2 border-black text-center">{item.qty}</td>
              <td className="py-2 px-3 border-r-2 border-black text-right">{item.rate.toFixed(2)}</td>
              <td className="py-2 px-3 border-r-2 border-black text-right">{item.gst}%</td>
              <td className="py-2 px-3 text-right">{((item.qty * item.rate) + ((item.qty * item.rate) * item.gst / 100)).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex-1"></div>
      
      {/* Yeh raha Totals wala hissa jo pichli baar miss ho gaya tha */}
      <div className="flex border-t-2 border-black">
        <div className="w-2/3 p-4 border-r-2 border-black text-sm">
          <p><strong>Terms & Conditions:</strong><br/>1. Goods once sold will not be taken back.<br/>2. Subject to Mumbai jurisdiction.</p>
        </div>
        <div className="w-1/3 bg-gray-50">
          <div className="flex justify-between p-2 border-b border-black"><span className="font-bold">Sub Total:</span> <span>₹ {subTotal.toFixed(2)}</span></div>
          <div className="flex justify-between p-2 border-b border-black"><span className="font-bold">Tax Amount:</span> <span>₹ {gstAmount.toFixed(2)}</span></div>
          <div className="flex justify-between p-2 font-bold text-lg"><span className="font-bold">Grand Total:</span> <span>₹ {total.toFixed(2)}</span></div>
        </div>
      </div>
    </div>
  );
}