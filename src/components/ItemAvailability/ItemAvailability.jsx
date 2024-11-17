import { useState, useEffect } from "react";
import "./ItemAvailability.scss";
import axios from "axios";

const ItemAvailability = ({status, formState, onChange }) => {
  const [warehouses, setWarehouses] = useState([]);

  // Fetch warehouse data when the component mounts
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/warehouses`);  // Adjust API endpoint as needed
        console.log(response)
        setWarehouses(response.data);  // Assuming response.data is an array of warehouses
      } catch (error) {
        console.error("Error fetching warehouse data:", error);
      }
    };

    fetchWarehouses();
  }, []);

  const handleSelectChange = (e) => {
    const selectedWarehouseName = e.target.value;
    const selectedWarehouse = warehouses.find(
      (warehouse) => warehouse.warehouse_name === selectedWarehouseName
    );
    
    // Ensure you update the warehouse_name and warehouse_id in formState
    if (selectedWarehouse) {
      onChange({
        target: {
          name: "warehouse_name",
          value: selectedWarehouse.warehouse_name,
        },
      });
      
      onChange({
        target: {
          name: "warehouse_id",
          value: selectedWarehouse.id,
        },
      });
    }
  };

  return (
    <div className="item-availability">
      <h2 className="item-availability__title">Item Availability</h2>

      {/* Status Section */}
      <div className="item-availability__section">
        <label className="item-availability__label">Status</label>
        <div className="item-availability__status-options">
          <label htmlFor="status-in-stock" className="item-availability__radio ">
            <input
              type="radio"
               id="status-in-stock"
              name="status"
              value="in-stock"
              checked={status === "in-stock"} // Check based on current status
              onChange={onChange}
            />
            <span
              className={`item-availability__radio-text ${
                status === "in-stock"
                  ? "item-availability__radio-text--in-stock"
                  : ""
              }`}
            >
              In stock
            </span>
          </label>
          <label htmlFor="status-out-of-stock" className="item-availability__radio">
            <input
              type="radio"
              id="status-out-of-stock"
              name="status"
              value="out-of-stock"
              checked={status === "out-of-stock"} // Check based on current status
              onChange={onChange}
            />
            <span
              className={`item-availability__radio-text ${
                status === "out-of-stock"
                  ? "item-availability__radio-text--out-of-stock"
                  : ""
              }`}
            >
              Out of stock
            </span>
          </label>
        </div>
      </div>

      {/* Quantity Section */}
      {status === "in-stock" && (
        <div className="item-availability__quantity">
          <label htmlFor="quantity" className="item-availability__label">
            Quantity
          </label>
          <input
          className="item-availability__quantity-input"
          id="quantity"
          type="number"
          name="quantity"
          value={formState.quantity} // Display current quantity
          onChange={onChange}
          />
        </div>
      )}

      {/* Warehouse Section */}
      <div className="item-availability__section">
        <label htmlFor="warehouse_name" className="item-availability__label">Warehouse</label>
        <select
          className="item-availability__select"
          id="warehouse_name"
          name="warehouse_name"
          value={formState.warehouse_name}
          onChange={handleSelectChange}// Update form state on change
        >
          {warehouses.length > 0 ? (
            warehouses.map((warehouse) => (
              <option key={warehouse.id} value={warehouse.warehouse_name}>
                {warehouse.warehouse_name}
              </option>
            ))
          ) : (
            <option value="">Loading...</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default ItemAvailability;
