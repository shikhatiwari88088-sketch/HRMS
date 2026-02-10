import { useState, useEffect } from "react";
import api from "../api/axios";

function AttendanceForm({ refresh }) {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employee: "",
    date: "",
    status: "Present",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await api.get("employees/");
      setEmployees(res.data);
    };
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("attendance/", form);
      setError("");
      refresh();
    } catch (err) {
      setError("Attendance already marked or error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="employee" onChange={handleChange} required>
        <option value="">Select Employee</option>
        {employees.map((emp) => (
          <option key={emp.id} value={emp.id}>
            {emp.full_name}
          </option>
        ))}
      </select>

      <input
        type="date"
        name="date"
        onChange={handleChange}
        required
      />

      <select name="status" onChange={handleChange}>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      <button type="submit">Mark Attendance</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default AttendanceForm;
