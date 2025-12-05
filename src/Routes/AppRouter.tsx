import { RoutesWithNotFound } from "./RoutesWithNotFound";
import { Catalog } from "../pages/Catalog/Catalog";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { HomeAnimation } from "../pages/Home/HomeAnimation";
import { Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export const AppRouter = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/HomeAnimation" element={<HomeAnimation />} />
    </RoutesWithNotFound>
  );
};
