import "./WarehouseFormPage.scss";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card/Card";
import errorIcon from "../../assets/Icons/error-24px.svg";
import WarehouseFormInput from "../../components/WarehouseForumInput/WarehouseFormInput";

function WarehouseFormPage() {
  const nameField = "name";
  const addressField = "address";
  const cityField = "city";
  const countryField = "country";
  const contactField = "contactName";
  const positionField = "position";
  const phoneField = "phoneNumber";
  const emailField = "email";

  const { id } = useParams();
  const addWarehouse = id === undefined;

  const navigate = useNavigate();

  useEffect(() => {}, []);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    contactName: "",
    position: "",
    phoneNumber: "",
    email: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    contactName: "",
    position: "",
    phoneNumber: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasAnyErrors = "";
    for (let key of Object.keys(formData)) {
      hasAnyErrors = checkErrors(key, formData[key]);
      if (hasAnyErrors) {
        break;
      }
    }

    if (hasAnyErrors) {
      return;
    }

    const API_URL = import.meta.env.VITE_API_URL;
    const warehouseObject = {
      warehouse_name: formData.name,
      address: formData.address,
      city: formData.city,
      country: formData.country,
      contact_name: formData.contactName,
      contact_position: formData.position,
      contact_phone: formData.phoneNumber,
      contact_email: formData.email,
    };

    const updateOrAddWarehouse = async () => {
      try {
        if (addWarehouse) {
          const { data } = await axios.post(
            `${API_URL}/api/warehouses/`,
            warehouseObject
          );
          if (data) {
            alert("Succesfully added a new warehouse!");
            navigate("/");
          }
        } else {
          const { data } = await axios.put(
            `${API_URL}/api/warehouses/${id}`,
            warehouseObject
          );
          if (data) {
            alert(`Succesfully added updated ${data.warehouse_name}`);
            navigate(`/warehouses/${id}`);
          }
        }
      } catch (e) {
        console.error("Failed to update/add the warehouse:", e);
      }
    };
    updateOrAddWarehouse();
  };

  const handleChange = (e, inputName) => {
    const value = e.target.value;

    setFormData((prev) => ({
      ...prev,
      [inputName]: value,
    }));
    checkErrors(inputName, value);
  };

  const checkErrors = (inputName, value) => {
    let errorText = "";
    switch (inputName) {
      case nameField:
        errorText =
          value.trim() === "" ? "Name cannot be empty or have whitespace" : "";
        break;
      case addressField:
        errorText =
          value.trim() === ""
            ? "Address cannot be empty or have whitespace"
            : "";
        break;
      case cityField:
        errorText =
          value.trim() === "" ? "City cannot be empty or have whitespace" : "";
        break;
      case countryField:
        errorText =
          value.trim() === ""
            ? "Country cannot be empty or have whitespace"
            : "";
        break;
      case contactField:
        errorText =
          value.trim() === ""
            ? "Contact Name cannot be empty or have whitespace"
            : "";
        break;

      case positionField:
        errorText =
          value.trim() === ""
            ? "Contact Position be empty or have whitespace"
            : "";
        break;

      case phoneField:
        {
          errorText =
            value.trim() === ""
              ? "Phone Number cannot be empty or have whitespace"
              : "";

          if (!errorText) {
            const isPhoneValid =
              /^\+?[1-9]\d{0,2}\s?(\(\d{1,4}\)|\d{1,4})[-\s]?\d{1,4}[-\s]?\d{1,4}$/g.test(
                value
              );
            if (!isPhoneValid) {
              errorText =
                "Please insert a valid phone number, ie: +1 (123) 456-798";
            }
          }
        }
        break;
      case emailField:
        errorText =
          value.trim() === "" ? "Email cannot be empty or have whitespace" : "";
        if (!errorText) {
          const isEmailValid =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(value);
          if (!isEmailValid) {
            errorText = "Please insert a valid email, ie: johndoe@abcd.com";
          }
        }

        break;

      default:
        break;
    }

    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [inputName]: errorText,
    }));

    return errorText;
  };

  return (
    <>
      <Card
        title={addWarehouse ? "Add New Warehouse" : "Edit Warehouse"}
        returnPath={id ? `/warehouses/${id}` : "/"}
      >
        <form className="warehouse-form" onSubmit={handleSubmit}>
          <div className="warehouse-form__contents">
            <div className="warehouse-form__category-contents">
              <h2 className="warehouse-form__category-title">
                Warehouse Details
              </h2>
              <WarehouseFormInput
                label="Warehouse Name"
                field={nameField}
                value={formData[nameField]}
                errorMessage={errorMessages[nameField]}
                handleChange={handleChange}
              />
              <WarehouseFormInput
                label="Street Address"
                field={addressField}
                value={formData[addressField]}
                errorMessage={errorMessages[addressField]}
                handleChange={handleChange}
              />
              <WarehouseFormInput
                label="City"
                field={cityField}
                value={formData[cityField]}
                errorMessage={errorMessages[cityField]}
                handleChange={handleChange}
              />
              <WarehouseFormInput
                label="Country"
                field={countryField}
                value={formData[countryField]}
                errorMessage={errorMessages[countryField]}
                handleChange={handleChange}
              />
            </div>
            <div className="warehouse-form__category-contents">
              <h2 className="warehouse-form__category-title">
                Contact Details
              </h2>
              <WarehouseFormInput
                label="Contact Name"
                field={contactField}
                value={formData[contactField]}
                errorMessage={errorMessages[contactField]}
                handleChange={handleChange}
              />
              <WarehouseFormInput
                label="Position"
                field={positionField}
                value={formData[positionField]}
                errorMessage={errorMessages[positionField]}
                handleChange={handleChange}
              />
              <WarehouseFormInput
                label="Phone Number"
                field={phoneField}
                value={formData[phoneField]}
                errorMessage={errorMessages[phoneField]}
                handleChange={handleChange}
              />
              <WarehouseFormInput
                label="Email"
                field={emailField}
                value={formData[emailField]}
                errorMessage={errorMessages[emailField]}
                handleChange={handleChange}
              />
            </div>
          </div>
          <div className="warehouse-form__buttons">
            <button
              className="warehouse-form__button--cancel"
              type="button"
              onClick={() => {
                navigate(id ? `/warehouses/${id}` : "/");
              }}
            >
              Cancel
            </button>
            <button type="submit" className="warehouse-form__button">
              {addWarehouse ? "+ Add Warehouse" : "Save"}
            </button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default WarehouseFormPage;
