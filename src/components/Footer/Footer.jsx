import { Container } from "../Container/Container";
import { Logo } from "../UI/Logo/Logo";
import style from "./Footer.module.scss";

export const Footer = () => (
  <footer className={style.footer}>
    <Container>
      <div className={style.container}>
        <Logo />
        <span className={style.copy}>© C-Money, 2024</span>
      </div>
    </Container>
  </footer>
);