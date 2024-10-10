import { Container } from "../Container/Container";
import { Logo } from "../UI/Logo/Logo";
import style from "./Header.module.scss";

export const Header = () => {

  return (
    <header className={style.header}>
      <Container>
        <div className={style.container}>
          <Logo />
        </div>
      </Container>
    </header>
  );
};
