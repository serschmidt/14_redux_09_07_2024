import { combineReducers, legacy_createStore } from "redux";
import counterReducer from "./counterReducer";
import sandwichReducer from "./sandwichReducer";

// 3. Erstellung des Repositories (Store) mit der Möglichkeit 

// const store = legacy_createStore(combineReducers({
//     counter: counterReducer
// }))
const store = legacy_createStore(combineReducers({
        counter: counterReducer,
        sandwich: sandwichReducer
    }))

export default store 

// universelle typisierung von alldem, was in State sich befindet.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch