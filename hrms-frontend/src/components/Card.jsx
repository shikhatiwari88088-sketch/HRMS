function Card({ title, value }) {
  return (
    <div style={styles.card}>
      <h4 style={{ marginBottom: "10px", color: "#64748b" }}>{title}</h4>
      <h1 style={{ color: "#1e293b" }}>{value}</h1>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    padding: "2rem",
    borderRadius: "12px",
    width: "250px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
};

export default Card;
