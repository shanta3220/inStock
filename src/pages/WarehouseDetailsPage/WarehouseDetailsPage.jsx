import "./WarehouseDetailsPage.scss";
import Card from "../../components/Card/Card";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import InventoryList from "../../components/InventoryList/InventoryList";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function WarehouseDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [warehouse, setWarehouse] = useState(null);
  const [inventories, setInventories] = useState([]);

  const handleWarehouseEditOnClick = () => {
    navigate(`/warehouses/${id}/edit`);
  };

  const handleInventoryEditOnClick = (inventoryItemId) => {
    console.log("InventoryEdit button clicked!", inventoryItemId);
  };

  const handleInventoryDeleteOnClick = (inventoryItemId) => {
    console.log("delete button clicked!", inventoryItemId);
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

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    const getWarehouseDetails = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/api/warehouses/${id}/inventories`
        );
        setInventories(data);
      } catch (e) {
        console.error("Error fetching warehouses:", e);
      }
    };

    getWarehouseDetails();
  }, [warehouse]);

  if (!warehouse) {
    return <></>;
  }

  return (
    <>
      <Card
        title={warehouse.warehouse_name}
        returnPath="/"
        handleWarehouseEditOnClick={handleWarehouseEditOnClick}
      >
        <WarehouseDetails warehouse={warehouse} />
        <InventoryList
          inventories={inventories}
          handleInventoryEditOnClick={handleInventoryEditOnClick}
          handleInventoryDeleteOnClick={handleInventoryDeleteOnClick}
        />
      </Card>
    </>
  );
}

export default WarehouseDetailsPage;
