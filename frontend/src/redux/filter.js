import { createReducer } from "@reduxjs/toolkit";

const setFilter = {
    filter : "all",
    search: "",
}

export const filterReducer = createReducer(setFilter , {
    applyFilter : (state , action) => {
      state.filter = action.payload
    },

    searchItem : (state , action) => {
      state.search = action.payload
    },
})
