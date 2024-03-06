import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function CounterButton() {
  const counter = useContext(CounterContext);
  return (
    <div className="flex gap-2 justify-center items-center pt-20">
      <button
        className="border border-red-600 rounded-xl px-5 py-2 text-red-600 active:border-white active:text-white ease-in-out duration-75"
        onClick={() => counter.setCount(counter.count + 1)}
      >
        Increment
      </button>
      <button
        className="border border-red-600 rounded-xl px-5 py-2 text-red-600 active:border-white active:text-white ease-in-out duration-75"
        onClick={() =>
          counter.setCount(
            counter.count === 0 ? (counter.count = 0) : counter.count - 1
          )
        }
      >
        Decrement
      </button>
    </div>
  );
}
export default CounterButton;
