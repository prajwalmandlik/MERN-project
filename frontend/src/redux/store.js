import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter";
import { userReducer } from "./user";

const store = configureStore({
    reducer: {
        filter: filterReducer,
        user: userReducer
    },
});

export default store;