interface TableRow {
    id: number;
    percentage: number;
    weight: number;
    reps: number;
}

function generateRows ( ) {
    return Array.from({length: 10 }, (_, i) => (
        {
            id: i + 1,
            percentage: 100,
            weight: 100 - (i + 10),
            reps: 1 + i,
        }
    ));
}

const Table: React.FC = () => {
    const rows: TableRow[] = generateRows();

    return (
        <section>
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
        </section>
    );
}

export default Table;