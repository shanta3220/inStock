import React, { useState, useEffect } from "react";
import "./ItemAvailability.scss";

const ItemAvailability = ({ status, warehouse, quantity, onChange }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  console.log("status", status)
  console.log("quantity", status)


  // Adjust `isDesktop` state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="item-availability">
      <h2 className="item-availability__title">Item Availability</h2>

      {/* Status Section */}
      <div className="item-availability__section">
        <label className="item-availability__label">Status</label>
        <div className="item-availability__status-options">
          <label className="item-availability__radio">
            <input
              type="radio"
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
          <label className="item-availability__radio">
            <input
              type="radio"
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
      {status === "in-stock" && isDesktop && (
        <div className="item-availability__quantity">
          <label htmlFor="quantity" className="item-availability__label">
            Quantity
          </label>
          <input
          className="item-availability__quantity-input"
          id="quantity"
          type="number"
          name="quantity"
          value={quantity} // Display current quantity
          onChange={onChange}
          />
        </div>
      )}

      {/* Warehouse Section */}
      <div className="item-availability__section">
        <label className="item-availability__label">Warehouse</label>
        <select
          className="item-availability__select"
          name="warehouse"
          value={warehouse} // Display current warehouse
          onChange={onChange}
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
