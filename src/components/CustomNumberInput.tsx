// CustomNumberInput.tsx
import React, { useState } from "react";

interface CustomNumberInputProps {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
}

const CustomNumberInput: React.FC<CustomNumberInputProps> = ({
  min = 0,
  max = 100,
  step = 1,
  initialValue = 0,
}) => {
  const [value, setValue] = useState<number>(initialValue);

  // Handle increment and decrement
  const increment = () => {
    if (value < max) setValue((prev) => prev + step);
  };

  const decrement = () => {
    if (value > min) setValue((prev) => prev - step);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(min, Math.min(max, Number(e.target.value)));
    setValue(newValue);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <button
        onClick={decrement}
        className="px-3 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded-l-md"
      >
        -
      </button>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        className="w-16 text-center py-1 px-2 border-0 focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={increment}
        className="px-3 py-1 text-lg bg-gray-200 hover:bg-gray-300 rounded-r-md"
      >
        +
      </button>
    </div>
  );
};

export default CustomNumberInput;