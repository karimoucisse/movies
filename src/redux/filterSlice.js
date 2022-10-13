import { createSlice } from "@reduxjs/toolkit"

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        filter: 'Tous les films'
    },
    reducers: {
        updateFilter: (state, action) => {
            state.filter = action.payload
        }
    }
})

export const {updateFilter} = filterSlice.actions
export default filterSlice.reducer
