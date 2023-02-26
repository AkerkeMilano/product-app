import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToChart } from "../../store/cartSlice";
import { Button } from "../Button/Button";
import "./CartBlock.css";

export const CartBlock = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const addToChartHandler = () => {
    dispatch(addToChart({id: product.id, title: product.title, price: product.price, quantity: quantity}));
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  }
  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div className="CartBlock">
      <div className="counter">
        <Button
          disabled={quantity === 0}
          className="btn"
          type="button"
          onClick={decrementQuantity}
        >
          -
        </Button>
        <div>{quantity}</div>

        <Button className="btn" type="button" onClick={incrementQuantity}>
          +
        </Button>
      </div>
      <Button className="btn" type="button" onClick={addToChartHandler}>
        Добавить в корзину
      </Button>
    </div>
  );
};
