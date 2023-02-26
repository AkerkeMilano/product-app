import { Link } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <div className="notFound">
      <h2>
      Что-то пошло не так. Данной страницы не существует. <Link to="/">Перейти на главную страницу</Link>
      </h2>
    </div>
  );
};