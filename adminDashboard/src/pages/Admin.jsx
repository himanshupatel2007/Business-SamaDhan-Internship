import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Infoblock from "../components/Infoblock";
import SalesLineChart from "../components/SalesLineChart";
const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-[#30333e] ">
        <Navbar />
        <Infoblock />
       <div className="p-4 mt-2 w-full h-[400px]">
            <SalesLineChart/>
        </div>
      </main>
    </div>
  );
};

export default Admin;
