import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./InventoryDetailsPage.scss";
import Card from "../../components/Card/Card";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";
import InventoryList from "../../components/InventoryList/InventoryList";

function InventoryDetailsPage() {
  const { id } = useParams();
  const [inventoryItem, setInventoryItem] = useState(null);
  const [warehouse, setWarehouse] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const handleInventoryEditOnClick = (inventoryItemId) => {
    console.log("InventoryEdit button clicked!", inventoryItemId);
  };

  useEffect(() => {
    const fetchInventoryDetails = async () => {
      try {
        const { data: inventoryData } = await axios.get(
          `${API_URL}/api/inventories/${id}`
        );
        setInventoryItem(inventoryData);
      } catch (error) {
        console.error(
          "Error fetching inventory or warehouse data:",
          error.response || error.message
        );
      }
    };
    fetchInventoryDetails();
  }, [id, API_URL]);

  useEffect(() => {
    const fetchWarehouseDetails = async () => {
      if (inventoryItem) {
        try {
          const { data: warehouseData } = await axios.get(
            `${API_URL}/api/warehouses/${inventoryItem.warehouse_id}`
          );
          console.log(
            "Request URL:",
            `${API_URL}/api/warehouses/${inventoryItem.warehouse_id}`
          );

          setWarehouse(warehouseData);
        } catch (error) {
          console.error(
            "Error fetching inventory or warehouse data:",
            error.response || error.message
          );
        }
      }
    };
    fetchWarehouseDetails();
  }, [inventoryItem]);

  if (!inventoryItem || !warehouse) {
    return <div>Loading...</div>;
  }

  return (
    <Card title={inventoryItem.inventory_name} returnPath="/inventories">
      <InventoryDetails inventory={inventoryItem} warehouse={warehouse} />

      <InventoryList
        inventories={inventoryItem}
        handleInventoryEditOnClick={handleInventoryEditOnClick}
        handleInventoryDeleteOnClick={(inventoryItemId) =>
          console.log("Delete button clicked!", inventoryItemId)
        }
      />
    </Card>
  );
}

export default InventoryDetailsPage;
