import classNames from "classnames";
import style from "./Error.module.scss";

export const Error = ({ error, className = "" }) => {
  return (
    <p className={classNames(style.error, className && className)}>
      {"Упс... Ошибочка:" + error}
    </p>
  );
};