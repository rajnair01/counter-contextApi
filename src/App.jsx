import CounterButton from "./components/CounterButton";
import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";
function App() {
  const counter = useContext(CounterContext);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black mx-auto text-center ">
      <h1 className="text-red-600 md:text-8xl text-5xl font-bold">
        The Count is {counter.count}
      </h1>
      <CounterButton />
    </div>
  );
}
export default App;
