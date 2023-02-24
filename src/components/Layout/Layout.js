import { Outlet, NavLink } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
  return (
    <>
      <header className="header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};