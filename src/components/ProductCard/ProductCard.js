import { Button } from "../Button/Button";
import "./ProductCard.css";
import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
  return (
    <div className="ProductCard">
      <div className="productPhoto">
        <img src={product.images[0]} alt="Product"/>
      </div>
      <div className="productBottom">
        <Link className="productTitle" to={`/products/${product.id}`}>
            {product.title}
          </Link>
        <Button type="button">
            Добавить в корзину
        </Button>
      </div>
    </div>
  );
};
