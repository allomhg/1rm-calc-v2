import React from 'react';

interface NumberInputProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
}

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, min = -Infinity, max = Infinity }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value === '' ? NaN : parseFloat(e.target.value);
        if (!isNaN(newValue) && newValue >= min && newValue <= max) {
            onChange(newValue);
        } else if (e.target.value === '') {
            onChange(NaN);
        }
    };

    const increment = () => {
        if (value < max) {
            onChange(value + 1);
        }
    };

    const decrement = () => {
        if (value > min) {
            onChange(value - 1);
        }
    };

    return (
        <div className="flex items-center">
            <button onClick={decrement} className="px-2 py-1 bg-gray-200 rounded-l focus:outline-none">
                -
            </button>
            <input
                type="text"
                value={isNaN(value) ? '' : value}
                onChange={handleChange}
                className="w-16 text-center border-t border-b border-gray-300 focus:outline-none"
            />
            <button onClick={increment} className="px-2 py-1 bg-gray-200 rounded-r focus:outline-none">
                +
            </button>
        </div>
    );
};

export default NumberInput;
