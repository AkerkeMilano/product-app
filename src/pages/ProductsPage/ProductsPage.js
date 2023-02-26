import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./ProductsPage.css";

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productList.products);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="ProductsPage">
      <h1>Products page</h1>
      {!isLoggedIn && <div className="loginWarn">!!! Чтобы добавить товар в корзину залогинтесь</div>}
      <div className="productList">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} isLoggedIn={isLoggedIn}/>;
        })}
      </div>
    </div>
  );
};
