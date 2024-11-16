import CancelSaveButtons from "../../components/CancelSaveButtons/CancelSaveButtons"
import Card from "../../components/Card/Card"
import ItemAvailability from "../../components/ItemAvailability/ItemAvailability"
import ItemDetails from "../../components/ItemDetails/ItemDetails"


function EditInventoryPage() {
  return (
    <Card title= "Edit Inventory Item" returnPath="/inventory">

   
    <ItemDetails/>
    <ItemAvailability/>
<CancelSaveButtons/>
    </Card>
  )
}

export default EditInventoryPage
