import "./ItemDetails.scss";

const ItemDetails = () => {
  return (
    <div className="item-details">
      <h2 className="item-details__header">Item details</h2>
      <label id="name" name="name" className="item-details__label">
        Item Name
      </label>
      <input
        id="name"
        name="name"
        placeholder="Television"
        className="item-details__input"
      />
      {/* update the placeholder with the item name clicked */}
      <label id="details" name="details" className="item-details__label">
        Description
      </label>
      <textarea
        className="item-details__textarea"
        id="details"
        name="details"
        placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors.'
      />
      {/* update the placeholder with the item description */}
      <label className="item-details__label">Category</label>
      <select className="item-details__select">
        <option value="" disabled>
          Select an option
        </option>
      </select>
    </div>
  );
};

export default ItemDetails;
