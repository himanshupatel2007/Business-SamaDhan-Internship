import React from 'react';

const inventoryData = [
  { name: "Classic T-Shirt", sku: "ASKU0011", category: "Classic", price: "$58.00", qty: 35, revenue: "$125.00" },
  { name: "Premium Jeans", sku: "PREMIUMJ", category: "Premium Jeans", price: "$48.00", qty: 24, revenue: "$100.00" },
  { name: "Wireless Mouse", sku: "WIRELESS", category: "WirelesMouse", price: "$42.00", qty: 20, revenue: "$100.00" },
  { name: "Yoga Mat", sku: "YOGAMAT", "category": "Yoga Mat", price: "$38.00", qty: 7, revenue: "$80.00" },
  { name: "Coffee Mug", sku: "Z4000HUG", category: "Coffee", price: "$36.00", qty: 1, revenue: "$86.00" }
];

const Inventory = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 w-full mt-4">
      
      {/* INVENTORY TABLE */}
      <div className="bg-[#3a3c44] p-5 rounded-xl shadow-lg flex-1 overflow-x-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[#f5f5f5] text-sm font-bold tracking-tight uppercase">Inventory: Top Sold Items</h3>
          <div className="flex gap-2">
            <button className="bg-[#30333e] p-1.5 rounded text-gray-400 hover:text-white border border-gray-600">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M112,40a8,8,0,0,1,8,8V208a8,8,0,0,1-16,0V48A8,8,0,0,1,112,40ZM192,88a8,8,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8,8,0,0,0,192,88ZM72,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"></path></svg>
            </button>
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-[#30333e] text-xs text-white px-3 py-1.5 rounded border border-gray-600 focus:outline-none focus:ring-1 focus:ring-[#44a83e]"
            />
          </div>
        </div>
        
        <table className="w-full text-left text-[13px] text-[#f5f5f5]">
          <thead className="text-gray-400 border-b border-gray-700">
            <tr>
              <th className="pb-3 font-medium">Item Name</th>
              <th className="pb-3 font-medium">SKU</th>
              <th className="pb-3 font-medium">Category</th>
              <th className="pb-3 font-medium">Price</th>
              <th className="pb-3 font-medium">Qty Sold</th>
              <th className="pb-3 font-medium text-right">Revenue</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/50">
            {inventoryData.map((item, i) => (
              <tr key={i} className="hover:bg-[#30333e]/50 transition-colors">
                <td className="py-4">{item.name}</td>
                <td className="py-4 text-gray-400">{item.sku}</td>
                <td className="py-4 text-gray-400">{item.category}</td>
                <td className="py-4">{item.price}</td>
                <td className="py-4">{item.qty}</td>
                <td className="py-4 text-right font-semibold">{item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;