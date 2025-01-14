import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ data }) {
  return (
    <div className="row g-4">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
