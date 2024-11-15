import "./WarehouseDetailsPage.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import Card from "../../components/Card/Card";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function WarehouseDetailsPage() {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState(null);
  const [inventoryList, setInventoryList] = useState([]);

  const handleEditOnClick = () => {
    console.log("Edit button clicked!");
  };

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    const getWarehouseDetails = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/warehouses/${id}`);
        setWarehouse(data);
      } catch (e) {
        console.error("Error fetching warehouses:", e);
      }
    };

    getWarehouseDetails();
  }, [id]);

  if (!warehouse) {
    return <dir>Loading...</dir>;
  }

  return (
    <>
      <Card
        title={warehouse.warehouse_name}
        returnPath="/"
        handleEditOnClick={handleEditOnClick}
      >
        <WarehouseDetails warehouse={warehouse} />
      </Card>
    </>
  );
}

export default WarehouseDetailsPage;
