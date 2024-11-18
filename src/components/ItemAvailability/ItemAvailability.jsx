import { useState, useEffect } from "react";
import "./ItemAvailability.scss";
import axios from "axios";
import error from '../../assets/Icons/error-24px.svg'


const ItemAvailability = ({ status, formState, onChange, submitted }) => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/warehouses`);
        setWarehouses(response.data);
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

  // Function to get error class if field is empty and form is submitted
  const getErrorClass = (fieldValue) => {
    return submitted && !fieldValue ? "item-availability__input-error" : "";
  };
  const renderErrorMessage = (fieldValue) => {
    return submitted && !fieldValue ? (
      <div className="item-availability__error-message">
        <img 
        className="item-availability__error-img"
        src={error} alt='error icon'/> 
        <p className="item-availability__error-text">This field is required.</p>
      </div>
    ) : null;
  };


  return (
    <div className="item-availability">
      <h2 className="item-availability__title">Item Availability</h2>

      <div className="item-availability__section">
        <label className="item-availability__label">Status</label>
        <div className="item-availability__status-options">
          <label htmlFor="status-in-stock" className="item-availability__radio">
            <input
              type="radio"
              id="status-in-stock"
              name="status"
              value="in-stock"
              checked={formState.status === "in-stock"}
              onChange={onChange}
            />
            {renderErrorMessage(formState.status)}
            <span
              className={`item-availability__radio-text ${
                formState.status === "in-stock"
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
              checked={formState.status === "out-of-stock"}
              onChange={onChange}
            />
            {renderErrorMessage(formState.status)}
            <span
              className={`item-availability__radio-text ${
                formState.status === "out-of-stock"
                  ? "item-availability__radio-text--out-of-stock"
                  : ""
              }`}
            >
              Out of stock
            </span>
          </label>
        </div>
      </div>

      {formState.status === "in-stock" && (
        <div className="item-availability__quantity">
          <label htmlFor="quantity" className="item-availability__label">
            Quantity
          </label>
          <input
            className={`item-availability__quantity-input ${getErrorClass(formState.quantity)}`}
            id="quantity"
            type="number"
            name="quantity"
            value={formState.quantity !== undefined && formState.quantity !== null ? formState.quantity : ""}
            onChange={onChange}
            min="0"
            placeholder="Enter quantity"
          />
          {renderErrorMessage(formState.quantity)}
        </div>
      )}

      <div className="item-availability__section">
        <label htmlFor="warehouse_name" className="item-availability__label">Warehouse</label>
        <select
          className={`item-availability__select ${getErrorClass(formState.warehouse_name)}`}
          id="warehouse_name"
          name="warehouse_name"
          value={formState.warehouse_name || ""}
          onChange={handleSelectChange}
        >
          <option value="" disabled>
            Select a warehouse
          </option>
          {warehouses.length > 0 ? (
            warehouses.map((warehouse) => (
              <option key={warehouse.id} value={warehouse.warehouse_name}>
                {warehouse.warehouse_name}
              </option>
            ))
          ) : (
            <option value="" disabled>
              Loading warehouses...
            </option>
          )}
        </select>
        {renderErrorMessage(formState.warehouse)}
      </div>
    </div>
  );
};

export default ItemAvailability;
