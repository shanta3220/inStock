import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import arrowRight from "../../assets/Icons/chevron_right-24px.svg";
import "./InventoryList.scss";
import HeaderCell from "../HeaderCell/HeaderCell";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function InventoryList({
  inventories,
  handleInventoryEditOnClick,
  handleInventoryDeleteOnClick,
}) {
  const showAllInventories = !window.location.pathname.includes("/warehouses");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const quantityLabel = showAllInventories || isMobile ? "QTY" : "QUANTITY";

  return (
    <div className="warehouse-table">
      <div className="warehouse-table__header">
        <HeaderCell
          label="INVENTORY ITEM"
          sortable
          onSort={() => handleSort("item_name")}
        />
        <HeaderCell
          label="CATEGORY"
          sortable
          onSort={() => handleSort("category")}
        />
        <HeaderCell
          label="STATUS"
          sortable
          onSort={() => handleSort("status")}
        />
        <HeaderCell
          label={quantityLabel}
          sortable
          onSort={() => handleSort("quantity")}
        />
        {showAllInventories && (
          <HeaderCell
            label="WAREHOUSE"
            sortable
            onSort={() => handleSort("warehouse_name")}
          />
        )}
        <HeaderCell label="Actions" align="right" />
      </div>

      {/* Data rows */}
      {inventories.length > 0 ? (
        inventories.map((inventory, index) => (
          <div className="inventory-table__row" key={index}>
            <div className="inventory-table__cell-pair">
              <h4 className="inventory-table__title">INVENTORY ITEM</h4>
              <Link
                to={`/inventories/${inventory.id}`}
                className="inventory-table__link"
              >
                <span className="inventory-table__link--name">
                  {inventory.item_name}
                </span>
                <img
                  src={arrowRight}
                  alt="arrow"
                  className="inventory-table__arrow"
                />
              </Link>
            </div>
            <div className="inventory-table__cell-pair">
              <h4 className="inventory-table__title">CATEGORY</h4>
              <div className="inventory-table__content">
                <p>{inventory.category}</p>
              </div>
            </div>
            <div className="inventory-table__cell-pair">
              <h4 className="inventory-table__title">STATUS</h4>
              <div
                className={`inventory-table__status${
                  inventory.status === "Out of Stock"
                    ? " inventory-table__status--out-of-stock"
                    : ""
                }`}
              >
                <p>{inventory.status}</p>
              </div>
            </div>
            <div className="inventory-table__cell-pair">
              <h4 className="inventory-table__title">{quantityLabel}</h4>
              <div className="inventory-table__content">
                <p>{inventory.quantity}</p>
              </div>
            </div>
            {showAllInventories && (
              <div className="inventory-table__cell-pair">
                <h4 className="inventory-table__title">WAREHOUSE</h4>
                <div className="inventory-table__content">
                  <p>{inventory.warehouse_name}</p>
                </div>
              </div>
            )}
            {/* Action buttons */}
            <div className="warehouse-table__actions">
              <img
                src={deleteIcon}
                alt="Delete"
                className="warehouse-table__icon"
                onClick={() => {
                  handleInventoryDeleteOnClick(inventory.id);
                }}
              />
              <Link
                to={{
                  pathname: `/inventory/${inventory.id}`, // Dynamically build the edit page URL
                }}
                state={{
                  inventoryId: inventory.id, 
                  ...inventory, // Pass the entire inventory object
                }}
              >
                <img
                  src={editIcon}
                  alt="Edit"
                  className="warehouse-table__icon"
                  onClick={() => {
                    handleInventoryEditOnClick(inventory);
                  }}
                />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div>No inventories available</div>
      )}
    </div>
  );
}

export default InventoryList;
