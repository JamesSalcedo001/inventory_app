function InventoryItem({item, onIncrement, onDecrement, onDelete }) {
    return (
        <div className="inventory-item">
            <h3>{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => onIncrement(item.id, item.quantity)}>Increment</button>
            <button onClick={() => onDecrement(item.id, item.quantity)}>Decrement</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    )
}

export default InventoryItem;