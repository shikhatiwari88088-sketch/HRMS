function AttendanceTable({ records }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Employee</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {records.map((rec) => (
          <tr key={rec.id}>
            <td>{rec.employee}</td>
            <td>{rec.date}</td>
            <td>{rec.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AttendanceTable;
