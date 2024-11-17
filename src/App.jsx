import "./App.scss";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          <Route path="/warehouses/:id" element={<WarehouseDetailsPage/>}/>
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/inventory/:id" element={<EditInventoryPage />} /> 
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
