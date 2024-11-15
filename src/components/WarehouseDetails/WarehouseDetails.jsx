import "./WarehouseDetails.scss";
import Card from "../Card/Card";

function WarehouseDetails({ warehouse }) {
  const handleEditOnClick = () => {
    console.log("Edit button clicked!");
  };

  return (
    <Card
      title={warehouse.warehouse_name}
      returnPath="/"
      handleEditOnClick={handleEditOnClick}
    >
      <div className="warehouse-info">
        <div className="warehouse-info__cell-pair">
          <h4 className="warehouse-info__title">WAREHOUSE ADDRESS:</h4>
          <div className="warehouse-info__content" id="address">
            <div className="warehouse-info__address">
              <p>{warehouse.address},&nbsp;</p>
              <p>
                {warehouse.city},&nbsp;{warehouse.country}
              </p>
            </div>
          </div>
        </div>
        <div className="warehouse-info__cell-pair">
          <h4 className="warehouse-info__title">CONTACT NAME:</h4>
          <div className="warehouse-info__content">
            <p>{warehouse.contact_name}</p>
            <p>{warehouse.contact_position}</p>
          </div>
        </div>
        <div className="warehouse-info__cell-pair">
          <h4 className="warehouse-info__title">CONTACT INFORMATION:</h4>
          <div className="warehouse-info__content">
            <p>{warehouse.contact_phone}</p>
            <p>{warehouse.contact_email}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default WarehouseDetails;
