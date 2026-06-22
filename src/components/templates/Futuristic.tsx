export default function Futuristic({ items, customerState, subTotal, gstAmount, total }: any) {
  return (
    <div className="h-full flex flex-col font-mono p-4 bg-white">
      <div className="flex justify-between items-end mb-12">
        <h1 className="text-6xl font-black tracking-tighter text-gray-900 leading-none">INV<span className="text-kkt-gold">.</span></h1>
        <div className="text-right">
          <p className="text-gray-400 text-xs tracking-widest mb-1">DATE</p>
          <p className="font-bold text-sm">2026.06.21</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 mb-12">
        <div>
          <div className="w-8 h-1 bg-kkt-navy mb-4"></div>
          <p className="text-xs text-gray-400 tracking-widest mb-2">FROM</p>
          <p className="font-bold">KKT ENGINE</p>
          <p className="text-sm text-gray-500">MUMBAI, INDIA</p>
        </div>
        <div>
          <div className="w-8 h-1 bg-kkt-gold mb-4"></div>
          <p className="text-xs text-gray-400 tracking-widest mb-2">TO</p>
          <p className="font-bold">CASH CUSTOMER</p>
          <p className="text-sm text-gray-500">{customerState.toUpperCase()}</p>
        </div>
      </div>
      <div className="border-t-2 border-black border-b-2 py-2 mb-4 flex text-xs font-bold tracking-widest">
        <div className="w-1/2">DESCRIPTION</div>
        <div className="w-1/6 text-center">QTY</div>
        <div className="w-1/6 text-right">RATE</div>
        <div className="w-1/6 text-right">AMOUNT</div>
      </div>
      {items.map((item: any, idx: number) => (
        <div key={item.id} className="flex text-sm py-3 border-b border-gray-100">
          <div className="w-1/2 font-bold text-gray-800">{item.name || `ITEM 0${idx+1}`}</div>
          <div className="w-1/6 text-center">{item.qty}</div>
          <div className="w-1/6 text-right">{item.rate.toFixed(2)}</div>
          <div className="w-1/6 text-right font-bold">{((item.qty * item.rate) + ((item.qty * item.rate) * item.gst / 100)).toFixed(2)}</div>
        </div>
      ))}
      <div className="flex-1"></div>
      <div className="mt-8 flex justify-end">
        <div className="w-1/2">
          <div className="flex justify-between py-2 text-sm"><span className="text-gray-500 tracking-widest">SUBTOTAL</span> <span>{subTotal.toFixed(2)}</span></div>
          <div className="flex justify-between py-2 text-sm border-b border-black"><span className="text-gray-500 tracking-widest">TAX ({items[0]?.gst || 0}%)</span> <span>{gstAmount.toFixed(2)}</span></div>
          <div className="flex justify-between py-4 text-3xl font-black"><span className="tracking-widest">TOTAL</span> <span>₹ {total.toFixed(2)}</span></div>
        </div>
      </div>
    </div>
  );
}