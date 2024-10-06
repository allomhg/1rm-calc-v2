import { InputState } from "./Form";

interface TableRow {
    id: number;
    percentage: number;
    weight: string;
    reps: string;
}

function generateRows(weight: number | undefined, reps: number | undefined, units: number): Array<TableRow> {
    if (weight === undefined || reps === undefined) {
        return [];
    }

    const oneRepMaxBrzycki: number = weight / (1.0278 - 0.0278 * reps);
    const rowArray: Array<TableRow> = [];

    for (let i = 0; i < 10; i++) {
        const percentage: number = 100 - (i * 5);
        const calcWeight: number = oneRepMaxBrzycki * (percentage / 100);
        // const calcReps: number = ((oneRepMaxBrzycki / calcWeight) - 1) * 30;
        const calcReps: number = (1.0278 - (calcWeight / oneRepMaxBrzycki)) / 0.0278;
        console.log(calcReps);
        let calcWeightString: string = "";

        if (units === 1) {
            const calcWeightPounds: number = (oneRepMaxBrzycki * (percentage / 100)) * 2.205;
            calcWeightString = calcWeightPounds.toFixed(1) + " lb";
        } else {
            calcWeightString = calcWeight.toFixed(1) + " kg";
        }

        rowArray.push(
            {
                id: i + 1,
                percentage: percentage,
                weight: calcWeightString,
                reps: calcReps.toFixed(0),
            });
    }
    return rowArray;
}

const Table: React.FC<InputState> = ({ weight, reps, units }) => {
    const rows = generateRows(weight, reps, units);

    return (
        <table>
            <thead>
                <tr>
                    <td>1 RM %</td>
                    <td>Weight</td>
                    <td>Reps</td>
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td>{row.percentage}</td>
                        <td>{row.weight}</td>
                        <td>{row.reps}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;