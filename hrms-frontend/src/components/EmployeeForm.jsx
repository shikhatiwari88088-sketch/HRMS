import { useState } from "react";
import api from "../api/axios";

function EmployeeForm({ refresh }) {
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("employees/", form);
      setForm({
        employee_id: "",
        full_name: "",
        email: "",
        department: "",
      });
      setError("");
      refresh();
    } catch (err) {
      setError("Error creating employee");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="employee_id" placeholder="Employee ID" value={form.employee_id} onChange={handleChange} required />
      <input name="full_name" placeholder="Full Name" value={form.full_name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
      <button type="submit">Add Employee</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default EmployeeForm;
