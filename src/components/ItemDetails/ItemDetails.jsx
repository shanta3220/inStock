import "./ItemDetails.scss";
import arrowDown from "../../assets/Icons/arrow_drop_down-24px.svg"

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
        id="details"
        name="details"
        rows="4" 
        maxLength="500"
        className="item-details__textarea"
        placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors.'
      />
      {/* update the placeholder with the item description */}
      <div className="item-details__dropdown-container">
        <label className="item-details__label">Category</label>
        <div className="item-details__input-wrapper">
          <input
            className="item-details__input"
            type="text"
            placeholder="Select Category"
          />
          <img
            src={arrowDown}
            alt="Dropdown"
            className="item-details__dropdown-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
