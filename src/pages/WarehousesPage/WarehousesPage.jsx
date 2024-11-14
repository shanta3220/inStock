import "./WarehousesPage.scss"
import Card from "../../components/Card/Card";
import searchIcon from "../../assets/Icons/search-24px.svg"
import WarehouseList from "../../components/WarehouseList/WarehouseList";


function WarehousesPage() {
  return (
    <>
    <Card title ="Warehouses">
    <div className="option">
        <div className="option__search-bar">
          <input className="option__search-input" type="text" placeholder="Search..." />
          <button className="option__search-button">
            <img className="option__search-button--img" src={searchIcon} alt="Search Icon" />
          </button>
        </div>
        <button className="option__add-button">
          + Add New Warehouse</button>
      </div>
      <WarehouseList/>
      </Card>
    </>
  )
}

export default WarehousesPage
