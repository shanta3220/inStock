import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CancelSaveButtons from "../../components/CancelSaveButtons/CancelSaveButtons";
import Card from "../../components/Card/Card";
import ItemAvailability from "../../components/ItemAvailability/ItemAvailability";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import "./EditInventoryPage.scss";

function EditInventoryPage() {
  const { id } = useParams(); // Get the inventory ID from URL
  const { state } = useLocation(); // Optional state from navigation
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    warehouse_id: state?.warehouse_id || "", // Only set warehouse_id from state
    warehouse_name: state?.warehouse_name || "", // Optionally display warehouse_name, 
    item_name: state?.item_name || "",
    description: state?.description || "",
    category: state?.category || "",
    status: state?.status?.toLowerCase().replace(/\s+/g, "-") || "",
    quantity: state?.quantity || 0,
  });
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false); // Track if form is submitted

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    // Fetch item data only if not provided by state
    if (id && !state) {
      const fetchItemData = async () => {
        try {
          const response = await axios.get(`${API_URL}/api/inventories/${id}`);
          const itemData = response.data;
          setFormState((prevState) => ({
            ...prevState,
            ...itemData,
            status: itemData.status.toLowerCase().replace(/\s+/g, "-"),
          }));
          setLoading(false);
        } catch (error) {
          console.error("Error fetching inventory item:", error);
          setLoading(false);
        }
      };
      fetchItemData();
    } else {
      setLoading(false); // Skip fetching if state is provided
    }
  }, [id, state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true); // Set form to "submitted" state

    // Validation check for required fields
    if (!formState.warehouse_id || !formState.warehouse_name) {
      alert("Please select a warehouse.");
      return;
    }

    const updatedInventory = {
      ...formState,
      warehouse_id: formState.warehouse_id, // Ensure warehouse_id is included in the request
    };

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await axios.put(
        `${API_URL}/api/inventories/${id}`,
        updatedInventory
      );
      navigate("/inventories"); // Navigate to inventory after successful update
    } catch (error) {
      console.error("Error updating inventory item:", error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Card title="Edit Inventory Item" returnPath="/inventories">
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          {/* Pass the submitted state to both components */}
          <ItemDetails
            formState={formState}
            onChange={handleInputChange}
            submitted={submitted}
          />
          <ItemAvailability
            formState={formState}
            onChange={handleInputChange}
           // status={formState.status.toLowerCase().replace(/\s+/g, "-")}
            submitted={submitted} 
          />
        </div>
        <CancelSaveButtons />
      </form>
    </Card>
  );
}

export default EditInventoryPage;
