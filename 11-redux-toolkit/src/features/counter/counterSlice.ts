import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value : 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByValue: (state, actions: PayloadAction<number>) => {
            state.value += actions.payload;
        }
    }
});

export const {increment, decrement, incrementByValue} = counterSlice.actions;
export default counterSlice.reducer;