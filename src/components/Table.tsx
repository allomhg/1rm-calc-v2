import { InputState } from "./Form";

interface TableRow {
    id: number;
    percentage: number;
    weight: number;
    reps: number;
}

function generateRowsPlaceholder ( ) {
    return Array.from({length: 10 }, (_, i) => (
        {
            id: i + 1,
            percentage: 100,
            weight: 100 - (i + 10),
            reps: 1 + i,
        }
    ));
}

function generateRows (weight, reps, units) {

}

const Table: React.FC<InputState> = ({ weight, reps, units }) => {
    const tableRowsTest: TableRow[] = generateRowsPlaceholder();
    const rows = generateRows(weight, reps, units);

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
            {/* <tbody>
                {tableRowsTest.map((row) => (
                    <tr key={row.id}>
                        <td>{row.percentage}</td>
                        <td>{row.weight}</td>
                        <td>{row.reps}</td>
                    </tr>
                ))}
            </tbody> */}
            {/* TABLE BODY */}
            <tbody>
                {tableRowsTest.map((row) => (
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