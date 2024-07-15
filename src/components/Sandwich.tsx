import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../redux/store";
import { AppDispatch, RootState } from "../reduxRTK/storeRTK";
import {
  addIngredient,
  deleteLast,
  fetchQuote,
} from "../reduxRTK/sandwichSlice";
import { deleteAll } from "../reduxRTK/sandwichSlice";
import { useEffect } from "react";
// import { useState } from "react";

const Sandwich = () => {
  const { ingredients, quote, status } = useSelector(
    (state: RootState) => state.sandwich
  );
  // const ingredients = useSelector( (state: RootState) => state.sandwich.ingredients  );
  // const quote = useSelector( (state: RootState) => state.sandwich.quote  );
  // const message = useSelector( (state: RootState) => state.sandwich.message );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote());
  }, []);

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
        <button
          onClick={() => {
            // dispatch({ type: "sandwich/deleteAll" })
            dispatch(deleteLast());
          }}
        >
          Delete last ingredient
        </button>
        <button
          onClick={() => {
            // dispatch({ type: "sandwich/deleteAll" })
            dispatch(deleteAll());
          }}
        >
          Delete all ingredients
        </button>
      </div>
      {/* {status === "loading" && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {status === "success" && <div>{quote?.sentence}</div>}
      {status === "error" && <div>Error</div>} */}

      { status === 'loading' ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        status === 'success' ? ( <div>{quote?.sentence}</div> ) 
        : (<div>Error</div>)
    )
    }
    </div>
  );
};

export default Sandwich;
