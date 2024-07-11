import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialSandwichStateRTK {
    ingredients: string[];
}

const initialState: InitialSandwichStateRTK = {
    ingredients: []
}

type Ingradient =  'bread' | 'cheese' | 'salami' | 'salad' | 'sauce';

const sandwichSlice = createSlice({
    name: 'sandwich',
    initialState,           // same as:  initialState: initialState,
    reducers: {
        addIngredient(state, action: PayloadAction<Ingradient>) {
            state.ingredients.push(action.payload);
        },
        deleteAll(state) {
            state.ingredients = [];
        }
    }
})

export const { addIngredient } = sandwichSlice.actions

export default sandwichSlice.reducer