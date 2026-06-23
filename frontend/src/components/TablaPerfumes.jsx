import ProductCard from "./ProductCard";
import perfumes from "../data/perfumesData";
import "../styles/ProductGrid.css";

function TablaPerfumes() {
  return (
    <div className="product-grid">
      {perfumes.map((perfume) => (
        <ProductCard key={perfume.id} perfume={perfume} />
      ))}
    </div>
  );
}

export default TablaPerfumes;