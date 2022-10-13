import { createSlice } from "@reduxjs/toolkit"

const currentPageSlice = createSlice({
    name: "pageNumber",
    initialState: {
        page: 1,
        moviePerPage: 8,
    },
    reducers: {
        incrementPageNumber: (state, action) => {
            state.page += 1
        },
        decrementPageNumber: (state, action) => {
            state.page -= 1
        }
    }
})

export const {incrementPageNumber, decrementPageNumber} = currentPageSlice.actions

export default currentPageSlice.reducer 