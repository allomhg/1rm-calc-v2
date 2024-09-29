import { InputState } from "./Form";

// interface TableRow {
//     id: number;
//     percentage: number;
//     weight: number;
//     reps: number;
//     units?: number;
// }

function generateRows2 (weight: number, reps: number, units: number) {
    const oneRepMax = weight * (1 + reps / 30);
    const rowArray = [];

    for (let i = 0; i < 10; i++) {
        const percentage = 100 - (i * 5);
        const calcWeight = oneRepMax * (percentage / 100);
        const calcReps = ((oneRepMax / calcWeight) - 1) * 30;

        rowArray.push(
            {
                id: i + 1,
                percentage: percentage,
                weight: calcWeight.toFixed(2),
                reps: calcReps.toFixed(0),
            });

    }
    console.log(rowArray);
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