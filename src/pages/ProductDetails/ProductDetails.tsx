import { useEffect, useState } from "react";
import { ImageSlider } from "./ImageCarousel";
import "./ProductDetails.css";
import { ProductDetailsInfoContent } from "./ProductDetailsInfoContent";
import { useGetParams } from "../../hooks/useParams";

import { ProductsFromBE } from "../Catalog/Catalog";

export const ProductDetails = () => {
  const [product, setProduct] = useState<ProductsFromBE | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { id } = useGetParams();

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        setProduct(null);
        setError(null);
        const res = await fetch(`http://localhost:3005/api/products/${id}`, {
          method: "GET",
        });

        if (res.status === 404) {
          setError("No se encontró el producto relacionado con este ID");
          setProduct(null);
          return;
        }
        const result = await res.json();

        setProduct(result);
      } catch (err) {
        if (err) {
          setError("Internal server error");
          setProduct(null);
        }
      }
    };

    fetchProductById();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (product === null) return <div>Cargando...</div>;
  return (
    <div className="product-details-container">
      <div className="product-details-image-container">
        <ImageSlider />
      </div>
      <div className="product-details-info-container">
        <ProductDetailsInfoContent product={product} />
      </div>
    </div>
  );
};
