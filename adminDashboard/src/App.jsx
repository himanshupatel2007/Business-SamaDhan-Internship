import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import Inventory from "./pages/Inventory";
import ProductList from "./components/Productlist";
import Orders from "./components/Orders";
import ManageAdmins from "./components/ManageAdmins";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Admin />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="productlists" element={<ProductList />} />
        <Route path="orders" element={<Orders/>}/>
        <Route path="manageadmins" element={<ManageAdmins/>}/>
      </Route>
    </Routes>
  );
}

export default App;
