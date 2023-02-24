import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../store/productSlice";
import "./ProductDetails.css";
import { ProductImages } from "../../components/ProductImages/ProductImages";
import { CartBlock } from "../../components/CartBlock/CartBlock";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productList.product);
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);
  console.log("product", product);
  return (
    <div className="ProductDetails">
      <div className="leftBlock">
        {Object.keys(product).length > 0 && (
          <ProductImages images={product.images} />
        )}
      </div>
      <div className="rightBlock">
        <h1>{product.title}</h1>
        <div>{product.description}</div>
        <div className="productPrice">${product.price}</div>
        <CartBlock />
      </div>
    </div>
  );
};
