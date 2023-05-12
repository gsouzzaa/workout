import React, { useState } from 'react';

export default function SeriesNumber() {
  const [value, setValue] = useState(0);

  function handleIncrement(): void {
    if (value <10) {
        setValue(value + 1);
    }
    console.log(handleIncrement, setValue);

  }

  function handleDecrement() {
    if (value > 0) {
        setValue(value - 1);
    }   
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        className=" text-black font-bold px-2 py-1  hover:bg-gray-300 rounded"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        type="text"
        className=" text-black font-semibold border border-gray-300 rounded w-10 text-center"
        value={value}
        onChange={(event) => setValue(parseInt(event.target.value) || 0)
        }
      />
      <button
        type="button"
        className="text-black font-bold px-2 py-1 hover:bg-gray-300 rounded"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}