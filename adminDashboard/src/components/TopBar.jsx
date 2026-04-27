import React from "react";

const TopBar = () => {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="w-full px-6 py-4 bg-gradient-to-r from-[#30333e] via-[#2b3140] to-[#1f2a3a] text-[#f5f5f5] flex items-center justify-between shadow-md">
      {/* Left Title */}
      <h1 className="text-lg md:text-xl font-semibold tracking-wide">
        ADMIN DASHBOARD - RETAIL OPERATIONS OVERVIEW
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Welcome + Date */}
        <div className="text-right">
          <h3 className="text-sm font-medium">
            Welcome, <span className="font-semibold">Admin</span>
          </h3>
          <p className="text-xs text-gray-300">{formattedDate}</p>
        </div>

        {/* Notification Icon */}
        <div className="relative cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-[#3a3c44] flex items-center justify-center">
            🔔
          </div>

          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] px-1.5 py-[1px] rounded-full">
            1
          </span>
        </div>

        {/* User Avatar */}
        <div className="w-9 h-9 rounded-full bg-[#3a3c44] flex items-center justify-center cursor-pointer">
          👤
        </div>
      </div>
    </div>
  );
};

export default TopBar;
