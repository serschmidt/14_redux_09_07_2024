import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import sandwichReducer from "./sandwichSlice";

const storeRTK = configureStore({
    reducer: {
        counter: counterReducer,
        sandwich: sandwichReducer
    }
})

export default storeRTK;

export type RootState = ReturnType<typeof storeRTK.getState>;

export type AppDispatch = typeof storeRTK.dispatch;