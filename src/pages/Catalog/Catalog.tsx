import { Products } from "../../components/catalog/Products/Products";
import { Filter } from "../../components/catalog/Filter/Filter";
import "../../components/catalog/Products/Products.css";
import { useGetParams } from "../../hooks/useParams";
import { useEffect, useState } from "react";

export interface ProductsFromBE {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  imgUrl?: string | undefined;
  slug?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
}

export const Catalog = () => {
  const { category } = useGetParams();
  const [error, setError] = useState<string | null>(null);
  const [productsByCategory, setProductsByCategory] = useState<
    ProductsFromBE[]
  >([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductsFromBE[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `http://localhost:3005/api/products/category/${category}`,
        );

        if (!res.ok) {
          if (res.status === 400) {
            setError("Categoría inválida");
          } else if (res.status === 404) {
            setError("No se encontraron productos en esta categoría");
          } else {
            setError("Error al cargar productos");
          }

          setProductsByCategory([]);
          setFilteredProducts([]);
          return;
        }

        const result = await res.json();
        setProductsByCategory(result);
        setFilteredProducts(result);
      } catch (err) {
        setError("Error de conexión con el servidor");
        setProductsByCategory([]);
        setFilteredProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [category]);

  const handleFilter = (filters: string) => {
    let filtered = [...productsByCategory]; //

    switch (filters) {
      case "asc-price":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "desc-price":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "best-sellers":
        filtered.sort((a, b) => b.price - a.price); // todavia no se implementaron las ventas
        break;
    }

    setFilteredProducts(filtered);
  };

  if (isLoading) return <div>Cargando...</div>;
  return (
    <>
      <div className="catalog-header">
        <p className="category">{category}</p>
        <Filter handleFilter={handleFilter} />
      </div>
      {error ? (
        <div>
          <strong>{error}</strong>
        </div>
      ) : (
        <Products filteredProducts={filteredProducts} />
      )}
    </>
  );
};
