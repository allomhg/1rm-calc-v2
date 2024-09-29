import { useState } from "react";
import Table from "./Table";

export interface InputState {
    weight: number;
    reps: number;
    units: number; // 0 = metric (kg), 1 = imperial (lb)
}

const Form: React.FC = () => {
    const [weight, setWeight] = useState<number | undefined>(undefined);
    const [reps, setReps] = useState<number | undefined>(undefined);
    const [units, setUnits] = useState<number>(0); // 0 = metric (kg), 1 = imperial (lb)
    const [isVisible, setIsVisible] = useState<boolean>(false); // Use for toggling visibilty of Table and ResetButton

    const handleCalculate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsVisible(true);
    }

    // Can I use an input event to check the ID of the input using this function.
    // That way I can then combine these to handleChange functions down to one with an if statement.
    const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (!isNaN(Number(value)) && value !== "" ) {
            setWeight(Number(value));
        } else {
            setWeight(undefined);
        }
    }

    const handleRepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (!isNaN(Number(value)) && value !== "" ) {
            setReps(Number(value));
        } else {
            setReps(undefined);
        }
    }

    const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = Number(event.target.value);

        if ( value === 1 ) {
            setUnits(1);
        } else {
            setUnits(0);
        }
    }

    const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsVisible(!isVisible);
        setWeight(undefined);
        setReps(undefined);
    }

    return (
        <form onSubmit={handleCalculate}>
            <div>
                <div>
                    <label htmlFor="unitSelect"></label>
                    <select id="unitSelect" name="unitSelect" onChange={handleUnitChange} >
                        <option value={0}>Metric</option>
                        <option value={1}>Imperial</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="weight">Weight:</label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        min="1"
                        placeholder="Enter weight"
                        required
                        value={weight === undefined ? "" : weight}
                        onChange={handleWeightChange}
                    />
                </div>
                <div>
                    <label htmlFor="reps">Repetitions:</label>
                    <input
                        type="number"
                        id="reps"
                        name="reps"
                        min="1"
                        step="1"
                        placeholder="Enter number of reps"
                        required
                        value={reps === undefined ? "" : reps}
                        onChange={handleRepChange}
                    />
                </div>
                <button type="submit">Calculate</button>
            </div>
            { isVisible && (
                <section>
                    <button onClick={handleReset}>Reset</button>
                    <Table weight={weight} reps={reps} units={units} />
                </section>
            )}

        </form>
    );
}

export default Form;