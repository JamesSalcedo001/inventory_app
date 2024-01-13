import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInventory = createAsyncThunk(
    "inventory/fetchInventory",
    async () => {
        const res = await fetch("/api/inventory")
        const data = await res.json()
        return data
    }
)

export const updateInventoryItem = createAsyncThunk(
    "inventory/updateInventoryItem",
    async ({ itemId, newQuantity }) => {
        const res = await fetch(`/api/inventory/${itemId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ quantity: newQuantity }),
        })
        return res.json()
    }
)

export const deleteInventoryItem = createAsyncThunk(
    "inventory/deleteInventoryItem", 
    async (itemId) => {
        await fetch(`/api/inventory/${itemId}`, { 
                method: "DELETE", 
            }
        )
        return itemId;
    }
)


const inventorySlice = createSlice({
    name: "inventory",
    initialState: {
        items: [],
    },
    extraReducers: {
        [fetchInventory.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [updateInventoryItem.fulfilled]: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id)
            if (index !== -1) state.items[index] = action.payload
        },
        [deleteInventoryItem.fulfilled]: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
    },
})

export default inventorySlice.reducer