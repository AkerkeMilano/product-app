import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";
import { openLogin } from "../../store/loginSlice";
import { Button } from "../Button/Button";
import { submitLogin } from "../../store/loginSlice";
import "./LoginModel.css";

export const LoginModel = ({ isFormOpened }) => {
  const [fields, setFields] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const error = useSelector((state) => state.login.error);
  const handleInputChange = (event) => {
    setFields((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  const closeModal = () => {
    dispatch(openLogin(false));
    setFields({
      username: "",
      password: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitLogin(fields));
    setFields({
      username: "",
      password: "",
    });
  };
  return (
    <Modal isOpened={isFormOpened} onClose={closeModal}>
      <h1>Login</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <Input
          name="username"
          label="Логин"
          handleChange={handleInputChange}
          inputValue={fields.username}
          placeholder="Введите ваш логин"
        />
        <Input
          name="password"
          label="Пароль"
          handleChange={handleInputChange}
          inputValue={fields.password}
          placeholder="Введите ваш пароль"
        />
        {error && <div className="error">{error}</div>}
        <div className="loginBtns">
          <Button type="button" onClick={closeModal}>
            Отмена
          </Button>
          <Button type="submit">Войти</Button>
        </div>
      </form>
    </Modal>
  );
};
