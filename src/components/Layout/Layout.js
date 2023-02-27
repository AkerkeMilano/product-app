import { useDispatch, useSelector } from "react-redux";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { openLogin } from "../../store/loginSlice";
import { Button } from "../Button/Button";
import { LoginModel } from "../LoginModel/LoginModel";
import { logout } from "../../store/loginSlice";
import "./Layout.css";

export const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFormOpened = useSelector((state) => state.login.isFormOpened);
  const cart = useSelector((state) => state.cartList.cart);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <>
      <header className="header">
        <div className="layoutBlock">
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/">Products</NavLink>
        </div>
        <div className="layoutBlock">
          {isLoggedIn && (
            <div className="cartBlock">
              <div>
                   В корзине {cart.length} товара на сумму ${totalPrice}
              </div>
              <button className="iconBtn" onClick={() => {navigate("/cart")}}>
                <span className="cartIcon"></span>
              </button>
              
            </div>
          )}

          {isLoggedIn ? (
            <Button
              type="button"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => {
                dispatch(openLogin(true));
              }}
            >
              Login
            </Button>
          )}
        </div>

        <LoginModel isFormOpened={isFormOpened} />
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
