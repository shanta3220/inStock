import Card from '../Card/Card'

function WarehouseDetails() {
  return (
    <Card title ="Warehouses" headerContent={
        <div className="option">
          <div className="option__search-bar">
            <input className="option__search-input" type="text" placeholder="Search..." />
            <button className="option__search-button">
            </button>
          </div>
          <button className="option__add-button">+ Add New Warehouse</button>
        </div>
      }></Card>
    )
}

export default WarehouseDetails;
