import React from 'react'

const ItemDetails = () => {
  return (
    <div>
      <h2>Item details</h2>
      <label>
        Item name
        <input placeholder='Television'/> 
        {/* update the placeholder with the item name clicked */}
      </label>
      <label>
        Description
        <input placeholder='This 50", 4K LED TV provides a crystal-clear picture and vivid colors.'/>
        {/* update the placeholder with the item description */}
      </label>
      <label>
        Category
        <select>
        <option value="" disabled>
          Select an option
        </option>
        </select>
      </label>
    </div>
  )
}

export default ItemDetails
