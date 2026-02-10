import { useEffect, useState } from "react";
import api from "../api/axios";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

function Employees() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await api.get("employees/");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Employees</h2>
      <EmployeeForm refresh={fetchEmployees} />
      <EmployeeTable employees={employees} refresh={fetchEmployees} />
    </div>
  );
}

export default Employees;
