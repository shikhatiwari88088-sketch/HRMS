import { useEffect, useState } from "react";
import api from "../api/axios";
import Card from "../components/Card";

function Dashboard() {
  const [stats, setStats] = useState({
    total_employees: 0,
    present_today: 0,
    absent_today: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("dashboard/");
        setStats(res.data);
      } catch (error) {
        console.error("Error fetching dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p style={{ padding: "2rem" }}>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Card title="Total Employees" value={stats.total_employees} />
        <Card title="Present Today" value={stats.present_today} />
        <Card title="Absent Today" value={stats.absent_today} />
      </div>
    </div>
  );
}

export default Dashboard;
