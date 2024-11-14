import React from "react";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from '../../assets/Icons/edit-24px.svg';
import "./WarehouseList.scss";

const warehouseData = [
  {
    "id": 1,
    "warehouse_name": "Manhattan",
    "address": "503 Broadway",
    "city": "New York",
    "country": "USA",
    "contact_name": "Parmin Aujla",
    "contact_position": "Warehouse Manager",
    "contact_phone": "+1 (646) 123-1234",
    "contact_email": "paujla@instock.com"
  },
  {
    "id": 2,
    "warehouse_name": "Washington",
    "address": "33 Pearl Street SW",
    "city": "Washington",
    "country": "USA",
    "contact_name": "Greame Lyon",
    "contact_position": "Warehouse Manager",
    "contact_phone": "+1 (646) 123-1234",
    "contact_email": "glyon@instock.com"
  },
]
function WarehouseList() {
  return (
    <div className="warehouse-table">
      {/* Header row for tablet view */}
      <div className="warehouse-table__header">
        <div className="warehouse-table__header-cell">Name of Warehouse</div>
        <div className="warehouse-table__header-cell">Address</div>
        <div className="warehouse-table__header-cell">Contact Name</div>
        <div className="warehouse-table__header-cell">Contact Address</div>
        <div className="warehouse-table__header-cell warehouse-table__header-cell--actions">Actions</div>
      </div>
      
      {/* Data rows */}
      {warehouseData.map((warehouse, index) => (
        <div className="warehouse-table__row" key={index}>
          <div className="warehouse-table__cell-pair ">
            <div className="warehouse-table__title">Name of Warehouse</div>
            <div className="warehouse-table__content">{warehouse.warehouse_name}</div>
          </div>
          <div className="warehouse-table__cell-pair">
            <div className="warehouse-table__title">Address</div>
            <div className="warehouse-table__content">
              <p>{warehouse.address},</p>
              <p>{warehouse.city},</p>
              <p>{warehouse.country}</p>
              </div>
          </div>
          <div className="warehouse-table__cell-pair">
            <div className="warehouse-table__title">Contact Name</div>
            <div className="warehouse-table__content">{warehouse.contact_name}</div>
          </div>
          <div className="warehouse-table__cell-pair">
            <div className="warehouse-table__title">Contact Information</div>
            <div className="warehouse-table__content">
             <p> {warehouse.contact_phone}</p>
             <p> {warehouse.contact_email}</p>
              </div>
          </div>
          {/* Action buttons */}
          <div className="warehouse-table__actions">
          <img src={deleteIcon} alt="Delete" className="warehouse-table__icon" />
            <img src={editIcon} alt="Edit" className="warehouse-table__icon" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WarehouseList;
