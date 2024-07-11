import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../redux/store";
import { AppDispatch, RootState } from "../reduxRTK/storeRTK";
import { addIngredient } from "../reduxRTK/sandwichSlice";
// import { useState } from "react";

const Sandwich = () => {
  const ingredients = useSelector(
    (state: RootState) => state.sandwich.ingredients
  );

  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <h1>Choose ingredients for your Sandwich: </h1>
      <p>Sandwich: {ingredients.join(", ")} </p>
      <div>
        <button
          onClick={() =>
            // dispatch({ type: 'sandwich/addIngredient', payload: 'bread' })
            dispatch(addIngredient("bread"))
          }
        >
          Add bread
        </button>
        <button
          onClick={() =>
            // dispatch({ type: "sandwich/addIngredient", payload: "cheese" })
            dispatch(addIngredient("cheese"))
          }
        >
          Add Cheese
        </button>
        <button
          onClick={() =>
            // dispatch({ type: "sandwich/addIngredient", payload: "salami" })
            dispatch(addIngredient("salami"))
          }
        >
          Add Salami
        </button>
        <button
          onClick={() =>
            // dispatch({ type: "sandwich/addIngredient", payload: "salad" })
            dispatch(addIngredient("salad"))
          }
        >
          Add Salad
        </button>
        <button
          onClick={() =>
            // dispatch({ type: "sandwich/addIngredient", payload: "sauce" })
            dispatch(addIngredient("sauce"))

          }
        >
          Add Sauce
        </button>
        <button onClick={() => {
          // dispatch({ type: "sandwich/deleteAll" })
          dispatch(deleteAll() )
          }}>
          Delete all ingredients
        </button>
      </div>
    </div>
  );
};

export default Sandwich;
