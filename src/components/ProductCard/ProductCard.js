import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { addToChart } from "../../store/cartSlice";
export const ProductCard = ({ product, isLoggedIn }) => {
  const dispatch = useDispatch();
  const addToChartHandler = () => {
    dispatch(
      addToChart({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
      })
    );
  };
  return (
    <div className="ProductCard">
      <div className="productPhoto">
        <img src={product.images[0]} alt="Product" />
      </div>
      <div className="productBottom">
        <Link className="productTitle" to={`/products/${product.id}`}>
          {product.title}
        </Link>
        <div className="productPrice">${product.price}</div>
        {isLoggedIn && (
          <Button type="button" onClick={addToChartHandler}>
            Добавить в корзину
          </Button>
        )}
      </div>
    </div>
  );
};
