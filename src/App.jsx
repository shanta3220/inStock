import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import AddUpdateWarehousePage from "./pages/AddUpdateWarehousePage/AddUpdateWarehousePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
          <Route
            path="/warehouses/:id/edit"
            element={<AddUpdateWarehousePage addNewform={false} />}
          />
          <Route
            path="/warehouses/:id/add"
            element={<AddUpdateWarehousePage addNewform={true} />}
          />
          <Route path="/inventory" element={<InventoryPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
