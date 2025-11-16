import Navbar from "../komponen/Navbar";
import ProductCard from "../komponen/ProductCard";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          padding: 20
        }}
      >
        <ProductCard
          title="Sepatu Futuristik"
          price="299.000"
          image="/sepatu.jpg"
        />
        <ProductCard
          title="Kaos Streetwear"
          price="149.000"
          image="/kaos.jpg"
        />
      </div>
    </div>
  );
}
