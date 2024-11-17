import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CancelSaveButtons from "../../components/CancelSaveButtons/CancelSaveButtons";
import Card from "../../components/Card/Card";
import ItemAvailability from "../../components/ItemAvailability/ItemAvailability";
import ItemDetails from "../../components/ItemDetails/ItemDetails";
import "./EditInventoryPage.scss";

function EditInventoryPage() {
  const id = "1"; // Manually set the ID for testing purposes
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    warehouse_id: "",
    item_name: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    const fetchItemData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/inventories/${id}`);
        console.log("Fetched data:", response.data);
        const itemData = response.data[0];
        setFormState(itemData); // Assuming response matches the form state structure
        console.log("Updated formState after setting:", formState)
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching inventory item:", error);
        setLoading(false);
      }
    };

    fetchItemData();
  }, [id]);
  useEffect(() => {
    console.log("Form state updated:", formState); // Log whenever formState is updated
  }, [formState]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      await axios.put(`${API_URL}/api/inventories/${id}`, formState);
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
          <ItemAvailability status={formState.status} quantity={formState.quantity} onChange={handleInputChange} />
        </div>
        <CancelSaveButtons />
      </form>
    </Card>
  );
}

export default EditInventoryPage;
