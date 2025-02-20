import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehouseFormPage from "./pages/WarehouseFormPage/WarehouseFormPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import AddNewInventoryPage from "./pages/AddNewInventoryPage/AddNewInventoryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
          <Route path="/warehouses/:id/edit" element={<WarehouseFormPage />} />
          <Route path="/warehouses/add" element={<WarehouseFormPage />} />
          <Route path="/inventories" element={<InventoryPage />} />
          <Route path="/inventories/:id" element={<InventoryDetailsPage />} />
          <Route path="/inventories/:id/edit" element={<EditInventoryPage />} />
          <Route path="/inventories/add" element={<AddNewInventoryPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
