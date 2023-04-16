import { createReducer } from "@reduxjs/toolkit"

const user = {
  login: false,
  userData: {
    name: "adhikar",
    email: "adhikar@gmail.com"
  }
}


export const userReducer = createReducer(user, {
  updateLogin: (state, action) => {
    state.login = action.payload
  },
  
  updateUserData: (state, action) => {
    state.userData = action.payload
  },
})