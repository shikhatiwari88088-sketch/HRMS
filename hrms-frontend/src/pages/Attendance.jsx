import { useEffect, useState } from "react";
import api from "../api/axios";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceTable from "../components/AttendanceTable";

function Attendance() {
  const [records, setRecords] = useState([]);

  const fetchAttendance = async () => {
    const res = await api.get("attendance/");
    setRecords(res.data);
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Attendance</h2>
      <AttendanceForm refresh={fetchAttendance} />
      <AttendanceTable records={records} />
    </div>
  );
}

export default Attendance;
