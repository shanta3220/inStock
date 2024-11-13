
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg"
import editIcon from '../../assets/Icons/edit-24px.svg'

const warehouseData = [
  {
    name: 'Manhattan',
    address: '503 Broadway, New York, USA',
    contactName: 'Parmin Aujla',
    contactInfo: '+1 (629) 555-0129 | paujla@instock.com',
  },
  // Add more warehouse objects here...
];

function WarehouseList() {
  return (
    <div className="warehouse-list">
      {warehouseData.map((warehouse, index) => (
        <div key={index} className="warehouse-card">
          <div className="warehouse-info">
            <div className="warehouse-row">
              <h4>WAREHOUSE</h4>
              <a href="#" className="warehouse-link">{warehouse.name} <span className="arrow">▶</span></a>
            </div>
            <div className="warehouse-row">
              <h4>ADDRESS</h4>
              <p>{warehouse.address}</p>
            </div>
            <div className="warehouse-row">
              <h4>CONTACT NAME</h4>
              <p>{warehouse.contactName}</p>
            </div>
            <div className="warehouse-row">
              <h4>CONTACT INFORMATION</h4>
              <p>{warehouse.contactInfo}</p>
            </div>
          </div>
          <div className="warehouse-actions">
            <button className="icon-button">
              <img src={deleteIcon} alt="Delete" />
            </button>
            <button className="icon-button">
              <img src={editIcon} alt="Edit" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};


export default WarehouseList
