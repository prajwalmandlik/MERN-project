import { createReducer } from "@reduxjs/toolkit"
import schema from "../componentes/schema"

const scheme = {
  schemeData : schema
}

export const schemeReducer = createReducer(scheme, {
  updateScheme: (state, action) => {
    state.schemeData = action.payload
  },
})