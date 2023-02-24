import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./CartBlock.css";

export const CartBlock = ({ type, children, onClick }) => {
  const [productNum, setProductNum] = useState(0);
  const addToChart = () => {
    setProductNum(productNum + 1);
  };
  const removeFromChart = () => {
    setProductNum(productNum - 1);
  };
  return (
    <div className="CartBlock">
      <div className="counter">
        <Button
          disabled={productNum === 0}
          className="btn"
          type="button"
          onClick={removeFromChart}
        >
          -
        </Button>
        <div>{productNum}</div>

        <Button className="btn" type="button" onClick={addToChart}>
          +
        </Button>
      </div>
      <Button className="btn" type="button" onClick={addToChart}>
        Добавить в корзину
      </Button>
    </div>
  );
};
