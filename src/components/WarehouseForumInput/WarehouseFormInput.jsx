import React from "react";
import errorIcon from "../../assets/Icons/error-24px.svg";

function WarehouseFormInput({
  label,
  field,
  value,
  errorMessage,
  handleChange,
}) {
  return (
    <label className="warehouse-form__label">
      {label}
      <input
        type="text"
        name={field}
        value={value}
        placeholder={label}
        className={`warehouse-form__input-field ${
          errorMessage ? "warehouse-form__input-field--invalid" : ""
        }`}
        onChange={(e) => handleChange(e, field)}
      />
      {errorMessage && (
        <div className="warehouse-form__error-field-message">
          <img src={errorIcon} /> <p>{errorMessage}</p>
        </div>
      )}
    </label>
  );
}

export default WarehouseFormInput;
