import "./App.css";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

function App() {

  return (
    <>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<WarehousesPage/>}/>
    <Route path="/inventory" element={<InventoryPage/>}/>
  </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
