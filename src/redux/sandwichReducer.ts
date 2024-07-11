import { ActionSandwich } from "./sandwichAction";

//2. a) State Typisierung
export interface InitialSandwichState {
  ingredients: string[];
}

// b) Initialisierung von State
const initialState: InitialSandwichState = {
  ingredients: [],
};

// c) Beschreibung des Verhaltens des Reducers
export default function sandwichReducer(
  state = initialState,
  action: ActionSandwich
) {
  switch (action.type) {
    case "sandwich/addIngredient":
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    case "sandwich/deleteAll":
      return { ...state, ingredients: [] };
    default:
      return state;
  }
}
