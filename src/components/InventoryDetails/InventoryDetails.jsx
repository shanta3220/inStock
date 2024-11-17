import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import "./InventoryDetails.scss";

function InventoryDetails({ inventory, warehouse }) {
  const navEdit = useNavigate();
  const handleEditClick = () => {
    navEdit(`/inventory/edit/${inventory}`);
  };

  let statusColor = "";
  if (inventory.status === "Out of Stock") {
    statusColor = "inventory-info__status-red";
  } else {
    statusColor = "inventory-info__status-green";
  }

  return (
    <div className="inventory-info">
      <div className="inventory-info__top">
        <NavLink className="inventory-info__name" to={`/inventory`}>
          <div>
            {/* <img
              className="inventory-info__arrow"
              src={arrow}
              alt="Arrow to go back"
            /> */}
            <h1 className="inventory-info__item">{inventory.item_name}</h1>
          </div>
        </NavLink>
        <div className="inventory-info__button">
          <button onClick={handleEditClick} className="inventory-info__edit">
            <p className="inventory-info__button-text">Edit</p>
          </button>
        </div>
      </div>

      <div className="inventory-info__container">
        <div className="inventory-info__description-wrapper">
          <div className="inventory-info__description">
            <h2 className="inventory-info__heading">item description: </h2>
            <p className="inventory-info__text">{inventory.description}</p>
          </div>
          <div className="inventory-info__category-container">
            <h2 className="inventory-info__heading">Category: </h2>
            <p className="inventory-info__text">{inventory.category}</p>
          </div>
        </div>
        <div>
          <div className="inventory-info__bottom">
            <div className="inventory-info__status">
              <h2 className="inventory-info__heading">Status: </h2>
              <div className={statusColor}>
                <p className="inventory-info__text-status">
                  {inventory.status}
                </p>
              </div>
            </div>
            <div className="inventory-info__quantity">
              <h2 className="inventory-info__heading">Quantity: </h2>
              <p className="inventory-info__text">{inventory.quantity}</p>
            </div>
          </div>
          <div className="inventory-info__warehouse">
            <h2 className="inventory-info__heading">Warehouse: </h2>
            <p className="inventory-info__text">{warehouse.warehouse_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryDetails;
