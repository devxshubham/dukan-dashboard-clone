export const TransactionTable = () => {
    return <div className="overflow-x-auto">
      <table className="table">
    <thead className= " text-[#4D4D4D]">
      <tr className="bg-[#f2f2f2] ">
        <th className=" px-3 py-[10px] text-left text-small font-medium tracking-wide rounded-l">Order ID</th>
        <th className=" px-3 py-[10px] text-left text-small font-medium tracking-wide ">Status</th>
        <th className=" px-3 py-[10px] text-left text-small font-medium tracking-wide ">Transaction ID</th>
        <th className=" px-3 py-[10px] text-left text-small font-medium tracking-wide ">Refund Date</th>
        <th className=" px-3 py-[10px] text-right text-small font-medium tracking-wide rounded-r ">Order Amount</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-[#E6E6E6]">
      <tr className="border-b-[2px]">
        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281209</td>
        <td className="flex items-center px-3 py-[10px] gap-[6px] text-[#1A181E]">
            <span className="bg-green-500 block w-[10px] h-[10px] rounded-full"></span>
            Successful
        </td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">TRX123456</td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">Today, 8:45 PM</td>
        <td className="px-3 py-[10px] text-[#1A181E] text-right">₹1125.00</td>
      </tr>
      <tr className="border-b-[2px]">
        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281210</td>
        <td className="flex items-center px-3 py-[10px] gap-[6px] text-[#1A181E]">
            <span className="bg-[#999999] block w-[10px] h-[10px] rounded-full"></span>
            Processing
        </td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">TRX789012</td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">Tomorrow, 10:00 AM</td>
        <td className="px-3 py-[10px] text-[#1A181E] text-right">₹950.50</td>
      </tr>
      <tr className="border-b-[2px]">
        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281211</td>
        <td className="flex items-center px-3 py-[10px] gap-[6px] text-[#1A181E]">
            <span className="bg-green-500 block w-[10px] h-[10px] rounded-full"></span>
            Successful
        </td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">TRX345678</td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">Yesterday, 3:30 PM</td>
        <td className="px-3 py-[10px] text-[#1A181E] text-right">₹750.00</td>
      </tr>
      <tr className="border-b-[2px]">
        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281212</td>
        <td className="flex items-center px-3 py-[10px] gap-[6px] text-[#1A181E]">
            <span className="bg-green-500 block w-[10px] h-[10px] rounded-full"></span>
            Successful
        </td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">TRX901234</td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">Today, 11:20 AM</td>
        <td className="px-3 py-[10px] text-[#1A181E] text-right">₹2000.00</td>
      </tr>
      <tr className="border-b-[2px]">
        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281213</td>
        <td className="flex items-center px-3 py-[10px] gap-[6px] text-[#1A181E]">
            <span className="bg-[#999999] block w-[10px] h-[10px] rounded-full"></span>
            Processing
        </td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">TRX567890</td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">Tomorrow, 9:00 AM</td>
        <td className="px-3 py-[10px] text-[#1A181E] text-right">₹1800.00</td>
      </tr>
      <tr className="border-b-[2px]">
        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281214</td>
        <td className="flex items-center px-3 py-[10px] gap-[6px] text-[#1A181E]">
            <span className="bg-[#999999] block w-[10px] h-[10px] rounded-full"></span>
            Processing
        </td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">TRX098765</td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">Yesterday, 2:00 PM</td>
        <td className="px-3 py-[10px] text-[#1A181E] text-right">₹500.00</td>
      </tr>
      <tr className="border-b-[2px]">
        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281215</td>
        <td className="flex items-center px-3 py-[10px] gap-[6px] text-[#1A181E]">
            <span className="bg-green-500 block w-[10px] h-[10px] rounded-full"></span>
            Successful
        </td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">TRX456789</td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">Today, 10:30 AM</td>
        <td className="px-3 py-[10px] text-[#1A181E] text-right">₹3000.00</td>
      </tr>
      <tr className="border-b-[2px]">
        <td className="px-3 py-[10px] text-[#146EB4] font-medium">#281216</td>
        <td className="flex items-center px-3 py-[10px] gap-[6px] text-[#1A181E]">
            <span className="bg-[#999999] block w-[10px] h-[10px] rounded-full"></span>
            Processing
        </td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">TRX098765</td>
        <td className="px-3 py-[10px] text-[#4D4D4D]">Yesterday, 2:00 PM</td>
        <td className="px-3 py-[10px] text-[#1A181E] text-right">₹500.00</td>
      </tr>
      
      
    </tbody>
  </table>
    </div>
}