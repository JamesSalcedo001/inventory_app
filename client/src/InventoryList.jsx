import { useState, useEffect } from "react";

import InventoryItem from "./InventoryItem";

function InventoryList() {
    const [inventoryItems, setInventoryItems] = useState([])

    useEffect(() => {
        fetch("/api/inventory")
        .then(res => res.json())
        .then(data => setInventoryItems(data))
    }, [])

    const handleUpdateItem = (itemId, updatedData) => {
        fetch(`/api/inventory/${itemId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        })
        .then(res => res.json())
        .then(updatedItem => {
            setInventoryItems(prevItems => prevItems.map(item => item.id === itemId ? updatedItem : item ))
        })
    }

    const handleDeleteItem = (itemId) => {
        fetch(`/api/inventory/${itemId}`, {
            method: "DELETE",
        })
        .then(() => {
            setInventoryItems(prevItems => prevItems.filter(item => item.id !== itemId ))
        })
    }


    return (
        <div className="inventory-list">
            <h2>Inventory List</h2>
            {inventoryItems.map(item => (
                <InventoryItem
                    key={item.id}
                    item={item}
                    onUpdate={handleUpdateItem}
                    onDelete={handleDeleteItem}
                />
            ))}
        </div>
    )
}

export default InventoryList;