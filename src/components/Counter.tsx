import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxRTK/storeRTK";
import { useState } from "react";
import { change } from "../reduxRTK/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [newCount, setNewCount] = useState<number | ''>('');

  return (
    <div className="mt-5">
      <h2>Counter: {count}</h2>
      <div>
        <button 
        onClick={
          () => {
          // dispatch({ type: "counter/changeX", payload: -10 })
          dispatch(change(-10));
          }}>
          -10
        </button>
        <button onClick={() => {
          // dispatch({ type: "counter/changeX", payload: -1 });
          dispatch(change(-1))
          }}>
          Minus
        </button>
        <button onClick={
          () => {
          // dispatch({ type: "counter/changeX", payload: 1 });
          dispatch(change(+1));
          }}>Plus</button>
        <button onClick={
          () => {
          // dispatch({ type: "counter/changeX", payload: 10 })
            dispatch(change(10));
          }}>
          +10
        </button>

        <div>
          <button
            onClick={() => {
              if (newCount) {
                // dispatch({ type: "counter/changeX", payload: -newCount });
                dispatch(change(-newCount));
              }
              setNewCount("");
            }}
          >
            -X
          </button>
          <input
            type="number"
            value={newCount}
            onChange={(e) => {
              if (!isNaN(+e.target.value)) {
                setNewCount(+e.target.value);
              }
            }}
          />
          <button className="btn btn-outline-danger" onClick={() => {
              if (newCount) {
                // dispatch({type: "counter/changeX", payload: newCount });
                dispatch(change(newCount));
              }
              setNewCount("");
            }
            } >+X</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
