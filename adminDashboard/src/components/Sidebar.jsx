import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navData = [
    { id: "dashboard", label: "Dashboard" , path:"/admin" },
    { id: "admins", label: "Manage Admins" ,path:"/admin/manageadmins" },
    { id: "teams", label: "Manage Teams and Departments" },
    { id: "purchase", label: "Purchase Orders" ,path:"/admin/orders" },
    { id: "products", label: "Product List" ,path:"/admin/productlists" },
    { id: "bom", label: "B.O.M." },
    { id: "inventory", label: "Inventory", path: "/admin/inventory" }, // ✅ only working route
    { id: "godowns", label: "Godowns" },
    { id: "assembly", label: "Assembly Line" },
    { id: "production", label: "Production" },
    { id: "invoicing", label: "Invoicing" },
    { id: "quality", label: "Quality Check" },
  ];

  return (
    <div className="h-screen w-64 bg-[#30333e] text-[#f5f5f5] p-4 flex flex-col border-r border-white/10">
      
      {/* Title */}
      <h1 className="text-xl font-semibold mb-6">Super Admin</h1>

      {/* Nav Items */}
      <div className="flex flex-col gap-2 overflow-y-auto">
        {navData.map((data) => {
          const isActive = location.pathname === data.path;

          return (
            <div
              key={data.id}
              onClick={() => data.path && navigate(data.path)} 
              className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200
              ${
                isActive
                  ? "bg-[#44a83e] text-white"
                  : "hover:bg-[#3a3c44] cursor-pointer"
              }
              ${!data.path && "opacity-70 cursor-not-allowed"} // disable others
              `}
            >
              {/* Icon placeholder */}
              <div className="w-5 h-5 bg-white/30 rounded"></div>

              <p className="text-sm">{data.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;