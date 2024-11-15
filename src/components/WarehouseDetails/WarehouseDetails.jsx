import "./WarehouseDetails.scss";
import Card from "../Card/Card";

function WarehouseDetails({ warehouseInfo }) {
  const handleEditOnClick = () => {
    console.log("Edit button clicked!");
  };

  return (
    <Card
      title={warehouseInfo.warehouse_name}
      returnPath="/"
      handleEditOnClick={handleEditOnClick}
    >
      <div></div>
    </Card>
  );
}

export default WarehouseDetails;
