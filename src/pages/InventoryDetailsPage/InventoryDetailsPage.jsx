import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./InventoryDetailsPage.scss";
import Card from "../../components/Card/Card";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";

function InventoryDetailsPage() {
  const { id } = useParams();
  const [inventoryItem, setInventoryItem] = useState(null);
  const navEdit = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  const handleInventoryEditOnClick = () => {
    navEdit(`/inventories/${inventoryItem.id}/edit`);
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

  if (!inventoryItem) {
    return <div>Loading...</div>;
  }

  return (
    <Card
      title={inventoryItem.item_name}
      returnPath="/inventories"
      handleEditOnClick={handleInventoryEditOnClick}
    >
      <InventoryDetails inventory={inventoryItem} />
    </Card>
  );
}

export default InventoryDetailsPage;
