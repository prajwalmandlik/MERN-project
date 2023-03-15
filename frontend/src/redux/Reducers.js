import { createReducer } from "@reduxjs/toolkit";

const filter = {
    setFilter : "all"
}


export const customeReducer = createReducer(filter , {
    applyFilter : (state , action) => {
      state.setFilter = action.payload
    },
})