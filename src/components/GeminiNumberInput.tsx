import React, { useState } from 'react';

function CustomNumberInput() {
  const [value, setValue] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      setValue(newValue);
    }
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        className="border border-gray-300 rounded px-4 py-2 w-full"
      />
      <button
        onClick={handleDecrement}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-l-md px-3 py-2"
      >
        -
      </button>
      <button
        onClick={handleIncrement}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-r-md px-3 py-2"
      >
        +
      </button>
    </div>
  );
}

export default CustomNumberInput;