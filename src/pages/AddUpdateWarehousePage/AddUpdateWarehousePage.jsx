import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/Card/Card";

function AddUpdateWarehousePage({ addNewform }) {
  const { id } = useParams();
  const warehouse = null;

  useEffect(() => {}, []);
  const [warehouseName, setWarehouseName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleWarehouseNameChange = () => {};

  return (
    <>
      <Card
        title={addNewform ? "Add New Warehouse" : "Edit Warehouse"}
        returnPath={`/warehouses/${id}`}
      >
        <form className="warehouse-form" onSubmit={handleSubmit}>
          <div className="warehouse-form__category">
            <h2 className="warehouse-form__category-title">
              Warehouse Details
            </h2>
            <label className="upload-form__label">
              Warehouse Name
              <input
                type="text"
                name="warehouseName"
                value={warehouseName}
                placeholder="Warehouse Name"
                className="warehouse-form__input-field"
                onChange={handleWarehouseNameChange}
                required
              />
            </label>
          </div>
          <div className="warehouse-form__buttons">
            <button type="submit">
              {addNewform ? "+ Add Warehouse" : "Save"}
            </button>
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </Card>
    </>
  );
}

export default AddUpdateWarehousePage;
