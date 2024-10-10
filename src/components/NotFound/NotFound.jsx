import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import style from "./NotFound.module.scss";
import classNames from "classnames";

export const NotFound = () => (
  <section>
    <Container className={style.container}>
      <div className={style.wrapper}>
        <ul className={style.list}>
          <li className={style.item}>
            <p className={style.text}>4</p>
          </li>
          <li className={style.item}>
            <p className={style.text}>0</p>
          </li>
          <li className={style.item}>
            <p className={style.text}>4</p>
          </li>
        </ul>

        <p className={style.textError}>
          Похоже вы ошиблись, такой страницы не существует!
        </p>

        <Link className={classNames(style.button, "button")} to="/">
          Вернуться на главную
        </Link>
      </div>
    </Container>
  </section>
);