import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addItemsid: (state, action) => {
            state.push(action.payload);
        },
        removeItemsid: (state, action) => {
            return state.filter(state => state !== action.payload);
        }
    }
});

export const bagActions = bagSlice.actions;

export default bagSlice;