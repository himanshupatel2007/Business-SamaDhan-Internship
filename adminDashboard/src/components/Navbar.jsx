import React from "react";

const Navbar = () => {
  const navData = [
    {
      id: "nav_dashboard",
      label: "Dashboard",
      icon: "layout-dashboard",
      isActive: true,
    },
    {
      id: "nav_sales",
      label: "Sales",
      icon: "currency-dollar",
      isActive: false,
    },
    {
      id: "nav_inventory",
      label: "Inventory",
      icon: "package",
      isActive: false,
    },
    { id: "nav_reports", label: "Reports", icon: "file-text", isActive: false },
    { id: "nav_users", label: "Users", icon: "users", isActive: false },
    {
      id: "nav_settings",
      label: "Settings",
      icon: "settings-gear",
      isActive: false,
    },
  ];

  return (
    <div className="h-screen w-64 bg-[#30333e] text-[#f5f5f5] p-4 flex flex-col border-r-2 border-white">
      {/* Logo / Title */}
      <h1 className="text-xl font-semibold mb-6">Admin</h1>

      {/* Nav Items */}
      <div className="flex flex-col gap-2">
        {navData.map((data) => (
          <div
            key={data.id}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200
            ${
              data.isActive ? "bg-[#44a83e] text-white" : "hover:bg-[#3a3c44]"
            }`}
          >
            {/* Replace with real icons later */}
            <div className="w-5 h-5 bg-white/30 rounded"></div>

            <p className="text-sm">{data.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
