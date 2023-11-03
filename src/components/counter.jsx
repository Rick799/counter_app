import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Function to increment the count
  function incrementCount() {
    setCount(count + 1);
  }

  // Function to decrement the count
  function decrementCount() {
    setCount(count - 1);
  }

  // Function to reset the count to 0
  function resetCount() {
    setCount(0);
  }

  // Determine the color of the count based on its value
  let countColor = "white";
  if (count > 0) {
    countColor = "green";
  } else if (count < 0) {
    countColor = "red";
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
      <h1 className="text-6xl text-yellow-500 font-bold">Counter App</h1>
      <p style={{ color: countColor }} className="text-7xl font-bold my-20">
        {count}
      </p>
      <div className="text-yellow-500 md:text-xl cursor-pointer">
        <button
          className="uppercase font-semibold px-3 py-2 m-5 border-2 border-yellow-500 rounded-md tracking-widest hover:bg-yellow-500 hover:text-purple-900"
          onClick={incrementCount}
        >
          Increment
        </button>
        <button
          className="uppercase font-semibold px-3 py-2 m-5 border-2 border-yellow-500 rounded-md tracking-widest hover:bg-yellow-500 hover:text-purple-900"
          onClick={resetCount}
        >
          Reset
        </button>
        <button
          className="uppercase font-semibold px-3 py-2 m-5 border-2 border-yellow-500 rounded-md tracking-widest hover:bg-yellow-500 hover:text-purple-900"
          onClick={decrementCount}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
