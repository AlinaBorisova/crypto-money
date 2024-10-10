import classNames from "classnames";
import style from "./Container.module.scss";

export const Container = (props) =>
  props.className ? (
    <div className={classNames(style.container, props.className)}>
      {props.children}
    </div>
  ) : (
    <div className={style.container}>{props.children}</div>
  );