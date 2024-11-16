import CancelSaveButtons from "../../components/CancelSaveButtons/CancelSaveButtons"
import Card from "../../components/Card/Card"
import ItemAvailability from "../../components/ItemAvailability/ItemAvailability"
import ItemDetails from "../../components/ItemDetails/ItemDetails"
import './EditInventoryPage.scss'


function EditInventoryPage() {
  return (
    <Card title= "Edit Inventory Item" returnPath="/inventory">
      <div className="form-fields">
    <ItemDetails/>
    <ItemAvailability/>
    </div>
<CancelSaveButtons/>
    </Card>
  )
}

export default EditInventoryPage
