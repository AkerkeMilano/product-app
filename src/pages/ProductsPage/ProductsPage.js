import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./ProductsPage.css";

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productList.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(products);
  return (
    <div className="ProductsPage">
      <h1>Products page</h1>
      <div className="productList">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};
