import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Admin />} /> {/* /admin */}
        <Route path="inventory" element={<Inventory />} /> {/* /admin/inventory */}
      </Route>
    </Routes>
  );
}

export default App;