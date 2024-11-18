import "./ItemDetails.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import error from "../../assets/Icons/error-24px.svg";

const ItemDetails = ({ formState, onChange, submitted }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/inventories`);
        const inventoryData = response.data;

        const uniqueCategories = [
          ...new Set(inventoryData.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };

    fetchCategories();
  }, []);

  const getErrorClass = (fieldValue) => {
    return submitted && !fieldValue ? "item-details__input-error" : "";
  };
  const renderErrorMessage = (fieldValue) => {
    return submitted && !fieldValue ? (
      <div className="item-details__error-message">
        <img className="item-details__error-img" src={error} alt="error icon" />
        <p className="item-details__error-text">This field is required.</p>
      </div>
    ) : null;
  };

  return (
    <div className="item-details">
      <h2 className="item-details__header">Item Details</h2>
      <label htmlFor="item_name" className="item-details__label">
        Item Name
      </label>
      <input
        id="item_name"
        name="item_name"
        placeholder="Item Name"
        value={formState.item_name || ""}
        className={`item-details__input ${getErrorClass(formState.item_name)}`}
        onChange={onChange}
      />
      {renderErrorMessage(formState.item_name)}

      <label htmlFor="description" className="item-details__label">
        Description
      </label>
      <textarea
        className={`item-details__textarea ${getErrorClass(
          formState.description
        )}`}
        id="description"
        name="description"
        placeholder="Description"
        value={formState.description || ""}
        onChange={onChange}
      />
      {renderErrorMessage(formState.description)}

      <label htmlFor="category" className="item-details__label">
        Category
      </label>
      <select
        id="category"
        name="category"
        value={formState.category || ""}
        onChange={onChange}
        className={`item-details__select ${getErrorClass(formState.category)}`}
      >
        <option value="" disabled>
          Please Select
        </option>
        {categories.length > 0 ? (
          categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))
        ) : (
          <option value="" disabled>
            Loading categories...
          </option>
        )}
      </select>
      {renderErrorMessage(formState.category)}
    </div>
  );
};

export default ItemDetails;
