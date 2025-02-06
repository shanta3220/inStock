import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import arrowRight from "../../assets/Icons/chevron_right-24px.svg";
import "./InventoryList.scss";
import HeaderCell from "../HeaderCell/HeaderCell";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteInventoryModal from "../DeleteInventoryModal/DeleteInventoryModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

function InventoryList({ inventories, setInventories }) {
  const showAllInventories = !window.location.pathname.includes("/warehouses");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const isWarehouseInventories =
    window.location.pathname.includes("/warehouses");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const quantityLabel = showAllInventories || isMobile ? "QTY" : "QUANTITY";
  // Delete Modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedInventory, setSelectedInventory] = useState(null);

  const openModal = (inventoryItem) => {
    setSelectedInventory(inventoryItem);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedInventory(null);
  };
  return (
    <div className="inventory-table inventories-table">
      <div
        className={`inventory-table__header ${
          isWarehouseInventories ? "inventory-table__header--detail" : ""
        }`}
      >
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
        <HeaderCell label="ACTIONS" align="right" />
      </div>

      {/* Data rows */}
      {inventories.length > 0 ? (
        inventories.map((inventory, index) => (
          <div
            className={`inventory-table__row ${
              isWarehouseInventories ? "inventory-table__row--detail" : ""
            }`}
            key={index}
          >
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
            <div className="inventory-table__actions">
              <img
                src={deleteIcon}
                alt="Delete Icon"
                className="inventory-table__icon"
                onClick={() => openModal(inventory)}
              />
              <Link
                to={`/inventories/${inventory.id}/edit`}
                state={{
                  inventoryId: inventory.id,
                  ...inventory, // Pass the entire inventory object
                }}
              >
                <img
                  src={editIcon}
                  alt="Edit Icon"
                  className="warehouse-table__icon"
                />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>
          Loading inventories... The server might be idle. Please wait a moment
          or refresh the page in 1 minute.
        </p>
      )}
      {selectedInventory && (
        <DeleteInventoryModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          id={selectedInventory.id}
          item={selectedInventory.item_name}
          setInventoryToDisplay={setInventories}
          inventories={inventories}
        />
      )}
    </div>
  );
}

export default InventoryList;
