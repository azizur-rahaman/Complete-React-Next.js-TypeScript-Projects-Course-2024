import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";


const store = configureStore({
    reducer: {
        counterSlice
    }
});


export type RooteState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;