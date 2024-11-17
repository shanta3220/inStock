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
    warehouse_id: state?.warehouse_id || "",
    warehouse_name: state?.warehouse_name || "",
    item_name: state?.item_name || "",
    description: state?.description || "",
    category: state?.category || "",
    status: state?.status || "", // Ensure status is passed from state
    quantity: state?.quantity || 0, // Ensure quantity is passed from state
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    // Only fetch data if not available in state (fallback if needed)
    if (id && !state) {
      const fetchItemData = async () => {
        try {
          const response = await axios.get(`${API_URL}/api/inventories/${id}`);
          const itemData = response.data;
          setFormState({
            ...itemData,
            warehouse_id: state?.warehouse_id || itemData.warehouse_id,
            warehouse_name: state?.warehouse_name || itemData.warehouse_name,
          });
          setLoading(false);
        } catch (error) {
          console.error("Error fetching inventory item:", error);
          setLoading(false);
        }
      };
      fetchItemData();
    } else {
      setLoading(false); // If data is in state, just set loading to false
    }
  }, [id, state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL = import.meta.env.VITE_API_URL;
     const response= await axios.put(`${API_URL}/api/inventories/${id}`, formState);
      console.log("Response from server:", response);
      navigate("/inventory");
    } catch (error) {
      console.error("Error updating inventory item:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Card title="Edit Inventory Item" returnPath="/inventory">
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <ItemDetails formState={formState} onChange={handleInputChange} />
          <ItemAvailability
           status={formState.status.toLowerCase().replace(/\s+/g, "-")} // Normalize status
           warehouse={formState.warehouse_name}
           quantity={formState.quantity}
           onChange={handleInputChange}
            
          />
        </div>
        <CancelSaveButtons />
      </form>
    </Card>
  );
}

export default EditInventoryPage;
