export default function ProductCard({ title, price, image }) {
  return (
    <div
      style={{
        width: 200,
        padding: 16,
        borderRadius: 12,
        background: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        textAlign: "center"
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: 150,
          objectFit: "cover",
          borderRadius: 8
        }}
      />
      <h3 style={{ marginTop: 12, fontWeight: "600" }}>{title}</h3>
      <p style={{ color: "#333", marginTop: 4 }}>Rp {price}</p>
    </div>
  );
}
