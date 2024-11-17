import "./ItemDetails.scss";

const ItemDetails = ({ formState, onChange }) => {
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
        placeholder="Enter description"
        value={formState.description || ""} 
        onChange={onChange}
      />

      <label htmlFor="category" id="category" className="item-details__label">
        Category
      </label>
      <select
        className="item-details__select"
        name="category"
        value={formState.category || ""}
        onChange={onChange}
      >
        <option value="" disabled>
          Select an option
        </option>
        <option value="Electronics">Electronics</option>
        <option value="Gear">Gear</option>
        <option value="Apparel">Apparel</option>
        <option value="Accessories">Accessories</option>
        <option value="Health">Health</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};

export default ItemDetails;
