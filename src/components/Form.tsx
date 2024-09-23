import Table from "./Table";

const Form: React.FC = () => {
    return (
        <form>
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
                <button>Calculate</button>
            </div>
            <button>Reset</button>
            <Table/>
        </form>
    );
}

export default Form;