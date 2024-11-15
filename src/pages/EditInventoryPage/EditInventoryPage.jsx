import Card from "../../components/Card/Card"
import ItemDetails from "../../components/ItemDetails/ItemDetails"


function EditInventoryPage() {
  return (
    <Card title= "Edit Inventory Item" returnPath="/inventory">

   
    <ItemDetails/>

    </Card>
  )
}

export default EditInventoryPage
