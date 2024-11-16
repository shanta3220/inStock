import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Card/Card";

function AddUpdateWarehousePage() {
  const { id } = useParams();
  const addWarehouse = id === undefined;

  const navigate = useNavigate();
  const warehouse = null;

  useEffect(() => {}, []);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNameChange = () => {};
  const handleAddressChange = () => {};
  const handleCityChange = () => {};
  const handleCountryChange = () => {};
  const handleContactNameChange = () => {};
  const handlePositionChange = () => {};
  const handlePhoneNumberChange = () => {};
  const handleEmailChange = () => {};

  return (
    <>
      <Card
        title={addWarehouse ? "Add New Warehouse" : "Edit Warehouse"}
        returnPath={id ? `/warehouses/${id}` : "/"}
      >
        <form className="warehouse-form" onSubmit={handleSubmit}>
          <div className="warehouse-form__category">
            <h2 className="warehouse-form__category-title">
              Warehouse Details
            </h2>
            <label className="warehouse-form__label">
              Warehouse Name
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Warehouse Name"
                className="warehouse-form__input-field"
                onChange={handleNameChange}
                required
              />
            </label>
            <label className="warehouse-form__label">
              Street Address
              <input
                type="text"
                name="address"
                value={address}
                placeholder="Street Address"
                className="warehouse-form__input-field"
                onChange={handleAddressChange}
                required
              />
            </label>
            <label className="warehouse-form__label">
              City
              <input
                type="text"
                name="city"
                value={city}
                placeholder="City"
                className="warehouse-form__input-field"
                onChange={handleCityChange}
                required
              />
            </label>
            <label className="warehouse-form__label">
              Country
              <input
                type="text"
                name="country"
                value={country}
                placeholder="Country"
                className="warehouse-form__input-field"
                onChange={handleCountryChange}
                required
              />
            </label>
          </div>
          <div className="warehouse-form__category">
            <h2 className="warehouse-form__category-title">Contact Details</h2>
            <label className="warehouse-form__label">
              Contact Name
              <input
                type="text"
                name="contactName"
                value={contactName}
                placeholder="Contact Name"
                className="warehouse-form__input-field"
                onChange={handleContactNameChange}
                required
              />
            </label>
            <label className="warehouse-form__label">
              Position
              <input
                type="text"
                name="position"
                value={position}
                placeholder="Position"
                className="warehouse-form__input-field"
                onChange={handlePositionChange}
                required
              />
            </label>
            <label className="warehouse-form__label">
              Phone Number
              <input
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                placeholder="Phone Number"
                className="warehouse-form__input-field"
                onChange={handlePhoneNumberChange}
                required
              />
            </label>
            <label className="warehouse-form__label">
              Email
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Email"
                className="warehouse-form__input-field"
                onChange={handleEmailChange}
                required
              />
            </label>
          </div>
          <div className="warehouse-form__buttons">
            <button type="submit">
              {addWarehouse ? "+ Add Warehouse" : "Save"}
            </button>
            <button
              type="button"
              onClick={() => {
                navigate(`/warehouses/${id}`);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default AddUpdateWarehousePage;
