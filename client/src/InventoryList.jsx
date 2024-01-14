import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventory, updateInventoryItem, deleteInventoryItem } from "./slices/inventorySlice";

import InventoryItem from "./InventoryItem";


function InventoryList() {
    const dispatch = useDispatch()
    const inventoryItems = useSelector(state => state.inventory.items) || []

    useEffect(() => {
        dispatch(fetchInventory())
    }, [dispatch])


    const handleIncrement = (itemId, currentQuantity) => {
        dispatch(updateInventoryItem({ itemId, newQuantity: currentQuantity + 1}))    
    }

    const handleDecrement = (itemId, currentQuantity) => {
        if (currentQuantity > 0) {
            dispatch(updateInventoryItem({ itemId, newQuantity: currentQuantity - 1}))
        }
    }

    const handleDeleteItem = (itemId) => {
        dispatch(deleteInventoryItem(itemId))
    }


    return (
        <div className="inventory-list">
            <h2>Inventory List</h2>
            {inventoryItems.map(item => (
                <InventoryItem
                    key={item.id}
                    item={item}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDeleteItem}
                />
            ))}
        </div>
    )
}

export default InventoryList;