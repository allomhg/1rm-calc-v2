import { InputState } from "./Form";

interface TableRow {
    id: number;
    percentage: number;
    weight: string;
    reps: string;
}

function generateRows2 (weight: number | undefined, reps: number | undefined, units: number) {
    if (weight === undefined || reps === undefined) {
        return [];
    }

    const oneRepMaxBrzycki: number = weight / (1.0278 - 0.0278 * reps);
    const rowArray: Array<TableRow> = [];



    for (let i = 0; i < 10; i++) {
        const percentage = 100 - (i * 5);
        const calcWeight = oneRepMaxBrzycki * (percentage / 100);
        const calcReps = ((oneRepMaxBrzycki / calcWeight) - 1) * 30;
        let calcWeightString: string = "";

        if (units === 1) {
            const calcWeightPounds = (oneRepMaxBrzycki * (percentage / 100)) * 2.205;
            calcWeightString = calcWeightPounds.toFixed(2) + " lb";
        } else {
            calcWeightString = calcWeight.toFixed(2) + " kg";
        }

        rowArray.push(
            {
                id: i + 1,
                percentage: percentage,
                weight: calcWeightString,
                reps: calcReps.toFixed(2),
            });
    }
    // console.log(rowArray);
    return rowArray;
}

const Table: React.FC<InputState> = ({ weight, reps, units }) => {
    const rows = generateRows2(weight, reps, units);

    return (
        <table>
            {/* TABLE HEADER */}
            <thead>
                <tr>
                    <td>1 RM %</td>
                    <td>Weight</td>
                    <td>Reps</td>
                </tr>
            </thead>
            {/* TABLE BODY */}
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