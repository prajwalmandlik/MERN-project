import { configureStore } from "@reduxjs/toolkit";
import { schemeReducer } from "./scheme";
import { userReducer } from "./user";

const store = configureStore({
    reducer: {
        user: userReducer,
        scheme: schemeReducer
    },
});

export default store;