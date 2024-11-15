import "./WarehouseDetailsPage.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function WarehouseDetailsPage() {
  const { id } = useParams();
  const [warehouseInfo, setWarehouseInfo] = useState(null);
  const [inventoryList, setInventoryList] = useState([]);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    const getWarehouseDetails = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/warehouses/${id}`);
        setWarehouseInfo(data);
      } catch (e) {
        console.error("Error fetching warehouses:", e);
      }
    };

    getWarehouseDetails();
  }, [id]);

  if (!warehouseInfo) {
    return <dir>Loading...</dir>;
  }

  return (
    <>
      <WarehouseDetails warehouse={warehouseInfo} />
    </>
  );
}

export default WarehouseDetailsPage;
