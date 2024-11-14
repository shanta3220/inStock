import React from "react";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import arrowRight from "../../assets/Icons/chevron_right-24px.svg";
import "./WarehouseList.scss";
import HeaderCell from "../HeaderCell/HeaderCell";

const warehouseData = [
  {
    id: 1,
    warehouse_name: "Manhattan",
    address: "503 Broadway",
    city: "New York",
    country: "USA",
    contact_name: "Parmin Aujla",
    contact_position: "Warehouse Manager",
    contact_phone: "+1 (646) 123-1234",
    contact_email: "paujla@instock.com",
  },
  {
    id: 2,
    warehouse_name: "Washington",
    address: "33 Pearl Street SW",
    city: "Washington",
    country: "USA",
    contact_name: "Greame Lyon",
    contact_position: "Warehouse Manager",
    contact_phone: "+1 (646) 123-1234",
    contact_email: "glyon@instock.com",
  },
];
function WarehouseList() {
  return (
    <div className="warehouse-table">
      {/* Header row for tablet view */}
      <div className="warehouse-table__header">
        <HeaderCell
          label="WAREHOUSE"
          sortable
          onSort={() => handleSort("warehouse_name")}
        />
        <HeaderCell
          label="ADDRESS"
          sortable
          onSort={() => handleSort("address")}
        />
        <HeaderCell
          label="CONTACT NAME"
          sortable
          onSort={() => handleSort("contact_name")}
        />
        <HeaderCell
          label="CONTACT INFORMATION"
          sortable
          onSort={() => handleSort("contact_information")}
        />
        <HeaderCell label="Actions" align="right" />
      </div>

      {/* Data rows */}
      {warehouseData.map((warehouse, index) => (
        <div className="warehouse-table__row" key={index}>
          <div className="warehouse-table__cell-pair ">
            <h4 className="warehouse-table__title">WAREHOUSE</h4>
            <a href="#" className="warehouse-table__link">
              {" "}
              <span className="warehouse-table__link--name">
                {warehouse.warehouse_name}
              </span>
              <img
                src={arrowRight}
                alt="arrow"
                className="warehouse-table__arrow"
              />
            </a>
          </div>
          <div className="warehouse-table__cell-pair">
            <h4 className="warehouse-table__title">ADDRESS</h4>
            <div className="warehouse-table__content" id="address">
              <div className="warehouse-table__address">
                <p>{warehouse.address},&nbsp;</p>
                <p>{warehouse.city},&nbsp;</p>
              </div>
              <p>{warehouse.country}</p>
            </div>
          </div>
          <div className="warehouse-table__cell-pair">
            <h4 className="warehouse-table__title"> CONTACT NAME</h4>
            <div className="warehouse-table__content">
              {warehouse.contact_name}
            </div>
          </div>
          <div className="warehouse-table__cell-pair">
            <h4 className="warehouse-table__title">CONTACT INFORMATION</h4>
            <div className="warehouse-table__content">
              <p> {warehouse.contact_phone}</p>
              <p> {warehouse.contact_email}</p>
            </div>
          </div>
          {/* Action buttons */}
          <div className="warehouse-table__actions">
            <img
              src={deleteIcon}
              alt="Delete"
              className="warehouse-table__icon"
            />
            <img src={editIcon} alt="Edit" className="warehouse-table__icon" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default WarehouseList;
