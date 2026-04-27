import React from "react";
import { BarChart3, ShoppingCart, RefreshCcw, Package } from "lucide-react";

const Infoblock = () => {
  const blockData = [
    {
      title: "TOTAL SALES (THIS MONTH)",
      value: "$128,450",
      icon: <BarChart3 className="text-[#44a83e] w-6 h-6" />,
    },
    {
      title: "PURCHASES (DAY-WISE)",
      value: "$6,210",
      icon: <ShoppingCart className="text-[#44a83e] w-6 h-6" />,
    },
    {
      title: "INVENTORY SOLD (THRU)",
      value: "$42,150",
      icon: <RefreshCcw className="text-[#44a83e] w-6 h-6" />,
    },
    {
      title: "INVENTORY LEFT",
      value: "$18,700",
      icon: <Package className="text-[#44a83e] w-6 h-6" />,
    },
  ];

  return (
    <div className="bg-[#30333e] p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {blockData.map((data, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-[#3a3c44] p-5 rounded-xl shadow-md hover:bg-[#35373f] transition-all"
        >
          {/* Icon Container */}
          <div className="bg-[#30333e] p-3 rounded-lg flex items-center justify-center">
            {data.icon}
          </div>

          {/* Text */}
          <div>
            <h2 className="text-[#f5f5f5] text-xs tracking-wide opacity-70">
              {data.title}
            </h2>
            <p className="text-[#f5f5f5] text-xl font-semibold">
              {data.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Infoblock;