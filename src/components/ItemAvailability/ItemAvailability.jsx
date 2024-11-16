import React, { useState, useEffect } from "react";
import "./ItemAvailability.scss";

const ItemAvailability = () => {
  const [status, setStatus] = useState("out-of-stock");
  const [warehouse, setWarehouse] = useState("Manhattan");
  const [quantity, setQuantity] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280); // Detect screen size

  // Adjust isDesktop state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleStatusChange = (e) => setStatus(e.target.value);
  const handleWarehouseChange = (e) => setWarehouse(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);

  return (
    <div className="item-availability">
      <h2 className="item-availability__title">Item Availability</h2>

      <div className="item-availability__section">
        <label className="item-availability__label">Status</label>
        <div className="item-availability__status-options">
          <label className="item-availability__radio">
            <input
              type="radio"
              name="status"
              value="in-stock"
              checked={status === "in-stock"}
              onChange={handleStatusChange}
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
          <label className="item-availability__radio">
            <input
              type="radio"
              name="status"
              value="out-of-stock"
              checked={status === "out-of-stock"}
              onChange={handleStatusChange}
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
      {/* Conditionally render quantity input when status is 'in-stock' and on desktop */}
      {status === "in-stock" && isDesktop && (
        <div className="item-availability__quantity">
          <label
            htmlFor="quantity"
            className="item-availability__label"
          >
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            className="item-availability__quantity-input"
            value={quantity}
            onChange={handleQuantityChange}
            placeholder="Enter quantity"
          />
        </div>
      )}
      <div className="item-availability__section">
        <label className="item-availability__label">Warehouse</label>
        <select
          className="item-availability__select"
          value={warehouse}
          onChange={handleWarehouseChange}
        >
          <option value="Manhattan">Manhattan</option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
          <option value="Bronx">Bronx</option>
          <option value="Staten Island">Staten Island</option>
        </select>
      </div>
    </div>
  );
};

export default ItemAvailability;
