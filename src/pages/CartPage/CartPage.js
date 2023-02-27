import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import { clearCart, removeFromChart } from "../../store/cartSlice";
import "./CartPage.css";

export const CartPage = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartList.cart);
  console.log(cart);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="CartPage">
      <h1>Корзина</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Цена, $</th>
            <th>Количество, шт</th>
            <th>Общая сумма, $</th>
            <th>Удалить</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.quantity * item.price}</td>
                <td>
                  <Button
                    onClick={() => dispatch(removeFromChart({ id: item.id }))}
                  >
                    Удалить
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="totalSum">Общая сумма: ${totalPrice}</div>
      <div className="cartBtns">
        <Button onClick={() => dispatch(clearCart())}>Очистить корзину</Button>
        <Button disabled={true}>Оплатить</Button>
      </div>
    </div>
  );
};
