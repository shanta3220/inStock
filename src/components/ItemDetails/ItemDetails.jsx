import "./ItemDetails.scss";
import { useState,useEffect } from "react";
import axios from "axios";

const ItemDetails = ({ formState, onChange }) => {
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
        console.log(uniqueCategories)
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="item-details">
      <h2 className="item-details__header">Item details</h2>

      <label htmlFor="item_name" className="item-details__label">
        Item Name
      </label>
      <input
        id="item_name"
        name="item_name"
        placeholder="Enter item name"
        value={formState.item_name || ""}
        className="item-details__input"
        onChange={onChange}
      />

      <label htmlFor="description" className="item-details__label">
        Description
      </label>
      <textarea
        className="item-details__textarea"
        id="description"
        name="description"
        placeholder="Description"
        value={formState.description || ""}
        onChange={onChange}
      />

      <label htmlFor="category" className="item-details__label">
        Category
      </label>
      <select
        id="category"
        name="category"
        value={formState.category || ""}
        onChange={onChange}
        className="item-details__select"
      >
        <option value="" disabled>
          Select an option
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
    </div>
  );
};

export default ItemDetails;