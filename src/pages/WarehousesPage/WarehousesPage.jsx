import "./WarehousesPage.scss"
import Card from "../../components/Card/Card";
import searchIcon from "../../assets/Icons/search-24px.svg"
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import { useState, useEffect } from "react";
import axios from "axios";


function WarehousesPage() {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(()=>{
    const API_URL = import.meta.env.VITE_API_URL;

    axios
      .get(`${API_URL}/api/warehouses`)  // Concatenate with the route
      .then((response) => {
        setWarehouses(response.data); // Store the fetched data in state
      })
      .catch((error) => {
        console.error("Error fetching warehouses:", error);
      });
  }, []);


  return (
    <>
    <Card title ="Warehouses" headerContent={
          <div className="option">
            <div className="option__search-bar">
              <input className="option__search-input" type="text" placeholder="Search..." />
              <button className="option__search-button">
                <img className="option__search-button--img" src={searchIcon} alt="Search Icon" />
              </button>
            </div>
            <button className="option__add-button">+ Add New Warehouse</button>
          </div>
        }>
      <WarehouseList warehouses={warehouses}/>
      </Card>
    </>
  )
}

export default WarehousesPage
