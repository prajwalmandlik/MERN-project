import { createReducer } from "@reduxjs/toolkit"

const user = {
    login : false,
    name: "prajwal mandlik",
  }


  export const userReducer = createReducer(user ,{
    updateLogin : (state , action) => {
        state.login = action.payload
      },
      
    updateName : (state , action) => {
        state.name = action.payload
      },
  })