import { useState } from "react";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import ItemAvailability from "../../components/ItemAvailability/ItemAvailability";
import Card from "../../components/Card/Card";
import CancelSaveButtons from "../../components/CancelSaveButtons/CancelSaveButtons";
import axios from "axios";
import './AddNewInventoryPage.scss'

const AddNewInventoryPage = () => {
  // Initialize form state with placeholder values
  const [formState, setFormState] = useState({
    warehouse_id: 1, // Default warehouse ID (adjust as necessary)
    item_name: "",
    description: "",
    category: "",
    status: "In Stock", // Default status (can be "In Stock" or "Out of Stock")
    quantity: null, // Default quantity
  });

  // Track if the form has been submitted (for validation)
  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true); // Trigger validation on submit

    // Basic validation
    if (!formState.item_name || !formState.description || !formState.category || formState.quantity <= 0) {
      alert("Please fill in all fields.");
      return;
    }

    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const response = await axios.post(`${API_URL}/api/inventories`, formState);
      console.log("Inventory item added:", response.data);

      // Reset form after successful submission
      setFormState({
        warehouse_id: 1,
        item_name: "",
        description: "",
        category: "",
        status: "In Stock",
        quantity: 0,
      });
      setSubmitted(false); // Reset the submitted state

      // Redirect or handle post-submission actions as needed
      navigate("/inventory"); // Uncomment if using react-router for navigation
    } catch (error) {
      console.error("Error adding inventory item:", error);
    }
  };

  return (
    <Card title="Add New Inventory Item" returnPath="/inventory">
      <form onSubmit={handleSubmit}>
      <div className="form-fields">
        <ItemDetails formState={formState} onChange={handleFormChange} submitted={submitted} />
        <ItemAvailability formState={formState} onChange={handleFormChange} submitted={submitted} />
        </div>
        <CancelSaveButtons />

      </form>
    </Card>
  );
};

export default AddNewInventoryPage;
