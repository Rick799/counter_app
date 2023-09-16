import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  let countColor = "white";
  if (count > 0) {
    countColor = "green";
  } else if (count < 0) {
    countColor = "red";
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <h1 className="text-6xl text-yellow-500 font-bold">Counter App</h1>
      <p style={{ color: countColor }} className="text-6xl font-bold my-14">
        {count}
      </p>
      <div className="text-yellow-500 text-xl cursor-pointer">
        <button
          className="uppercase font-semibold px-3 py-2 m-5 border-2 border-yellow-500 rounded-md tracking-widest"
          onClick={incrementCount}
        >
          Increment
        </button>
        <button
          className="uppercase font-semibold px-3 py-2 m-5 border-2 border-yellow-500 rounded-md tracking-widest"
          onClick={resetCount}
        >
          Reset
        </button>
        <button
          className="uppercase font-semibold px-3 py-2 m-5 border-2 border-yellow-500 rounded-md tracking-widest"
          onClick={decrementCount}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
