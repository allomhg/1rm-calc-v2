import { useState } from "react";
import Table from "./Table";

export interface InputState {
    weight: number;
    reps: number;
    units: number; // 0 = metric (kg), 1 = imperial (lb)
}

const Form: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false); // Use for toggling visibilty of Table and ResetButton

    const handleCalculate = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsVisible(!isVisible);
    }

    return (
        <form onSubmit={handleCalculate}>
            <div>
                <div>
                    <select id="units" name="units">
                        <option value="metric">Metric</option>
                        <option value="value">Imperial</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="weight">Weight:</label>
                    <input type="number" id="weight" name="weight" min="1" placeholder="Enter weight" />
                </div>
                <div>
                    <label htmlFor="reps">Repetitions:</label>
                    <input type="number" id="reps" name="reps" min="1" placeholder="Enter number of reps" />
                </div>
                <button type="submit">Calculate</button>
                {/* <button type="submit" onClick={handleCalculate}>Calculate</button> */}
            </div>
            { isVisible && (
                <section>
                    <button>Reset</button>
                    <Table/>
                </section>
            )}

        </form>
    );
}

export default Form;