import { RootState } from './storeRTK';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "@reduxjs/toolkit/query";
// import axios from "axios";

export interface InitialSandwichStateRTK {
  ingredients: Ingredients[];
  quote: IQuote | null;
  message: string;
  status: 'loading' | 'success' | 'error'; 
}

interface IQuote {
    sentence: string;
  character: {
    name: string;
    slug: string;
    house: {
      name: string;
      slug: string;
    };
  };
}

const initialState: InitialSandwichStateRTK = {
  ingredients: [],
    quote: null,
    status: 'loading',
    message: ""
};

type Ingredients = "bread" | "cheese" | "salami" | "salad" | "sauce";

/*
{
  "sentence": "I know that our enemies hate each other almost as much as they hate us.",
  "character": {
    "name": "Tyrion Lannister",
    "slug": "tyrion",
    "house": {
      "name": "House Lannister of Casterly Rock",
      "slug": "lannister"
    }
  }
}
*/

export const fetchQuote = createAsyncThunk<IQuote, void, {state: RootState }>("fetchQuote", async () => {
  const response = await fetch("https://api.gameofthronesquotes.xyz/v1/random");
  const data = await response.json();
  return data;
});

const sandwichSlice = createSlice({
  name: "sandwich",
  initialState, // same as:  initialState: initialState,
  reducers: {
    // addIngredient(state, action: PayloadAction< 'bread' | 'cheese' | 'salami' | 'salad' | 'sauce' >) {
    addIngredient(state, action: PayloadAction<Ingredients>) {
      state.ingredients.push(action.payload);
    },
    deleteAll(state) {
      // state.ingredients = [];
      state.ingredients = initialState.ingredients;
    },
    deleteLast(state) {
      state.ingredients.pop();
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuote.pending, (state) => {
        //Loading
        state.status = 'loading'
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        //Success
        state.quote = action.payload;
        state.status = 'success';
      })
      .addCase(fetchQuote.rejected, (state) => {
        //Error
        state.status = 'error';
      });
  },
});

export const { addIngredient, deleteLast, deleteAll } = sandwichSlice.actions;
// export const { deleteAll } = sandwichSlice.actions;
// export const { deleteLast } = sandwichSlice.actions;

export default sandwichSlice.reducer;
