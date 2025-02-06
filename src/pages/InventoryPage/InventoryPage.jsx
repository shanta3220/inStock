import React from "react";
import "./InventoryPage.scss";
import Card from "../../components/Card/Card";
import searchIcon from "../../assets/Icons/search-24px.svg";
import InventoryList from "../../components/InventoryList/InventoryList";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function InventoryPage() {
  const [inventories, setInventories] = useState([]);
  const navigate = useNavigate();

  const handleAddNewInventoryClick = () => {
    navigate("/inventories/add"); // Navigate to the Add New Inventory page
  };

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    axios
      .get(`${API_URL}/api/inventories`)
      .then((response) => {
        setInventories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching inventories data:", error);
      });
  }, []);
  return (
    <>
      <Card
        title="Inventories"
        headerContent={
          <div className="option">
            <div className="option__search-bar">
              <input
                className="option__search-input"
                type="text"
                placeholder="Search..."
              />
              <button className="option__search-button">
                <img
                  className="option__search-button--img"
                  src={searchIcon}
                  alt="Search Icon"
                />
              </button>
            </div>
            <button
              className="option__add-button"
              onClick={handleAddNewInventoryClick}
            >
              + Add New Inventory
            </button>
          </div>
        }
      >
        <InventoryList
          inventories={inventories}
          setInventories={setInventories}
        />
      </Card>
    </>
  );
}

export default InventoryPage;
