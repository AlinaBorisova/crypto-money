import classNames from "classnames";
import { Container } from "../Container/Container";
import style from "./Auth.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccessToken } from "../../store/auth/authSlice";
import { useEffect } from "react";
import { Error } from "../UI/Error/Error";


// Шрифты проверить


export const Auth = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(fetchAccessToken(data));
  };

  const { error } = useSelector((state) => state.auth);
  console.log("error: ", error);
  useEffect(() => {
    reset();
  }, [error, reset]);

  return (
    <Container>
      <div className={style.container}>
        <div className={style.wrapper}>
          <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <legend className={style.title}>Вход в аккаунт</legend>
            <div className={style.inputWrapper}>
              <span
                className={classNames(style.error, style.errorPosition)}
                data-test="auth-error-login">
                  {errors.login && errors.login.message}
              </span>
              <label className={style.label}>Логин</label>
              <input
                className={style.input}
                {...register("login", {
                  required: {
                      value: true,
                      message: "Введите логин",
                  },
                  pattern: {
                    value: /^[a-zA-Z]{6,}$/,
                    message: "Невалидный логин",
                  },
                })}
                aria-invalid={!!errors.login}
              />
            </div>
            <div className={style.inputWrapper}>
              <span
                className={classNames(style.error, style.errorPosition)}
                data-test="auth-error-password">
                  {errors.password && errors.password.message}
              </span>
                <label className={style.label}>Пароль</label>
                  <input
                    type="password"
                    className={style.input}
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Введите пароль",
                      },
                      pattern: {
                        value: /^[a-zA-Z]{6,}$/,
                        message: "Невалидный пароль",
                      },
                    })}
                    aria-invalid={!!errors.password}
                  />
              </div>
              <button
                className={classNames(style.button, "button")}
                type="submit"
                data-test="btn-enter">
                  Войти
              </button>
          </form>
          {error && (
            <Error className={style.error} error={error} />
          )}
        </div>
      </div>
    </Container>
  );
};
