import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-[#30333e]">
        <Navbar />
        <Outlet /> {/* 🔥 child routes render here */}
      </main>
    </div>
  );
};

export default Layout;